# RADR Web App - Amazon EC2 Deployment Guide

Step-by-step instructions for deploying and updating the RADR web application on Amazon EC2.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Server Setup](#initial-server-setup)
- [Database Setup](#database-setup)
- [Application Deployment](#application-deployment)
- [Nginx Configuration](#nginx-configuration)
- [Process Management](#process-management)
- [Troubleshooting](#troubleshooting)
- [Updating the Application](#updating-the-application)

## Prerequisites

- Amazon EC2 instance running Ubuntu
- SSH access to your EC2 instance
- Git repository access
- Docker installed (for database)

## Initial Server Setup

### 1. Connect to Your EC2 Instance

```bash
ssh -i "your-key.pem" ubuntu@your-ec2-public-dns
```

### 2. Update System Packages

```bash
sudo apt update
sudo apt upgrade -y
```

### 3. Install Required Software

#### Install Git
```bash
sudo apt install git -y
```

#### Install Node.js
```bash
sudo apt install nodejs -y
```

#### Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### Install Yarn
```bash
sudo npm install --global yarn
```

#### Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

#### Install Docker (for PostgreSQL/MySQL database - Optional)
```bash
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
```

**Note:** You may need to log out and back in for Docker group changes to take effect. Docker is only required if you choose to use PostgreSQL/MySQL instead of the default Loki database.

## Database Setup

The RADR application supports two database options:

1. **Loki (In-Memory Database)** - Default option, no external database required
2. **PostgreSQL/MySQL** - For persistent data storage

### Option 1: Loki Database (Recommended for Simple Deployments)

Loki is an in-memory database. In the RADR app, it is configured to load data from the radr lab data CSV files. This is the default option and requires no additional setup.

**Advantages:**
- No external database required
- Simple deployment
- Fast in-memory operations

**Data Setup:**
The application includes the latest data provided by the lab in `radr-backend/src/db/loki/data/radr_data_10-11.csv`. To use your new data:

1. Replace the CSV file in `radr-backend/src/db/loki/data/`
2. Update the file path in `radr-backend/src/db/loki/database.ts` if needed

### Option 2: PostgreSQL/MySQL Database (For Persistent Storage)

If you need persistent data storage, you can use PostgreSQL or MySQL.

#### 1. Create Database Container

Replace ${PASSWORD} with a secure password. Note that you will need to set this password when creating the `.env` file in a few steps.

```bash
docker run --name radr-db \
  -e MYSQL_ROOT_PASSWORD=$PASSWORD \
  -e MYSQL_DATABASE=radr \
  -e MYSQL_USER=radr-user \
  -e MYSQL_PASSWORD=$PASSWORD \
  -p 3307:3306 \
  -d mysql:8
```

#### 2. Verify Database Container

```bash
docker ps
docker logs radr-db
```

## Application Deployment

### 1. Clone the Repository

```bash
cd ~
sudo git clone https://github.com/squid-ney/radr.git
sudo chown -R $USER:$USER radr
cd radr
```

### 2. Choose Database Configuration

#### Option A: Using Loki Database (Default - Recommended)

For simple deployments, the application will use Loki by default. No additional configuration is needed.

#### Option B: Using PostgreSQL/MySQL Database

If you chose to use PostgreSQL/MySQL, configure the environment variables:

```bash
cd radr-backend
cat > .env << EOF
username=radr-user
password=$PASSWORD
database=radr
EOF
```

**Update Database Configuration:**

Update the knexfile to use environment variables:

```bash
# Edit the knexfile
sudo nano src/db/postgres/knexfile.js
```

Replace the content with:

```javascript
export default {
  client: "mysql2",
  connection: {
    database: process.env.database,
    user: process.env.username,
    password: process.env.password,
    port: "3307",
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
```

### 3. Install Dependencies and Build Backend

```bash
cd ~/radr/radr-backend
yarn install
```

**For PostgreSQL/MySQL only:**
```bash
yarn migrate
yarn seed
```

### 5. Build Frontend

```bash
cd ~/radr/radr-frontend
yarn install
yarn build
```

### 6. Deploy Frontend to Nginx

```bash
sudo cp -r ~/radr/radr-frontend/build/. /var/www/html
sudo chown -R www-data:www-data /var/www/html
```

## Nginx Configuration

### 1. Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/radr
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-ec2-public-dns.compute.amazonaws.com;
    root /var/www/html;
    index index.html;

    # API proxy to backend
    location /api {
        proxy_pass http://localhost:9000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Serve static files
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 2. Enable the Site

```bash
sudo ln -s /etc/nginx/sites-available/radr /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

## Process Management

### 1. Start Backend with PM2

#### For Loki Database (Default):
```bash
cd ~/radr/radr-backend
sudo pm2 start yarn --name "radr-backend" -- start
sudo pm2 startup
sudo pm2 save
```

#### For PostgreSQL/MySQL Database:
```bash
cd ~/radr/radr-backend
sudo pm2 start yarn --name "radr-backend" -- start --postgres
sudo pm2 startup
sudo pm2 save
```

### 2. Verify Services

```bash
# Check PM2 processes
pm2 status

# Check Nginx status
sudo systemctl status nginx

# Check Docker containers
docker ps
```

## Troubleshooting

### Common Issues

#### 1. Database Connection Issues

**For PostgreSQL/MySQL:**
- Verify Docker container is running: `docker ps`
- Check database logs: `docker logs radr-db`
- Verify environment variables in `.env` file

**For Loki Database:**
- Check if CSV data file exists: `ls -la ~/radr/radr-backend/src/db/loki/data/`
- Verify CSV file path in `database.ts`
- Check application logs for data loading errors: `pm2 logs radr-backend`

#### 3. Nginx Configuration Issues
- Test configuration: `sudo nginx -t`
- Check error logs: `sudo tail -f /var/log/nginx/error.log`

#### 4. PM2 Process Issues
- Check process status: `pm2 status`
- View logs: `pm2 logs radr-backend`
- Restart if needed: `pm2 restart radr-backend`

### Useful Commands

```bash
# View logs
pm2 logs radr-backend --lines 100

# Restart backend
pm2 restart radr-backend

# Check nginx status
sudo systemctl status nginx

# View nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check database container
docker ps
docker logs radr-db
```

## Updating the Application

### 1. Pull Latest Changes

```bash
cd ~/radr
git pull origin main
```

### 2. Update Backend

```bash
cd ~/radr/radr-backend
yarn install
```

**For PostgreSQL/MySQL only:**
```bash
yarn migrate
```

**Restart the backend:**
```bash
pm2 restart radr-backend
```

### 3. Update Frontend

```bash
cd ~/radr/radr-frontend
yarn install
yarn build
sudo cp -r build/. /var/www/html
sudo chown -R www-data:www-data /var/www/html
```

### 4. Verify Deployment

```bash
# Check backend status
pm2 status

# Check nginx status
sudo systemctl status nginx

# Test the application
curl http://localhost
```

## Data Management

### Loki Database Data

The Loki database loads data from CSV files. To update the data:

1. **Replace the CSV file:**
   ```bash
   # Backup existing data
   cp ~/radr/radr-backend/src/db/loki/data/radr_data_10-11.csv ~/radr/radr-backend/src/db/loki/data/backup_$(date +%Y%m%d).csv
   
   # Upload your new CSV file to the server
   # Then replace the existing file
   cp your_new_data.csv ~/radr/radr-backend/src/db/loki/data/radr_data_10-11.csv
   ```

2. **Update file path if needed:**
   Edit `radr-backend/src/db/loki/database.ts` if your CSV file has a different name or location.

3. **Restart the application:**
   ```bash
   pm2 restart radr-backend
   ```

### PostgreSQL/MySQL Database Data

If new data, repeat the previous steps for setting up Postgres data (yarn migrate and seed). No need to worry aabout migraing or saving existing data since there are no write operattions in this application. The db can be killed andd rebuilt at any point. Just restart the set up aand ingesst the data from the excel sheet.

## Monitoring

```bash
# Backend health check
curl http://localhost:9000/api

# Frontend accessibility
curl http://localhost

# API endpoint test
curl http://localhost:9000/api/variants
```

**For PostgreSQL/MySQL only:**
```bash
# Database connectivity
docker exec radr-db mysql -u radr-user -p -e "SELECT 1"
```

### Log Monitoring

```bash
# PM2 logs
pm2 logs radr-backend

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Docker logs
docker logs radr-db
```

## Backup and Recovery

This deployment guide should help you successfully deploy and maintain the RADR web application on Amazon EC2. Remember to replace placeholder values (like EC2 DNS names) with your actual values. 
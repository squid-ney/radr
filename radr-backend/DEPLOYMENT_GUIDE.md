# RADR Backend Deployment Guide

## Vercel Deployment

### Prerequisites
1. Make sure you have the Vercel CLI installed: `npm i -g vercel`
2. Ensure your TypeScript code compiles correctly: `yarn build`

### Environment Variables
You need to set the following environment variables in your Vercel dashboard:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:
   - `username`: Your database username
   - `password`: Your database password  
   - `database`: Your database name
   - `NODE_ENV`: Set to `production`

### Database Configuration
The app uses two database options:
- **Loki** (default): Uses local CSV files - works out of the box
- **Postgres**: Requires database credentials and connection

For production, you'll likely want to use Postgres. Make sure your database is accessible from Vercel's servers.

### Deployment Steps

1. **Build the project**:
   ```bash
   yarn build
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

3. **Update CORS origins**: 
   - Edit `src/app.ts` and update the `allowedOrigins` array with your actual frontend domain
   - Redeploy after making changes

### API Endpoints

Your backend will be available at:
- `https://your-vercel-domain.vercel.app/api` - Health check
- `https://your-vercel-domain.vercel.app/api/variants` - Get all variants
- `https://your-vercel-domain.vercel.app/api/variant` - Get specific variant (POST)

### Troubleshooting

1. **404 errors**: Make sure your `vercel.json` is correctly configured
2. **Database connection errors**: Check your environment variables
3. **CORS errors**: Update the allowed origins in `app.ts`
4. **Build errors**: Ensure TypeScript compiles without errors

### Local Development

For local development, the app will run on port 9000:
```bash
yarn start
```

The app will automatically use Loki database for local development unless you pass the `--postgres` flag. 
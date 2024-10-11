import React from "react";
import { Typography, AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex" }}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h4" component="h1">
            RADR
          </Typography>
          <Tabs
            onChange={handleChange}
            value={value}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Home" onClick={() => navigate("/")} />
            <Tab label="Repository" onClick={() => navigate("/variants")} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

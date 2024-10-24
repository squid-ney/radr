import React from "react";
import { Typography, AppBar, Toolbar, Tab, Tabs , useTheme} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const theme = useTheme();

  return (
    <div style={{ display: "flex" , padding: theme.spacing(2)}}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h4" component="h1">
            RADR
          </Typography>
          <Tabs
              style={{ paddingLeft: "10px"}}
            onChange={handleChange}
            value={value}
            textColor="secondary"
            indicatorColor="secondary"
              TabIndicatorProps={{
                style: {
                  backgroundColor: 'white',
                }
              }}

          >
            <Tab label="Repository" onClick={() => navigate("/")} />
            <Tab label="About" onClick={() => navigate("/about")} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

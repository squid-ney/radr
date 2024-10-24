import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Article, GitHub, Science } from "@mui/icons-material";

export const BottomNavBar = () => {
  return (
      <BottomNavigation showLabels
          // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      >
        <BottomNavigationAction label="Source code" icon={<GitHub />} />
        <BottomNavigationAction label="Paper" icon={<Article />} />
        <BottomNavigationAction label="Lab website" icon={<Science />} />
      </BottomNavigation>
  );
};
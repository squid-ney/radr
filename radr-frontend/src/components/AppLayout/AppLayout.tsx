import React from "react";
import { Box, styled } from "@mui/system";
import { Outlet } from "react-router";
import { NavBar } from "../NavBar/NavBar";

const Content = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const AppLayout = () => {
  return (
    <div className="AppLayout">
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

import React from "react";
import { Box, styled } from "@mui/system";
import { Outlet } from "react-router";
import { NavBar } from "../NavBar/NavBar";
import { BottomNavBar } from "../BottomNavBar/BottomNavBar";

const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  overflowY: 'hidden',
});

const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 64px - 64px)',
}));

const StickyBottomNavBar = styled(BottomNavBar)({
  position: 'sticky',
  bottom: 0,
  flexShrink: 0,
  height: '64px',
});

export const AppLayout = () => {
  return (
      <AppContainer>
        <NavBar />
        <Content>
          <Outlet />
        </Content>
        <StickyBottomNavBar />
      </AppContainer>
  );
};
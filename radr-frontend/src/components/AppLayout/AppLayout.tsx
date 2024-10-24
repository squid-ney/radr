import React from "react";
import { Box, styled } from "@mui/system";
import { Outlet } from "react-router";
import { NavBar } from "../NavBar/NavBar";
import { BottomNavBar } from "../BottomNavBar/BottomNavBar";

const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // Ensure it takes the full height of the viewport
  overflowY: 'hidden', // Prevent main scrollbar
});

const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflowY: 'auto', // Allow scrolling within content
  maxHeight: 'calc(100vh - 64px - 64px)', // Adjust based on NavBar and BottomNavBar height
}));

const StickyBottomNavBar = styled(BottomNavBar)({
  position: 'sticky',
  bottom: 0,
  flexShrink: 0,
  height: '64px', // Ensure it has enough space
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
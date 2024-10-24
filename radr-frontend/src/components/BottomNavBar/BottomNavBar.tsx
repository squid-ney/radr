import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Article, GitHub, Science } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const BottomNavigationActionStyled = styled(BottomNavigationAction)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const BottomNavBar = () => {

  return (
      <BottomNavigation showLabels>
        <BottomNavigationActionStyled label="Source code" icon={<GitHub/>} href={"https://github.com/squid-ney/radr"} />
        <BottomNavigationActionStyled label="Paper" icon={<Article />} />
        <BottomNavigationActionStyled label="Lab website" icon={<Science />} href={"https://labs.icahn.mssm.edu/kuanhuanglab/"} />
      </BottomNavigation>
  );
};
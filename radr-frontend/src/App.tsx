import { Home } from "./pages/Home";
import { Typography, AppBar } from "@mui/material";
import { Box, styled } from "@mui/system";

const Content = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}));
function App() {
  return (
    <div className="App">
      <AppBar color="primary">
        <Typography variant="h3" component="h1">
          RADR
        </Typography>
      </AppBar>
      <Content>
        <Home />
      </Content>
    </div>
  );
}

export default App;

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme";
import "./App.css";

import RoutesIndex from "./routes/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutesIndex />
    </ThemeProvider>
  );
}

export default App;

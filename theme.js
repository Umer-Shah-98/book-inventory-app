import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0" // Purple color from your UI
    },
    secondary: {
      main: "#f50057"
    },
    background: {
      default: "#f5f5f5"
    }
  },
  direction: "rtl" // For RTL support (Urdu/Arabic)
});
export default theme;

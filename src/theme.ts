import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003538",
    },
    secondary: {
      main: "#136759",
    },
    error: {
      main: "#66001F",
    },
    warning: {
      main: "#FFB133",
      light: "#fcf5eb",
    },
  },
  typography: {
    fontFamily: "Satoshi, sans-serif",
  },
});

export default theme;

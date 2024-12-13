import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const MyThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default MyThemeProvider;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as Themes from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UIProvider } from "../context/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={Themes.darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;

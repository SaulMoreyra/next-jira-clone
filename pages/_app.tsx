import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import * as Themes from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={Themes.darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}

export default MyApp;

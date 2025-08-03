import { type PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import { UserAuthStateProvider } from "#islands/ContextHooks/useUserContext.tsx";
import { ThemeManager } from "#islands/ThemeManager/index.tsx";
import { AuthStateManager } from "#islands/AuthStateManager/index.tsx";
import { SnackBarManager } from "#islands/SnackBarManager/index.tsx";
import { ThemeProvider } from "#islands/ContextHooks/useThemeContext.tsx";
import { SnackBarProvider } from "#islands/ContextHooks/useSnackBarPopUp.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Monitext</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg"></link>
      </head>
      <body>
        <UserAuthStateProvider>
          <ThemeProvider>
            <SnackBarProvider>
              <ThemeManager />
              <AuthStateManager />
              <SnackBarManager />
              <Partial name="body">
                <Component />
              </Partial>
            </SnackBarProvider>
          </ThemeProvider>
        </UserAuthStateProvider>
      </body>
    </html>
  );
}

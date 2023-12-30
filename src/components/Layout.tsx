// components/Layout.tsx
import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
  spacing: 8,
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <header>
        <h1>Admin Dashboard</h1>
      </header> */}
      <main className="flex min-h-screen flex-col items-center justify-between">
        {children}
      </main>
      <footer>
        <p>&copy; 2023 Admin Dashboard</p>
      </footer>
    </ThemeProvider>
  );
};

export default Layout;

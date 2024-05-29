"use client"; // Ensure this is a client component

import { ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    primary: {
      main: '#280137', //midnight purple
    },
    secondary: {
      main: '#f50057', //rose
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
}

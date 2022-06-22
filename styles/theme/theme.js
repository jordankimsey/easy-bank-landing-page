import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // dark blue
      main: 'hsl(233, 26%, 24%)', 
      //lime green
      light: 'hsl(136, 65%, 51%)',
      //bright cyan
      dark: 'hsl(192, 70%, 51%)',
    },
    neutral: {
      //grayish blue
      main: 'hsl(233, 8%, 62%)',
      //light grayish blue
      light: 'hsl(220, 16%, 96%)',
      //very light gray
      dark: 'hsl(0, 0%, 98%)',
      //white
      contrastText: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    fontFamily: ['Public Sans', 'sans-serif'].join(','),
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
         },
    subtitle1: {
      fontWeight: 300,
    },
  },
});

export default theme;

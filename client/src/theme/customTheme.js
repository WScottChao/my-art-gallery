import { createTheme, alpha } from '@mui/material/styles';

const primaryColor = {
  light: '#D19B6C',
  main: '#C38154',
  dark: '#A8643C',
  contrastText: '#FFFFFF',
};

const backgroundColors = {
  light: {
    default: '#F8F1E5',
    paper: '#FFFFFF',
  },
  dark: {
    default: '#2D2D2D',
    paper: '#3A3A3A',
  },
};

const textColors = {
  light: {
    primary: '#2D2D2D',
    secondary: '#4D4D4D',
  },
  dark: {
    primary: '#F8F1E5',
    secondary: '#CCCCCC',
  },
};

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: primaryColor,
    background: backgroundColors.light,
    text: textColors.light,
    divider: alpha('#000000', 0.12),
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5,
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;

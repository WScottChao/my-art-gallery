import { alpha } from '@mui/material/styles';

export const primaryColor = {
  light: '#D19B6C',
  main: '#C38154',
  dark: '#A8643C',
  contrastText: '#FFFFFF',
};

export const backgroundColors = {
  light: {
    default: '#F8F1E5',
    paper: '#FFFFFF',
  },
  dark: {
    default: '#2D2D2D',
    paper: '#3A3A3A',
  },
};

export const textColors = {
  light: {
    primary: '#2D2D2D',
    secondary: '#4D4D4D',
  },
  dark: {
    primary: '#F8F1E5',
    secondary: '#CCCCCC',
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: primaryColor,
    background: backgroundColors[mode],
    text: textColors[mode],
    divider: mode === 'dark' ? alpha('#FFFFFF', 0.12) : alpha('#000000', 0.12),
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

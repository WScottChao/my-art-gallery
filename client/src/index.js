import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS styles
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/customTheme'; // Import your custom theme
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Apply custom theme directly */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline provides consistent Material-UI styling */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



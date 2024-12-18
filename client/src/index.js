import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS styles
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/customTheme'; // Import your custom theme
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Apply custom theme directly */}
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {/* CssBaseline provides consistent Material-UI styling */}
        <CssBaseline />
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);



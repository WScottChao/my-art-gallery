import React from 'react';
import { Box, Container } from '@mui/material';
import Footer from './Footer';
import AppAppBar from './AppAppBar';

const PageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
        backgroundColor: 'background.default', // Background color from theme
      }}
    >
      {/* Navigation */}
      <AppAppBar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Pushes the Footer to the bottom
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          py: 8, // Padding for spacing
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default PageLayout;

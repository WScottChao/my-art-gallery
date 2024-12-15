import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar';
import MainContent from '../components/MainContent';
import Latest from '../components/Latest';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Global CSS reset to ensure consistent styles */}
      <CssBaseline />

      {/* Top Navigation Bar */}
      <AppAppBar />

      {/* Main Page Content */}
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensures the content fills the full viewport height
          pt: { xs: 10, sm: 12 }, // Adds top padding to prevent content from being hidden under the AppBar
          pb: 4, // Adds bottom padding to ensure spacing above the Footer
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            flexGrow: 1, // Allows the container to expand and fill available space
            display: 'flex',
            flexDirection: 'column',
            gap: 4, // Spacing between child components
          }}
        >
          {/* Main Content Section */}
          <MainContent />

          {/* Latest Updates Section */}
          <Latest />
        </Container>
      </Box>

      {/* Footer Section */}
      <Footer />
    </>
  );
}


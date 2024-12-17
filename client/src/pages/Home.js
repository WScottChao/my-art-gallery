import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Global CSS reset to ensure consistent styles */}
      <CssBaseline />

      {/* Top Navigation Bar */}
      <AppAppBar 
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: '64px',
        }}
      />

      {/* Main Page Content */}
       <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          marginTop: '64px',
          paddingBottom: '50px',
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

        <Box
          sx={{
            marginTop: '32px',
            paddingX: 2,
            paddingY: 4,
          }}
        >
            {/* Main Content */}
            <MainContent />
        </Box>
          
          {/* Footer Section */}
          <Footer />
        </Container>
      </Box>     
    </>
  );
}


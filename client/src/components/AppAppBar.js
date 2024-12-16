import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/header-logo.png'; // Import logo

// Custom styles for the toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)', // Adds blur effect to the background
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider, // Dynamic border color
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px', // Adds padding for spacing
}));

export default function AppAppBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state (replace with your auth logic)

  // Handle click for "My Collections"
  const handleMyCollectionsClick = () => {
    if (isLoggedIn) {
      navigate('/my-collections'); // Redirect to "My Collections" if logged in
    } else {
      navigate('/sign-in'); // Redirect to "Sign In" if not logged in
    }
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        top: '10px',
        height: '56px',
        bgcolor: 'transparent', // Transparent background
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          {/* Left Section: Logo and Navigation Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Logo (clickable, navigates to home) */}
            <Box
              component="img"
              src={logo}
              alt="My Art Gallery Logo"
              sx={{ height: '40px', width: 'auto', cursor: 'pointer' }}
              onClick={() => navigate('/')} // Navigate to Home
            />
            {/* Navigation Buttons */}
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => navigate('/')} // Navigate to Home
            >
              Home
            </Button>
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={handleMyCollectionsClick} // Handle "My Collections"
            >
              My Collections
            </Button>
          </Box>

          {/* Right Section: Sign In and Sign Up Buttons */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => navigate('/sign-in')} // Navigate to Sign In
            >
              Sign in
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() => navigate('/sign-up')} // Navigate to Sign Up
              sx={{
                backgroundColor: '#C38154', // Primary button color
                '&:hover': { backgroundColor: '#A8643C' }, // Hover effect
              }}
            >
              Sign up
            </Button>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

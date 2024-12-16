import React, { useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/header-logo.png';
import { AuthContext } from '../context/AuthContext';
import Typography from '@mui/material/Typography';


// Custom styles for the toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const navigate = useNavigate();
  const { authState, logout } = useContext(AuthContext);

  // Handle navigation to My Collections
  const handleMyCollectionsClick = () => {
    if (authState?.token) {
      navigate('/my-collections'); // Navigate to My Collections if logged in
    } else {
      navigate('/sign-in'); // Redirect to Sign In if not logged in
    }
  };

  // Handle Logout
  const handleLogout = () => {
    logout(); // Call the logout function
    navigate('/'); // Redirect to Home after logout
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        top: '10px',
        height: '56px',
        bgcolor: 'transparent',
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
              onClick={() => navigate('/')}
            />
            {/* Navigation Buttons */}
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={handleMyCollectionsClick}
            >
              My Collections
            </Button>
          </Box>

          {/* Right Section: Sign In/Sign Up or User Info */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {authState?.token ? (
              // If user is logged in
              <>
                <Typography variant="body1" color="primary">
                  {authState.username || 'User'}
                </Typography>
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              // If user is not logged in
              <>
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  onClick={() => navigate('/sign-in')}
                >
                  Sign in
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={() => navigate('/sign-up')}
                  sx={{
                    backgroundColor: '#C38154',
                    '&:hover': { backgroundColor: '#A8643C' },
                  }}
                >
                  Sign up
                </Button>
              </>
            )}
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

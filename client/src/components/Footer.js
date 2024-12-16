import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../assets/images/header-logo.png';

// Copyright Section
function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, textAlign: 'center' }}>
      {'Copyright © '}
      <Link color="text.secondary" href="/" underline="hover">
        My Art Gallery
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

// Footer Component
export default function Footer() {
  const [successMessage, setSuccessMessage] = useState(''); // State to manage success message
  const [email, setEmail] = useState(''); // State for email input

  const handleSubscribe = () => {
    const emailPattern = /\S+@\S+\.\S+/; 
    if (email && emailPattern.test(email)) {
      setSuccessMessage('Subscribed successfully!');
      setEmail(''); // Clear the input field
      setTimeout(() => setSuccessMessage(''), 5000); // Hide the message after 5 seconds
    } else {
      setSuccessMessage('Please enter a valid email address.');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          textAlign: 'center',
        }}
      >

        {/* Newsletter Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            width: '100%',
            maxWidth: { xs: '100%', sm: '60%' },
          }}
        >
          
          {/* Logo */}
          <Box sx={{ mb: 0 }}>
            <Box component="img" src={logo} alt="My Art Gallery" sx={{ height: 40 }} />
          </Box>

          {/* Newsletter */}
          <Typography variant="h6" sx={{ mb: 1 }}>
            <strong>Join the newsletter</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Subscribe for weekly updates. Explore your favorite art.
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap>
            <TextField
              id="email-newsletter"
              size="small"
              variant="outlined"
              fullWidth
              placeholder="Your email address"
              aria-label="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: 250 }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSubscribe}
              sx={{
                flexShrink: 0,
                backgroundColor: '#C38154',
                '&:hover': { backgroundColor: '#A8643C' },
              }}
            >
              Subscribe
            </Button>
          </Stack>

          {/* Success Message */}
          {successMessage && (
            <Typography variant="body2" sx={{ color: '#4CAF50', mt: 1 }}>
              {successMessage}
            </Typography>
          )}

        </Box>

        {/* About Us and Contact Links */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Link
            color="text.secondary"
            variant="body2"
            href="#about"
            sx={{
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            About Us
          </Link>
          <Typography sx={{ opacity: 0.6 }}>|</Typography>
          <Link
            color="text.secondary"
            variant="body2"
            href="#contact"
            sx={{
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Contact
          </Link>
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
            pt: { xs: 4, sm: 6 },
            gap: 2,
          }}
        >
          
          {/* Privacy Policy and Terms */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box>
              <Link color="text.secondary" variant="body2" href="#privacy" underline="hover">
                Privacy Policy
              </Link>
              <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>&bull;</Typography>
              <Link color="text.secondary" variant="body2" href="#terms" underline="hover">
                Terms of Service
              </Link>
            </Box>
            <Copyright />
          </Box>

          {/* Social Icons */}
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: { xs: 'center', sm: 'flex-start' }, color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/WScottChao/my-art-gallery"
              aria-label="GitHub"
              sx={{
                '&:hover': { color: '#C38154' },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}

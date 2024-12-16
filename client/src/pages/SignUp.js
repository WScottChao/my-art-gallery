import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import logo from '../assets/images/header-logo.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow: theme.shadows[2],
}));

const SignUpContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  background: theme.palette.background.default,
}));

export default function SignUp() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/'); // Navigate back to the home page
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
    alert('Account created successfully!');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <SignUpContainer>
        <StyledCard>
          {/* Logo with click handler */}
          <Box
            sx={{ display: 'flex', justifyContent: 'center', mb: 2, cursor: 'pointer' }}
            onClick={handleLogoClick}
          >
            <Box
              component="img"
              src={logo}
              alt="My Art Gallery Logo"
              sx={{ height: 60 }}
            />
          </Box>

          {/* Title */}
          <Typography component="h1" variant="h4" align="center">
            Sign up for My Art Gallery
          </Typography>

          {/* Sign Up Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              fullWidth
              required
            />
            <TextField
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              fullWidth
              required
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              fullWidth
              required
            />
            <FormControlLabel
              control={<Checkbox value="subscribe" color="primary" />}
              label="Subscribe to weekly updates"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign up
            </Button>
          </Box>

          <Divider>or</Divider>

          {/* Social Login */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={() => alert('Sign up with Google')}
            >
              Sign up with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<FacebookIcon />}
              onClick={() => alert('Sign up with Facebook')}
            >
              Sign up with Facebook
            </Button>
          </Box>

          {/* Sign In Link */}
          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Link
              variant="body2"
              href="/sign-in"
              sx={{ cursor: 'pointer' }}
            >
              Sign in
            </Link>
          </Typography>
        </StyledCard>
      </SignUpContainer>
    </React.Fragment>
  );
}

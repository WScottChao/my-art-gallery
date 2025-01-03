import React, { useState, useContext } from 'react';
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
import logo from '../assets/images/header-logo.png'; // Logo image for the app
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import ForgotPassword from '../components/ForgotPassword'; // Forgot password component
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios'; // For API requests
import { AuthContext } from '../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

// Styled Card for the login form
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
  boxShadow: theme.shadows[2], // Slight shadow for better visibility
}));

// Container for the SignIn page
const SignInContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  background: theme.palette.background.default,
}));

export default function SignIn() {
  const navigate = useNavigate(); // For navigation
  const { signin } = useContext(AuthContext);

  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const handleForgotPasswordOpen = () => setOpenForgotPassword(true);
  const handleForgotPasswordClose = () => setOpenForgotPassword(false);

  // Handle form submission for login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

     const loginData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  if (!loginData.email || !loginData.password) {
    setErrorMessage('Email and password are required.');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(loginData.email)) {
    setErrorMessage('Please enter a valid email address.');
    return;
  }

  setLoading(true);
  setErrorMessage('');

  try {
    const response = await axios.post('http://localhost:8083/api/lowCode/sys/login', loginData);

    if (response.data.code === 200 && response.data.data) {
      const { username, token } = response.data.data;

      // 调用 signin 并传入 username 和 token
      signin(username, token);

      alert('Sign in successful!');
      navigate('/');
    } else {
      throw new Error(response.data?.msg || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    setErrorMessage(
      error.response?.data?.msg || error.message || 'Invalid email or password.'
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <React.Fragment>
      {/* Reset global CSS */}
      <CssBaseline />

      <SignInContainer>
        {/* Login Form Card */}
        <StyledCard>
          {/* Logo - Clickable to return to the home page */}
          <Box
            sx={{ display: 'flex', justifyContent: 'center', mb: 2, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Box
              component="img"
              src={logo}
              alt="My Art Gallery Logo"
              sx={{ height: 60 }}
            />
          </Box>

          {/* Page Title */}
          <Typography component="h1" variant="h4" align="center">
            Sign in to My Art Gallery
          </Typography>

          {/* Error Message */}
          {errorMessage && (
            <Typography color="error" variant="body2" align="center">
              {errorMessage}
            </Typography>
          )}

          {/* Sign In Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
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
              autoComplete="current-password"
              fullWidth
              required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {loading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <CircularProgress size={24} />
              </Box>
            )}

            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>

            {/* Forgot Password Link */}
            <Link
              variant="body2"
              onClick={handleForgotPasswordOpen}
              sx={{ cursor: 'pointer', textAlign: 'center' }}
            >
              Forgot password?
            </Link>
          </Box>

          {/* Forgot Password Modal */}
          <ForgotPassword
            open={openForgotPassword}
            handleClose={handleForgotPasswordClose}
          />

          <Divider>or</Divider>

          {/* Social Login Options */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={() => alert('Google Sign In')}
            >
              Sign in with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<FacebookIcon />}
              onClick={() => alert('Facebook Sign In')}
            >
              Sign in with Facebook
            </Button>
          </Box>

          {/* Sign Up Link */}
          <Typography align="center" sx={{ mt: 2 }}>
            Don&apos;t have an account?{' '}
            <Link variant="body2" href="/sign-up" sx={{ cursor: 'pointer' }}>
              Sign up
            </Link>
          </Typography>
        </StyledCard>
      </SignInContainer>
    </React.Fragment>
  );
}

import * as React from 'react';
import { useContext } from 'react';
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
  const { login } = useContext(AuthContext);

  // Redirect to the home page when the logo is clicked
  const handleLogoClick = () => {
    navigate('/'); // Navigate to the home page
  };

  // Forgot password modal state
  const [openForgotPassword, setOpenForgotPassword] = React.useState(false);

  const handleForgotPasswordOpen = () => setOpenForgotPassword(true);
  const handleForgotPasswordClose = () => setOpenForgotPassword(false);

  // Handle form submission for login
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh
    const data = new FormData(event.currentTarget);

    // Prepare login data for API request
    const loginData = {
      username: data.get('email'),
      password: data.get('password'),
    };

    try {
      // Make POST request to the login API
      const response = await axios.post('http://localhost:8083/api/lowCode/sys/login', loginData);
      console.log('Sign in successful:', response.data);

      // Save the token to localStorage
      localStorage.setItem('token', response.data.token);
      login(response.data.username);

      alert('Sign in successful!'); // Show success message
      navigate('/'); // Redirect to the home page
    } catch (error) {
      console.error('Sign in failed:', error);
      alert('Sign in failed: Invalid username or password'); // Show error message
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
            onClick={handleLogoClick}
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign in
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

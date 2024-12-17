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
import logo from '../assets/images/header-logo.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

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
  const [loading, setLoading] = React.useState(false);

  // Handle logo click to navigate back to the home page
  const handleLogoClick = () => {
    navigate('/'); // Navigate back to the home page
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const data = new FormData(event.currentTarget);

    // Basic input validation
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');

    if (!username || !email || !password) {
        alert('All fields are required.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    setLoading(true);

    const registerData = { username, password, email };

    try {
      // Send a POST request to the registration API
      const response = await axios.post(
        'http://localhost:8083/api/lowCode/sys/reg',
        registerData
      );
      console.log('Registration successful:', response.data);

      // Show a success alert and navigate to the sign-in page
      alert('Account created successfully!');
      navigate('/sign-in'); // Redirect to the sign-in page
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed: Please check your details and try again.');
    }
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
            {/* Username Field */}
            <TextField
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              fullWidth
              required
            />

            {/* Email Field */}
            <TextField
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              fullWidth
              required
            />

            {/* Password Field */}
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              fullWidth
              required
            />

            {/* Checkbox */}
            <FormControlLabel
              control={<Checkbox value="subscribe" color="primary" />}
              label="Subscribe to weekly updates"
            />

            {/* Submit Button */}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading} // Disable button when loading
            >
                {loading ? 'Signing Up...' : 'Sign up'}
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

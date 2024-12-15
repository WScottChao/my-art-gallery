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
import ForgotPassword from '../components/ForgotPassword';

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

const SignInContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  background: theme.palette.background.default,
}));

export default function SignIn() {
  const [openForgotPassword, setOpenForgotPassword] = React.useState(false);

  const handleForgotPasswordOpen = () => setOpenForgotPassword(true);
  const handleForgotPasswordClose = () => setOpenForgotPassword(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    alert('Sign in successful!');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <SignInContainer>
        <StyledCard>
          {/* Logo */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="My Art Gallery Logo"
              sx={{ height: 60 }}
            />
          </Box>

          {/* Title */}
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

          {/* Forgot Password Dialog */}
          <ForgotPassword
            open={openForgotPassword}
            handleClose={handleForgotPasswordClose}
          />

          <Divider>or</Divider>

          {/* Social Login */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => alert('Google Sign In')}
            >
              Sign in with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => alert('Facebook Sign In')}
            >
              Sign in with Facebook
            </Button>
          </Box>

          {/* Sign Up Link */}
          <Typography align="center" sx={{ mt: 2 }}>
            Don&apos;t have an account?{' '}
            <Link
              variant="body2"
              onClick={() => alert('Go to Sign Up Page')}
              sx={{ cursor: 'pointer' }}
            >
              Sign up
            </Link>
          </Typography>
        </StyledCard>
      </SignInContainer>
    </React.Fragment>
  );
}

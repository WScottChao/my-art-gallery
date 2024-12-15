import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent'; // Correct import
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ForgotPassword({ open, handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailInput = event.target.elements.email.value;
    console.log('Password reset link sent to:', emailInput);
    alert(`A password reset link has been sent to ${emailInput}`);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
        sx: { backgroundImage: 'none', borderRadius: 2, padding: 2 },
      }}
    >
      <DialogTitle
        sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C38154' }}
      >
        Forgot Your Password?
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
        }}
      >
        <DialogContentText sx={{ fontSize: '1rem', color: '#555' }}>
          Please enter the email address associated with your account. We'll
          send you a link to reset your password and get you back to exploring
          your favorite art.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          placeholder="Your email address"
          type="email"
          fullWidth
          sx={{ borderRadius: 1 }}
        />
      </DialogContent>
      <DialogActions sx={{ pb: 2, px: 3, justifyContent: 'space-between' }}>
        <Button
          onClick={handleClose}
          sx={{ color: '#C38154', textTransform: 'none' }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: '#C38154',
            '&:hover': { backgroundColor: '#A8643C' },
            textTransform: 'none',
          }}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}

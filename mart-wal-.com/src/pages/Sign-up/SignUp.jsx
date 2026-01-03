import * as React from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Header } from '../../components/Header/Header';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  // Glass-like effect: white but slightly see-through
  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
  boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

export default function SignUp() {
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');

  const validateInputs = () => {
    const password = document.getElementById('password');
    const name = document.getElementById('name');
    let isValid = true;

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameError || passwordError) return;
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      password: data.get('password'),
    });
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <CssBaseline />
      <Header />
      <NavBar />
      <Stack
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 2, sm: 4 },
        }}
      >
        <Card variant="outlined">
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField id="name" name="name" required fullWidth placeholder="Jon Snow" error={nameError} helperText={nameErrorMessage} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField required fullWidth name="password" placeholder="••••••" type="password" id="password" error={passwordError} helperText={passwordErrorMessage} />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
              Sign up
            </Button>
          </Box>
          <Divider sx={{ my: 1 }}>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link component="button" type="button" variant="body2">
              Sign in
            </Link>
          </Typography>
        </Card>
      </Stack>
    </Box>
  );
}
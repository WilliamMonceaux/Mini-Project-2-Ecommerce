import { TextField, Button, Box } from '@mui/material';
import './form-container.css';

function FormContainer() {
  return (
    <main>
        <div className='flex-container'>
      <form>
        <Box
        component='form'
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: 'column',
            gap: 2,
            width: "500px",
            height: "400px",
            border: "2px solid black",
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
            <TextField required id='username-input' variant='outlined' label='Username:' fullWidth />
            <TextField required id='password-input' variant='outlined' label='Password:' fullWidth />
            <Button sx={{border: '2px solid black', width: '20%', height: '10%', fontSize: '1.2rem'}} variant='contained'>Submit</Button>
        </Box>
      </form>
      </div>
    </main>
  );
}

export { FormContainer };

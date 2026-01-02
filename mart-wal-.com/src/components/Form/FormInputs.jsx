import { TextField, Box, Button } from '@mui/material';

function FormInputs() {
    return(<Box sx={{}}>
    <TextField label='Username:' variant='outlined' />
    <TextField label='Password:' variant='outlined' />
    </Box>);
}

export { FormInputs };
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2, 
        px: 2, 
        mt: 'auto',
        fontSize: '1.2rem',
        backgroundColor: 'black', 
        color: 'white' 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2026 Mart-Wal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export { Footer };
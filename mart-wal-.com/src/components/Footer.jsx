import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2, 
        px: 2, 
        mt: 'auto',
        backgroundColor: 'black', 
        color: 'white' 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{ fontSize: '1.4rem'}}>
          © 2026 Mart-Wal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export { Footer };
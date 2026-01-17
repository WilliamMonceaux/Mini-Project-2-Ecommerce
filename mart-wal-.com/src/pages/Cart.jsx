import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { Button } from "@mui/material";
import { Products } from "../components/Products.jsx";
import { Box, Typography } from '@mui/material';

function Cart() {
  const { cart, removeProduct } = useContext(CartContext);

  if(cart.length === 0) {
   return ( <Box sx={{textAlign: 'center', mt: '3rem', fontFamily: 'sans-serif' }}>
      <Typography component='h2' variant='h3'>Cart is empty</Typography>
    </Box>);
  }

  return (
    <Products products={cart}>
      {(product) => (
        <Button
          variant="contained"
          size="medium"
          sx={{ bgcolor: "#CC0000", color: "white" }}
          onClick={(e) => {
            e.preventDefault();
            removeProduct(product.id);
          }}
        >
          Remove Item
        </Button>
  )}
    </Products>
  );
}

export { Cart };

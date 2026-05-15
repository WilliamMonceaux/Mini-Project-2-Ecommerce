import { CartContext } from '../Context/CartContext';
import { Button } from '@mui/material';
import { useContext } from 'react';

function RemoveItemBtn({ productId }) {
    const { removeProduct } = useContext(CartContext);
    return(
          <Button
            variant="contained"
            size="medium"
            sx={{ bgcolor: "#CC0000", color: "white", fontWeight: "bold" }}
            onClick={(e) => {
              e.preventDefault();
              removeProduct( productId );
            }}
          >
            Remove Item
          </Button>
        )
};

export { RemoveItemBtn };
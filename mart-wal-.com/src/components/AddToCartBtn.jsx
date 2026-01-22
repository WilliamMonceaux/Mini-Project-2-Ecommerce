import { useCartContext } from "../Context/CartContext";
import { Button } from "@mui/material";

function AddToCartBtn({ productId }) {
    const { addToCart } = useCartContext();

    return(
              <Button
                size="medium"
                sx={{ bgcolor: "black", color: "white", fontWeight: 800 }}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(productId);
                }}
              >
                Add to Cart
              </Button>
            )};

export { AddToCartBtn };
import { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Products } from "../components/Products.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import { RemoveItemBtn } from "../components/RemoveItemBtn.jsx";
import { PromoContainer } from "../components/PromoContainer.jsx";
import { QuantityCounter } from "../components/QuantityCounter.jsx";
import { PurchaseBtn } from '../components/PurchaseBtn.jsx';

function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          textAlign: "center",
          mt: "3rem",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Typography component="h2" variant="h4">
          Cart is currently empty. Please go into the Shop and add products to
          the cart.
        </Typography>
      </Box>
    );
  }

  return (
    <PromoContainer>
      <Products products={cart}>
        {(product) => (
          <>
            <RemoveItemBtn productId={product.id} />
            <QuantityCounter item={product} />
          </>
        )}
      </Products>
      <Box sx={{ mt: 4 }}>
        {cart ? (
          <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap'}}>
          <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
            Subtotal (
            {cart.reduce((accumulator, item) => accumulator + item.quantity, 0)}{" "}
            items): $
            {cart
              .reduce(
                (accumulator, product) =>
                  accumulator + product.price * product.quantity,
                0,
              )
              .toFixed(2)}
          </Typography>
          <Button variant='contained' sx={{ fontSize: '1.2rem'}}>
            Purchase now
          </Button>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </PromoContainer>
  );
}

export { Cart };

import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Products } from "../components/Products.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import { RemoveItemBtn } from "../components/RemoveItemBtn.jsx";
import { PromoContainer } from "../components/PromoContainer.jsx";
import { QuantityCounter } from "../components/QuantityCounter.jsx";

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
              <QuantityCounter />
          </>
        )}
      </Products>
      <Box sx={{ mt: 4 }}>
        {cart ? (
          <Typography sx={{ fontSize: "1.6rem" }}>
            Subtotal ({cart.reduce((accumulator, item) => accumulator + item.quantity, 0)} items): $
            {cart.reduce(
              (accumulator, product) => accumulator + product.price,
              0,
            )}
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </PromoContainer>
  );
}

export { Cart };

import { useContext } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

function Cart() {
  const { addCart, removeProduct } = useContext(CartContext);

  return (
    <Box component="main">
      <Grid container spacing={3}>
        {addCart.map((product) => {
          return (
            <Grid
              item
              key={product.id}
              size={{ xs: 12, md: 6, lg: 3 }}
              display="flex"
              justifyContent="center"
              component="ul"
            >
              <Card
                component="article"
                sx={{
                  width: 300,
                  maxWidth: "100%",
                  border: 2,
                  boxShadow: 4,
                  padding: 1,
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 200, objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "success.main", mt: 1 }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{ bgcolor: "#CC0000", color: "white" }}
                    onClick={(e) => {
                      e.preventDefault();
                      removeProduct(product.id);
                      console.log(addCart);
                    }}
                  >
                    Remove Item
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export { Cart };

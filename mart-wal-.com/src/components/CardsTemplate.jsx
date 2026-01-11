import { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CartContext } from "../Context/CartContext.jsx";

function CardsTemplate({ products }) {
  const [displayProducts, setDisplayProducts] = useState(products);

  const { handleAddToCart } = useContext(CartContext);

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  return (
    <Box component="main">
      <Grid component="ul" container spacing={3}>
        {displayProducts.map((product) => {
          return (
            <Grid
              item
              key={product.id}
              size={{ xs: 12, md: 6, lg: 3 }}
              display="flex"
              justifyContent="center"
            >
              <Card
                component="article"
                sx={{
                  width: 300,
                  maxWidth: "100%",
                  border: 2,
                  boxShadow: 4,
                  padding: 1,
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 200, objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{ color: "success.main", mt: 1 }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="medium"
                    sx={{ bgcolor: "black", color: "white" }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
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

export { CardsTemplate };

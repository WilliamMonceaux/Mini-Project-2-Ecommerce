import { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
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
              component="li"
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
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: 2,
                  boxShadow: 4,
                  padding: 1,
                }}
              >
                <CardActionArea
                  component={Link}
                  to="/shop"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    "& .MuiCardActionArea-focusHighlight": {
                      background: "transparent",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ height: 200, objectFit: "contain" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      fontWeight="bold"
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="p"
                      sx={{ color: "success.main", my: 2, fontWeight: 750 }}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        fontSize: "1.2rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "5",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="medium"
                    sx={{ bgcolor: "black", color: "white", fontWeight: 800 }}
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

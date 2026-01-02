import { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { PromoContainer } from "../PromoContainer/PromoContainer.jsx";
import { FilterBar } from '../FilterBar/FilterBar.jsx';

function CardsTemplate({ products }) {

  const [displayProducts, setDisplayProducts] = useState(products);

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  return (
    <main className="card-container">
      <PromoContainer>
        <FilterBar products={products} onFilterChange={setDisplayProducts} />
        <Grid container spacing={3}>
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
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "success.main", mt: 1 }}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="medium"
                      sx={{ bgcolor: "black", color: "white" }}
                    >
                      Add to Card
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </PromoContainer>
    </main>
  );
}

export { CardsTemplate };

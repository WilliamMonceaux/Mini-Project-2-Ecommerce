import { FeaturedProduct } from "../components/FeaturedProduct";
import { Products } from '../components/Products';
import { Box, Typography, Grid } from "@mui/material";
import { useFetchContext } from '../Context/FetchContext';

function Home() {
  const { products } = useFetchContext();

  const showCaseProducts = products.slice(0, 4);

  return (
    <Box component="main">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          sx={{ my: 4, fontWeight: "Bold" }}
        >
          Quality finds, Cheaper prices
        </Typography>
        <Typography
          variant="h4"
          component="p"
          align="center"
          sx={{
            mb: 6,
            maxWidth: "700px",
            fontFamily: 'Roboto',
            mx: "auto",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Here you can find an assortment of products ranging from Men's
          Clothing, Jewerly, Electronics, and Women's Clothing.
        </Typography>

        <Typography variant='h3' component='h3' gutterBottom sx={{ fontWeight: 'Bold', textAlign: 'center', mt: '8rem' }}>
          Featured Products
        </Typography>

        <Box component="section" sx={{ p: 4, width: "100%" }}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {showCaseProducts.map((item) => (
              <Grid
                item
                key={item.id}
                xs={12}
                md={6}
                lg={3}
                display="flex"
                justifyContent="center"
              >
                <FeaturedProduct product={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
    </Box>
  );
}

export { Home };
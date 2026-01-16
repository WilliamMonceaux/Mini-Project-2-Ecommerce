import { FeaturedProduct } from "../components/FeaturedProduct";
import { Box, Typography, Grid } from "@mui/material";
import { useFetchContext } from "../Context/FetchContext";

function Home() {
  const { products } = useFetchContext();

  const showCaseProducts = products.slice(0, 4);

  return (
    <Box component="main">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ my: 4, fontWeight: "Bold", fontSize: "2.6rem" }}
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
          fontFamily: "Roboto",
          mx: "auto",
          fontWeight: 400,
          lineHeight: 1.6,
        }}
      >
        Here you can find an assortment of products ranging from Men's Clothing,
        Jewerly, Electronics, and Women's Clothing. Here are a few products that
        we offer!
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

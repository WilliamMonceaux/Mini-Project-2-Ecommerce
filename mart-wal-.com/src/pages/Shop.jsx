import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CardsTemplate } from "../components/CardsTemplate.jsx";
import { PromoContainer } from "../components/PromoContainer.jsx";
import { FilterBar } from "../components/FilterBar.jsx";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { CartContext } from "../Context/CartContext.jsx";

function Shop({ product }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/shop/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error: Could not fetch data.", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box component="main">
      <PromoContainer>
        <Typography variant="h2" component="h2" gutterBottom>
          Shop for Products:
        </Typography>
        <FilterBar products={products} onFilterChange={setFilteredProducts} />
        <CardsTemplate products={filteredProducts}>
          {(product) => (
          <Button
            size="medium"
            sx={{ bgcolor: "black", color: "white" }}
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            Add to Cart
          </Button>
          )}
        </CardsTemplate>
      </PromoContainer>
    </Box>
  );
}

export { Shop };

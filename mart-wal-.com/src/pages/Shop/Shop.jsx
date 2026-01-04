import axios from "axios";
import { useEffect, useState } from "react";
import { CardsTemplate } from "../../components/Cards/CardsTemplate.jsx";
import { PromoContainer } from "../../components/PromoContainer/PromoContainer.jsx";
import { FilterBar } from "../../components/FilterBar/FilterBar.jsx";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    <PromoContainer>
      <FilterBar products={products} onFilterChange={setFilteredProducts} />
      <CardsTemplate products={products} />
    </PromoContainer>
  );
}

export { Shop };

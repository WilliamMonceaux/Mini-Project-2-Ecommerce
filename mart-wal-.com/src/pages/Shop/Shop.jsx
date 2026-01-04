import axios from "axios";
import { useEffect, useState } from "react";
import { CardsTemplate } from "../../components/Cards/CardsTemplate.jsx";

function Shop() {
  const [products, setProducts] = useState([]);

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
    <>
      <CardsTemplate products={products} />
    </>
  );
}

export { Shop };

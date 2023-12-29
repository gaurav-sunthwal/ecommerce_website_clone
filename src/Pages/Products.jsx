import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Product List:</h2>
      <div className="allproduct">
        {products.map((product) => (
          <div className="box">
            <div className="img">
              <img src={product.image} alt="" />
            </div>
            <div className="info">
              <h1>{product.title}</h1>
              {/* <p>{product.description}</p> */}
              <h2>{product.price}</h2>
              <Button>Add to Card</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

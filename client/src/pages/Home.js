// React
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// Components
import Slider from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <Slider />
      <Products products={products} />
    </div>
  );
};

export default Home;

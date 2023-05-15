import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          Faire son shopping tous les jours
        </h2>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center sm:px-0 px-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          accusamus natus, veritatis aperiam blanditiis, consequatur in error
          repellat praesentium consectetur voluptatum fugit. Beatae praesentium
          velit dicta rerum, inventore totam omnis.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-5 grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;

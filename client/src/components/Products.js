import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { HiArrowUp } from "react-icons/hi";

const Products = ({ products }) => {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {

    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 600);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [scrollTop]);

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
      <div className="relative max-w-screen-xl mx-auto py-20 px-5 grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
        {
          scrolling && (
            <div className="fixed bottom-[20px] right-[20px] flex items-center justify-center w-[45px] h-[45px] border-[1px] border-gray-700 rounded-full bg-white opacity-60 lg:hidden ">
              <HiArrowUp onClick={() => window.scrollTo(0, 0)} />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Products;

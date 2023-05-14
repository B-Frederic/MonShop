// React
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ShopSlice";
// React icons
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const location = useLocation();
  let [baseQty, setBaseQty] = useState(1);

  useEffect(() => {
    setDetails(location.state.item);
  }, [location.state.item]);

  const rating = () => {

    let ratingTab = [];

    for (let i = 0; i < details.rating; i++) {
      ratingTab.push(<MdOutlineStar style={{color: "orange"}} key={i} />);
    }

    for (let j = details.rating; j < 5; j++) {
      ratingTab.push(<MdOutlineStarOutline style={{color: "orange"}} key={j} />)
    }
    
    return ratingTab;
  }


  return (
    <div>
      <div className="w-[90%] mx-auto my-[66.5px] flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt={details.title}
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
                Solde
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4x1 font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-gray-500">{details.oldPrice}€</p>
              <p className="font-semibold">{details.price}€</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex"> 
              {rating()}
            </div>
            <p className="font-semibold underline underline-offset-2">
              {details.rating}
            </p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">
                {baseQty === 1 ? "Quantité" : "Quantités"}
              </p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                )
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              Ajouter au panier
            </button>
          </div>
          <p className="text-base text-gray-500">
            Catégorie:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;

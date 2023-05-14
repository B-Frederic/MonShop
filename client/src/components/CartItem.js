// React
import React from "react";
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/ShopSlice";
// React icons
import { MdOutlineClose } from "react-icons/md";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shop.productData);

  return (
    <div className="w-2/3 px-5">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl text-center">Mon panier d'achat</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-around gap-5 mt-6"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-40 h-40 object-cover"
                src={item.image}
                alt={item.title}
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10 lg:block sm:hidden">{item.price}€</p>
            <p className="text-sm lg:block sm:hidden">{item.quantity > 1 ? "Quantités" : "Quantité"}</p>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <button
                onClick={() =>
                  dispatch(
                    decrementQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch(
                    increamentQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </button>
            </div>
            <p className="w-14">{item.quantity * item.price}€</p>
            <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id))
                }
                className="text-2xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 "
              />
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[250px]">
        <button
          onClick={() =>
            {
              if(productData.length >= 1){
                return dispatch(resetCart());
              }
            }
          }
          className="bg-red-500 text-white mt-8 py-1 px-6 hover:bg-red-800 duration-300"
        >
          Vider mon panier
        </button>
        <button className="p-[10px] text-gray-400 hover:text-black duration-300">
          <Link to="/">
            <p>Continuer mes achats</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

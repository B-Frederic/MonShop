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
    <div className="lg:w-2/3 w-full pr-[5px]">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl text-center font-semibold">
          Mon panier d'achat
        </h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex md:flex-row flex-col items-center justify-around gap-5 mt-6 p-4 md:border-transparent border rounded-[25px] lg:w-full sm:w-[400px] w-[280px] mx-auto"
          >
            <div className="flex items-center md:flex-row flex-col">
              <div className="flex items-center gap-2">
                <img
                  className="w-[150px] h-[150px] mb-2 object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h2 className="w-52 ml-4 font-semibold">{item.title}</h2>
            </div>
            <div className="flex md:flex-row flex-col items-center">
              <p className="flex w-[100px] md:mb-0 mb-2 justify-center">
                Prix/u: {item.price}€
              </p>
              <p className="text-sm mx-4 md:block hidden">
                {item.quantity > 1 ? "Quantités" : "Quantité"}
              </p>
              <div className="flex items-center gap-4 text-sm font-semibold md:my-0 my-2">
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
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 lg:hover:bg-gray-700 lg:hover:text-white cursor-pointer duration-300 active:bg-black"
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
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 lg:hover:bg-gray-700 lg:hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
              <p className="w-14 ml-4 md:block hidden">
                {" "}
                {item.quantity * item.price}€
              </p>
              <p className="w-[100px] mt-4 ml-4 md:hidden block font-semibold">
                {" "}
                Total: {item.quantity * item.price}€
              </p>

              <div>
                <MdOutlineClose
                  onClick={() => window.confirm(`Voulez-vous supprimer "${item.title}" de votre panier?`) ? dispatch(deleteItem(item._id)) : ""}
                  className="text-2xl md:text-red-600 lg:hover:text-red-600 cursor-pointer duration-300 md:block hidden"
                />
                <button
                  className="md:hidden md:mt-0 mt-4 bg-red-400 md:p-0 p-2 md:rounded-none rounded-xl"
                  onClick={() => window.confirm(`Voulez vous supprimer "${item.title}" de votre panier?`) ? dispatch(deleteItem(item._id)) : ""}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[250px] mx-auto">
        <button
          onClick={() => {
            if (productData.length >= 1 && window.confirm(`Voulez-vous supprimer l'ensemble de votre panier?`)) {
              return dispatch(resetCart());
            }
          }}
          className="bg-red-500 text-white mt-8 py-1 px-6 lg:hover:bg-red-800 duration-300"
        >
          Vider mon panier
        </button>
        <button className="w-[250px] mt-4 text-gray-400 lg:hover:text-black duration-300">
          <Link to="/">
            <p className="bg-blue-500 text-white py-1 px-6 lg:hover:bg-blue-800 duration-300 font-semibold">Continuer mes achats</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

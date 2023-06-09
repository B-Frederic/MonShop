// React
import React from "react";
import { useNavigate } from "react-router-dom";
// Redux
import { addToCart } from "../redux/ShopSlice";
import { useDispatch } from "react-redux";
// React icons
import { BsArrowRight } from "react-icons/bs";
// Toastify
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  const handleAddItem = () => {
    
  }

  return (
    <div className="group relative">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover lg:group-hover:scale-110 duration-500"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
              <p className="italic">{product.category}</p>
            </h2>
          </div>
          <div className="flex lg:flex-row flex-col justify-end items-center gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex lg:ml-0 ml-2 gap-2 lg:transform lg:group-hover:translate-x-24 lg:transition-transform lg:duration-500">
              <p className="line-through text-gray-500">{product.oldPrice}€</p>
              <p className="font-semibold">{product.price}€</p>
            </div>
            <div className="w-100px mt-4 mx-auto px-[20px] py-[5px] bg-green-400 lg:hidden">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: product._id,
                      title: product.title,
                      image: product.image,
                      price: product.price,
                      quantity: 1,
                      description: product.description,
                    })
                    ) & toast.success(`${product.title} a été ajouté au panier`)
                  }
                className="text-md font-semibold"
              >
                Ajouter
              </button>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} a été ajouté au panier`)
              }
              className="absolute z-20 w-[80px] text-gray-500 font-semibold hover:text-gray-900 lg:flex items-center gap-2 top-0 lg:transform lg:-translate-x-32 lg:group-hover:translate-x-0 lg:transition-transform cursor-pointer lg:duration-500 hidden"
            >
              ajouter{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              Solde
            </p>
          )}
        </div>
      </div>
      <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  );
};

export default ProductsCard;

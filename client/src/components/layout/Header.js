import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cart, profile } from "../../assets/img";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);

  const [user, setUSer] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUSer(currentUser);
    })
  }, [])

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titlefont sticky top-0 z-50">
      <div className="max-w-screen-xl w-[90%] h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="w-28 font-bold text-3xl underline underline-offset-5">
            MonShop
          </h1>
        </Link>
        <div className="flex items-center sm:gap-3 gap-1">
          <ul className="sm:flex items-center md:gap-6 gap-3 hidden">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Accueil
              </li>
            </Link>
            <Link to="/profile">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Profil
              </li>
            </Link>
            <Link to="informations">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Informations
              </li>
            </Link>
            <Link to="/contact">
              <li className="mr-2 text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Contact
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-8" src={cart} alt="cart icon" />
              <p className="w-6"></p>
              <span className="absolute w-8 top-2.5 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          {userInfo && (
            <div className="flex justify-center items-center">
              <p className="mr-2 text-lg font-titleFont font-bold lg:block hidden">
                {userInfo.name}
              </p>
            </div>
          )}
          {
            userInfo
            ?
            <Link to="/profile">
              <img className="w-[40px] h-[40px] rounded-full" src={userInfo.image} alt="icon profile" />
            </Link >
            :
            <Link to="/login">
              <img className="w-[60px] h-[60px] rounded-full" src={profile} alt="icon profile" />
            </Link>
          }

          {
            user && (
              <div className="flex justify-center items-center">
              <p className="mr-2 text-lg font-titleFont font-bold">
                {user.name}
              </p>
            </div>
            )
          }
          <div className="sm:hidden text-3xl">
            <RxHamburgerMenu />
          </div>
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

export default Header;

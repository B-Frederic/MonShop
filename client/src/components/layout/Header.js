// React
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { ToastContainer } from "react-toastify";
// Redux
import { useSelector } from "react-redux";
// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
// Data
import dataMenu from "../../data/dataMenu";
// Component
import MenuBurger from "./MenuBurger";
// Picture
import { cart, profile } from "../../assets/img";

const Header = () => {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [user, setUSer] = useState({});
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUSer(currentUser);
    });
  }, []);

  const handleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <div className="relative">
      <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titlefont sticky top-0 z-50">
        <div className="max-w-screen-xl w-[90%] h-full mx-auto flex items-center justify-between">
          <Link onClick={() => setBurgerMenu(false)} to="/">
            <h1 className="w-28 font-bold sm:text-3xl text-[28px] underline underline-offset-5">
              MonShop
            </h1>
          </Link>
          <div className="flex items-center sm:gap-3 gap-2">
            <nav>
              <ul className="sm:flex items-center md:gap-6 gap-3 hidden">
                {dataMenu.map((item, index) => (
                  <NavLink
                    key={index}
                    className={(nav) =>
                      nav.isActive
                        ? "underline underline-offset-4 decoration-orange-500"
                        : ""
                    }
                    to={item.path}
                  >
                    <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300">
                      {item.name}
                    </li>
                  </NavLink>
                ))}
              </ul>
            </nav>
            <Link onClick={() => setBurgerMenu(false)} to="/cart">
              <div className="relative">
                <img className="w-8 h-8" src={cart} alt="cart icon" />
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

            {userInfo ? (
              <Link onClick={() => setBurgerMenu(false)} to="/profile">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={userInfo.image}
                  alt="icon profile"
                />
              </Link>
            ) : (
              <Link onClick={() => setBurgerMenu(false)} to="/login">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={profile}
                  alt="icon profile"
                />
              </Link>
            )}
            {user && (
              <div className="flex justify-center items-center">
                <p className="mr-2 text-lg font-titleFont font-bold">
                  {user.name}
                </p>
              </div>
            )}
            <div className="p-[5px] mx-auto sm:hidden text-3xl">
              <RxHamburgerMenu onClick={handleBurgerMenu} />
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
      {burgerMenu && <MenuBurger setBurgerMenu={setBurgerMenu} />}
    </div>
  );
};

export default Header;

// React
import React from 'react';
import { NavLink } from 'react-router-dom';
// React icons
import { RxCrossCircled } from "react-icons/rx";
// Data
import dataMenu from '../../data/dataMenu';
// Motion
import { motion } from "framer-motion";

const MenuBurger = ({ setBurgerMenu }) => {

    const handleCloseBurgerMenu = () => {
        setBurgerMenu(false);
      };

    return (
        <motion.div
        initial={{x:-400}}
        animate={{x: 0}}
        transition={{
            duration: "0.8"
        }}
        className="md:hidden fixed right-0 top-0 z-50 overscroll-y-hidden">
            <div className="flex pt-[100px] justify-center w-[100vw] h-[100vh] bg-black opacity-95">
                <nav>
                    <ul className="text-white text-2xl flex flex-col items-center">
                        {dataMenu.map((item, index) => (
                            <NavLink
                            key={index}
                            className={(nav) =>
                                nav.isActive
                                ? "underline underline-offset-4 decoration-orange-500"
                                : ""
                            }
                            to={item.path}
                            onClick={handleCloseBurgerMenu}
                            >
                            <li className="py-10 px-5">{item.name}</li>
                            </NavLink>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="md:hidden absolute right-6 top-6 text-white text-3xl">
                <RxCrossCircled onClick={handleCloseBurgerMenu} />
            </div>
        </motion.div>
    )
};

export default MenuBurger;
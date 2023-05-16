// React
import React from 'react';
import { NavLink } from 'react-router-dom';
// Data
import dataMenu from '../../data/dataMenu';

const MenuBurger = ({ setBurgerMenu }) => {

    const handleCloseBurgerMenu = () => {
        setBurgerMenu(false);
      };

    return (
        <div className="md:hidden absolute right-0 z-50">
            <div className="flex pt-[100px] justify-center w-[100vw] h-[100vh] bg-black opacity-95">
            <nav>
                <ul className="text-white text-2xl flex flex-col items-center">
                    {dataMenu.map((item) => (
                        <NavLink
                        key={item.idMenuBurger}
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
        </div>
    )
};

export default MenuBurger;
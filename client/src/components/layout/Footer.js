// React
import React from "react";
// React icons
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
// Picture
import { payment } from "../../assets/img";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-10 font-titleFont">
      <div className="w-[80%] lg:w-[80%] md:w-[100%] lg:px-0 md:px-4 mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <p className="w-28 font-bold text-3xl text-white underline underline-offset-5">MonShop</p>
          <p className="text-sm tracking-wide">© 2023, MonShop</p>
          <img className="w-40" src={payment} alt="icon payment" />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="text-base flex flex-col gap-2">
          <h2 className="text-2x1 font-semibold text-white mb-4">Nos locaux</h2>
          <p>Paris, 75000</p>
          <p>rue boutique n°1</p>
          <p>Téléphone: 05.00.00.00.00</p>
          <p>E-mail: mon-shop75@gmail.com</p>
        </div>
        <div>
          <h2 className="text-2x1 font-semibold text-white mb-4">Informations</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span className="text-lg">
                <BsPersonFill />{" "}
              </span>{" "}
              Mon compte
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span className="text-lg">
                <BsPaypal />{" "}
              </span>{" "}
              Paiement
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span className="text-lg">
                <MdLocationOn />{" "}
              </span>{" "}
              Aide et support
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              {" "}
              <span className="text-lg">
                <FaHome />{" "}
              </span>{" "}
              Suivi de commande
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="lg:w-[300px] bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="lg:w-[300px] h-8 text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            S'abonner à notre catalogue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

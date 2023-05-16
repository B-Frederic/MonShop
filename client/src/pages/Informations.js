import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Informations = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 mb-20">
      <p className="sm:w-full w-[300px] text-center text-lg text-red-500">
        J'ai ajouté le backend dans le répertoire pour ceux qui veulent voir le
        code "express".
        <br />
        J'avais connecté le token, mais ne déployant pas le back je l'ai
        commenté pour le désactiver. <br />
      </p>
      <div className="flex flex-col my-6">
        <p className="flex items-center mr-4 mb-4">
          Mon linkedin :{" "}
            <span className="ml-2">
                <Link to="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-betaouaf/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-4xl text-blue-700" />
                </Link>
            </span>
        </p>
        <p className="flex items-center">
          Mon code (github) :{" "}
          <span className="ml-2">
            <Link to="https://github.com/B-Frederic/monshop" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-4xl" />
            </Link>
          </span>
        </p>
      </div>
      <h2 className="text-2xl font-bold">Technos utilisés</h2>
      <div>
        <div className="my-6">
          <h3 className="text-lg font-semibold underline underline-offset-4">
            Front:
          </h3>
          <ul>
            <li className="text-lg italic">React</li>
            <li className="text-lg italic">Redux Toolkit</li>
            <li className="text-lg italic">React Router Dom</li>
            <li className="text-lg italic">Tailwind</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold underline underline-offset-4">
            Back:
          </h3>
          <ul>
            <li className="text-lg italic">Express</li>
          </ul>
        </div>
        <div className="my-6">
          <h3 className="text-lg font-semibold underline underline-offset-4">
            Wrapper:
          </h3>
          <ul>
            <li className="text-lg italic">Axios</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold underline underline-offset-4">
            Complémentaire:
          </h3>
          <ul>
            <li className="text-lg italic">Firebase</li>
            <li className="text-lg italic">Stripe</li>
            <li className="text-lg italic">React Icons</li>
            <li className="text-lg italic">React toastify</li>
            <li className="text-lg italic">Redux persist</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Informations;

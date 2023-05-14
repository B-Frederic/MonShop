// React
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// Redux
import { useDispatch } from "react-redux";
import { addUserGoogle } from "../redux/ShopSlice";
// Firebase
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
// Picture
import { google } from "../assets/img";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success(
          `Vous êtes connecté en tant que ${user.displayName}`
        );
        dispatch(
          addUserGoogle({
            _id: user.displayName,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        navigate("/");
      })
      .catch((error) => {
        alert("Erreur");
      });
  };

  const loginForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-[603px] flex flex-col items-center justify-center gap-10 my-10 bg-red">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <p className="text-lg italic text-red-600">Seul la connexion avec Google est active</p>
        <form onSubmit={loginForm} className="flex flex-col">
          <h2 className="text-center font-bold text-4xl mb-10">Connexion</h2>
          <div className="flex flex-col">
            <label className="mb-2 ml-1" htmlFor="email">
              Identifiant
            </label>
            <input
              className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
              id="email"
              type="text"
              placeholder="Votre email"
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-5 mb-2 ml-1" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
              type="password"
              id="password"
              placeholder="Votre mot de passe"
            />
          </div>
          <button
            type="submit"
            className="justify-center mt-10 bg-gray-600 text-white py-2 px-4 font-semibold tracking-wide rounded-md hover:bg-gray-800 duration-300"
          >
            Se connecter
          </button>
        </form>
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 mt-3 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img className="w-8" src={google} alt="logo google" />
          <span className="text-sm text-gray-900">Connexion avec Google</span>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="mb-2 text-blue-500 hover:text-black italic underline underline-offset-2 cursor-pointer"
            href="/login"
          >
            Mot de passe oublié ?
          </p>

          <div className="flex">
            <p>Pas encore inscrit? </p> &nbsp;{" "}
            <p
              className="mb-2 text-blue-500 hover:text-black italic underline underline-offset-2 cursor-pointer"
              href="/signup"
            >
              {" "}
              S'inscrire
            </p>
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

export default Login;

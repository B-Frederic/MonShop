// React
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Redux
import { useDispatch } from "react-redux";
import { removeUserGoogle } from "../redux/ShopSlice";
// Firbase
import { getAuth, signOut } from "firebase/auth";

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Vous vous êtes déconnecté avec succès. A très bientôt");
        dispatch(removeUserGoogle());
      })
      .catch((error) => {
        alert("Erreur");
      });

    navigate("/login");
  };

  return (
    <button
      onClick={handleSignOut}
      className="mt-10 bg-red-600 text-white py-2 px-4 font-semibold tracking-wide rounded-md hover:bg-red-800 duration-300"
    >
      Déconnexion
    </button>
  );
};

export default SignOut;

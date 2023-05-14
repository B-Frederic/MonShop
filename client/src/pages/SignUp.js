import React from 'react';

const SignUp = () => {

    const signUpForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex flex-col items-center justify-center my-20">
            <form onSubmit={signUpForm} className="flex flex-col mt-10">
        <h2 className="text-center font-bold text-4xl mb-10">Inscription</h2>
        <div className="flex flex-col">
          <label className="mb-4 ml-1 text-xl font-semibold" htmlFor="name">
            Nom
          </label>
          <input
            className="w-80 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
            id="name"
            type="text"
            placeholder="Votre nom"
          />
        </div>
        
        <div className="flex flex-col">
          <label className="mb-4 ml-1 text-xl font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-80 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
            id="email"
            type="text"
            placeholder="Votre email"
          />
          <input
            className="w-80 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
            id="confirm-email"
            type="text"
            placeholder="Confirmer votre email"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-4 ml-1 text-xl font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="w-80 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
            id="password"
            type="password"
            placeholder="Votre mot de passe"
          />
          <input
            className="w-80 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
            id="confirm-password"
            type="password"
            placeholder="Confirmer votre mot de passe"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-4 ml-1 text-xl font-semibold" htmlFor="file">
            Photo
          </label>
            <input type="file" id="file" />
        </div>
        <button type="submit" className="justify-center mt-10 bg-gray-600 text-white py-2 px-4 font-semibold tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Envoyer
        </button>
      </form>
        </div>
    );
};

export default SignUp;
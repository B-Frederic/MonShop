import React from 'react';

const Contact = () => {

    const contactForm = (e) => {
        e.preventDefault();
    }


    return (
        <div className="flex flex-col items-center justify-center my-20">
            <form onSubmit={contactForm} className="flex flex-col mt-10">
        <h2 className="text-center font-bold text-4xl mb-10">Contact</h2>
        <div className="flex flex-col">
          <label className="mb-4 ml-1 text-xl font-semibold" htmlFor="email">
            Nom
          </label>
          <input
            className="w-[300px] mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
            id="email"
            type="text"
            placeholder="Votre nom"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-4 ml-1 text-xl font-semibold" htmlFor="email">
            Prénom
          </label>
          <input
            className="w-[300px] mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
            id="email"
            type="text"
            placeholder="Votre prénom"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-4 ml-1 text-xl font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-[300px] mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5"
            id="email"
            type="text"
            placeholder="Votre email"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="mb-4 ml-1 text-xl font-semibold"
            htmlFor="password"
          >
            Message
          </label>
          <textarea className="w-[300px] h-[150px] resize-none bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg p-2.5" id="password"  placeholder="Saississez votre message"></textarea>
        </div>
        <button type="submit" className="justify-center mt-10 bg-gray-600 text-white py-2 px-4 font-semibold tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Envoyer
        </button>
      </form>
        </div>
    );
};

export default Contact;
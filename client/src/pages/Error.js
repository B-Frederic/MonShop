import React from 'react';

const Error = () => {
    return (
        <div className="h-[650px] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-20 bg-gray-800 rounded-3xl">
                <p className="mb-6 text-5xl text-red-600 font-bold">Oups !!!</p>
                <p className="text-2xl italic text-red-600">Cette page n'existe pas</p>
                <p className="text-lg mt-8 text-red-600">Pour être redirigé vers la page d'accueil :<a href="/"> <button className="justify-center mt-2 ml-2 bg-red-500 text-white py-2 px-4 font-semibold tracking-wide rounded-md hover:bg-red-800 duration-300">Cliquez ici</button></a></p>
            </div>
        </div>
    );
};

export default Error;
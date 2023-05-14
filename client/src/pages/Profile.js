import React from 'react';
import { useSelector } from 'react-redux';
import SignOut from '../components/SignOut';

const Profile = () => {

  const userInfo = useSelector((state) => state.shop.userInfo);

    return (
        <div className="h-[603px] mt-20">
          { userInfo ? (
                <div className="flex flex-col items-center justify-center my-10">
                    <h2 className=" font-bold text-4xl mb-10">
                        Profil
                    </h2>
                    <img className="w-20 h-20 rounded-full" src={userInfo ? userInfo.image : ""} alt={`icon de ${userInfo.name}`} />
                        <p className="my-4 text-2xl">{userInfo.name}</p>
                    <div className="flex flex-col items-center">
                        <p className="my-4 text-lg">{userInfo.email}</p>
                        <p></p>
                    </div>
                        <span className="my-4 w-[20%] h-[3px] rounded-xl bg-black"></span>
                    <div>
                        <SignOut />
                    </div>
                </div>
            ) : (
                <div className=" h-full flex items-center justify-center">
                    <div className="p-[40px] bg-gray-800 rounded-xl font-bold text-xl text-red-600">
                        <p>Il faut être connecté pour accéder à cette page</p>
                    </div>       
                </div>
                )
            }
        </div>
    );
};

export default Profile;
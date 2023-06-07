// React
import React from 'react';

const Error = () => {

    return (
        <div className="flex items-center justify-center text-center h-[65vh] px-[10px]">
            <div className="p-[40px] bg-gray-800 rounded-[1.5rem] font-bold text-[2rem] text-red-600">
                <p><span className="font-bold">Oups !!</span><br/>Cette page n'existe pas.</p>
            </div>
        </div>
    );
};

export default Error;
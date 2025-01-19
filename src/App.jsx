import React from 'react';
import { useEffect } from 'react';
import Search from './components/Search';

const App = () => {

  return (
    <>
      <div className='fixed w-full h-screen overflow-hidden opacity-30 bg-gradient-to-l from-blue-800 via-yellow-700 to-blue-600 -z-10'></div>
      <img
          src="src/images/spiderman_bg.jpg"
          alt="Background Comic"
          className="fixed inset-0 w-full h-full object-cover -z-20"
        />
      <div className="flex selection:bg-red-600 selection:text-white flex-col w-full justify-center items-center h-auto">
        <div className="top-0 fixed items-center justify-center mt-6 mb-0">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-2xl 
                        uppercase tracking-wider px-8 py-4 rounded-lg">
            MARVEL CODEX
          </h1>
        </div>
        <div data-aos="fade-up" className="font-bangers flex flex-col justify-center items-center h-full space-y-6 text-center text-white px-4 md:px-8 mt-40 my-12">
          <p className="text-xl sm:text-2xl font-medium text-gray-200 drop-shadow-md ">
            Discover the Marvel Universe like never before!
          </p>
          <Search />
        </div>
      </div>
    </>
  );
};

export default App;

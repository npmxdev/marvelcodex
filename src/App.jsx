import React, { useState } from 'react';
import { useEffect } from 'react';
import Search from './components/Search';
import Footers from './components/Footers'


const LoadingScreen = () => {
    return (
      <div className='selection:bg-red-600 selection:text-white'>
        <div className='fixed w-full h-screen overflow-hidden opacity-30 bg-gradient-to-l from-blue-800 via-yellow-700 to-blue-600 z-20'></div>
        <div className="fixed inset-0 bg-gradient-to-l from-red-800 via-red-700 to-red-600 flex items-center justify-center overflow-hidden z-50">
          <h1 className="fixed mb-20 text-6xl text-center sm:text-7xl font-extrabold text-white drop-shadow-2xl uppercase tracking-wider px-8 py-4 rounded-lg animate-logoFade">
            Marvel Codex
          </h1>
          <div className="fixed bottom-56 h-12 w-12 border-t-4 border-red-950 border-solid rounded-full animate-spin"></div>

          <div className="absolute bottom-6 w-full text-center px-4">
            <p className="text-white text-sm font-medium opacity-80">
              built with passion by
            </p>
            <h1 className="font-bold text-md sm:text-4xl md:text-2xl tracking-wider text-white transform transition-all duration-500 ease-in-out hover:scale-110 z-20 animate-floating">
              &lt;npmdev/&gt;
            </h1>
          </div>
        </div>
      </div>
    )
}


const App = () => {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='fixed w-full h-screen overflow-hidden opacity-30 bg-gradient-to-l from-blue-800 via-yellow-700 to-blue-600 -z-10'></div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
      <div>
        <img
            src="/marvel_bg.jpg"
            alt="Background Comic"
            className="fixed bg-center inset-0 w-full h-full object-cover -z-20"
          />
        <div className="flex selection:bg-red-600 min-h-screen selection:text-white flex-col w-full justify-center items-center">
          <div className="top-0 fixed w-full items-center justify-center mb-0 z-50">
              <h1 className="text-3xl font-extrabold text-white text-center bg-gradient-to-l from-red-800 via-red-600 to-red-800 drop-shadow-2xl 
                            uppercase tracking-wider px-8 py-4 bg-opacity-100 ">
                <a href="">MARVEL CODEX</a>
              </h1>
          </div>
          <div className="font-bangers top-0 margin-top flex flex-col justify-center items-center space-y-6 text-center text-white px-4 md:px-8">
            <Search />
          </div>
          
        </div>
      </div>
      )
      }
        <Footers />
    </>
  );
};

export default App;

import React from 'react'

const Character = ({data, onClick}) => {
  return (
    <div className="flex flex-wrap justify-center min-h-screen items-center gap-6 p-4">
      {data.map(character => {
        return (
          <div 
            key={character.id} 
            className='w-56 h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border-4 border-transparent group'
            style={{
              backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => onClick(character.id)}
          >
            <div className="flex flex-col justify-end h-full bg-black bg-opacity-40 p-4 group-hover:bg-opacity-0 transition-all duration-300 ease-in-out">
              <div className="text-white text-md bg-gray-500 bg-opacity-10 font-bold drop-shadow-md">{character.name}</div>
              <div className="italic font-bold p-1 px-4 text-black bg-yellow-400 border-black border-2 hover:bg-yellow-500 hover:text-white">
                View Comics
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Character;

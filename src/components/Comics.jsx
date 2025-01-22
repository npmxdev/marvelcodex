import React from 'react'

const Comics = ({data}) => {
  return (
    <div className="flex flex-wrap justify-center min-h-screen gap-6 p-4">
      {data.map((comic) => {
        const detailsUrl = comic.urls.find(element => element["type"] === "detail").url;

        return (
          <a 
            key={comic.id}
            href={detailsUrl}
            target='_blank'
            rel='noreferrer'
            className="w-64 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border-4 border-transparent group"
            style={{
              backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`,
            }}
          >
            <div className="flex flex-col justify-end h-full bg-black bg-opacity-50 p-4 group-hover:bg-opacity-0 transition-all duration-300 ease-in-out">
              <div className="text-white text-lg bg-black/20 font-bold drop-shadow-lg">{comic.title}</div>
              <div className="italic font-bold p-1 px-4 text-black bg-yellow-400 border-black border-2 rounded-full text-center mt-4 group-hover:bg-yellow-500 group-hover:text-white">
                View Comic Detail
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default Comics;

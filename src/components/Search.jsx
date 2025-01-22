import { useState } from "react";
import md5 from "crypto-js/md5";
import Character from "./Character";
import Comics from "./Comics";

const Search = () => {
    
    const [characterName, setCharacterName] = useState("")
    const [characterData, setCharacterData] = useState(null)
    const [comicData, setComicData] = useState(null)

    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;

    const handleSearch = (event) =>{
        event.preventDefault();
        getCharacterData();
    }

    const handelReset = () => {
        setCharacterName("");
        setCharacterData(null);
        setComicData(null);
    }

    const getCharacterData = () => {
        setCharacterData(null);
        setComicData(null);

        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);

        const url =  `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}&limit=100`
    
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                setCharacterData(result.data);
            }).catch((error) => {
                console.log("there was an error fetching", error);
            })
    }

    const generateHash = (timeStamp) => {
        return md5(timeStamp + privateKey + publicKey).toString();
    }

    const getComicData = (characterId) => {
        window.scrollTo({top: 0 , left: 0})

        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);

        const url =  `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}`
    
        fetch(url)
           .then(response => response.json())
           .then((results) => {
                setComicData(results.data);
            }).catch((error) => {
                console.log("there was an error fetching", error);
            })
    
    }

    const handleChange = (event) =>{
        setCharacterName(event.target.value)
    }
    return (
        <div className="mt-24 flex flex-col justify-center items-center">
            <p className="text-xl sm:text-2xl font-medium text-yellow-400 drop-shadow-md -z-20">
                Discover the Marvel Universe like never before!
            </p>
            <form action="" onSubmit={handleSearch} className="flex justify-center flex-col items-center max-w-64 m-1">
                <input 
                    type="text" 
                    placeholder="Enter Character Name..." 
                    onChange={handleChange} 
                    className="center max-w-xs my-1 mx-auto italic font-bold p-2 px-4 border-2 border-black transition ease-in-out hover:scale-110 text-center text-yellow-400 focus:bg-black/60 uppercase"/>
                <div className="flex justify- space-x-2 mx-auto items-center">
                    <button 
                        type="submit"
                        className="italic mx-auto font-bold p-1 px-4 text-black bg-yellow-400 transition ease-in-out hover:scale-110 border-black border-2">SEARCH</button>
                    <button 
                        onClick={handelReset}
                        className="italic mx-auto font-bold p-1 px-4 text-white bg-red-600 transition ease-in-out hover:scale-110 border-black border-2">RESET</button>
                </div>
            </form>

            {characterName.trim() === "" ? (
                <p></p>
            ) : !characterData ? (
                <p>No data available.</p>
            ) : (
                <>
                    {!comicData && characterData && characterData.results[0] && (
                        <Character data={characterData.results} onClick={getComicData} />
                    )}

                    {comicData && characterData?.results[0] ? (
                        <Comics data={comicData.results} />
                    ) : (
                        <p>No data available.</p>
                    )}
                </>
            )}
        </div>
    )
}

export default Search;
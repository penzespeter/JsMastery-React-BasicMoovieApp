import React, { useEffect, useState } from "react";
import './App.css';
import MoovieCard from "./MoovieCard.jsx";
import searchIcon from "./search.svg";


const API_URL = 'http://omdbapi.com?apikey=' + process.env.REACT_APP_OMDB_API_KEY;

const App = () => {

    const [moovies, setMoovies] = useState([]);
    const [search, setSearch] = useState('batman');

    const searchMoovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMoovies(data.Search);
    };

    useEffect(() => {
        searchMoovies(search);
    }, []);

    return (
        <div className="app">
            <h1>Moovies</h1>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search Moovies"
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value);
                        console.log(search);
                    }}
                 />
                 <img 
                    src={searchIcon} 
                    alt="search"
                    onClick={() => {
                        searchMoovies(search ?? "");
                    }}
                />
            </div>
            
            {moovies?.length > 0 
                ? (
                    <div className="container">
                        {
                            moovies.map(moovie => (
                                <MoovieCard moovie={moovie} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Moovies found</h2>
                    </div>
                )
            }


        </div>
    )
}

export default App;
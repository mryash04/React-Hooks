import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Pokemon from "./components/Pokemon";
import Pagination from "./components/Pagination";

function App() {

  const [pokemon, setPokemon] = useState([]);

  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const [nextPageUrl, setNextPageUrl] = useState();

  const [prevPageUrl, setPrevPageUrl] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(currentPageUrl).
      then((apiData) => apiData.json()).then((actualData) => {
        setPokemon(actualData.results)
        setNextPageUrl(actualData.next)
        setPrevPageUrl(actualData.previous)
        setLoading(false)
      });
  }, [currentPageUrl]);

  if (loading) return "Loading...."

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  }

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <div className="App">
      <h2>Pokemon App</h2>
      <Pokemon pokemon={pokemon} />
      <Pagination gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
      />
    </div>
  );
}

export default App;
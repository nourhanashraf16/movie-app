import axios from "axios";
import { useEffect, useState } from "react";

export const useSearch = () => {
  //1- create state to store input value
  const [querry, setQuerry] = useState("");
  // 2- create state to store searchResult
  const [searchResult, setSearchResult] = useState([]);
  //3- create function to handle querry state querry=inputValue
  const handleInput = (value) => {
    setQuerry(value);
  };
  //4- create function to fetch searchdata and update searchResult
  const fetchMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${querry}`;
      const response = await axios.get(url);
      setSearchResult(response.data.results);
    } catch (e) {
      console.log(`error is ${e}`);
    }
  };
  // 5-use useEffect to call data
  useEffect(() => {
    if (querry) {
      fetchMovies();
    }
  }, [querry]);
  return { handleInput, querry, searchResult };
};

import { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [searchedWord, setSearchedWord] = useState("");
  const [results, setResults] = useState(null);

  function handleSearchChange(event) {
    const word = event.target.value;
    setSearchedWord(word);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchedWord}`;
    axios.get(url).then(handleResponse);
  }
  return (
    <div className="Search">
      <form onSubmit={search} className="search-form">
        <input
          type="text"
          placeholder="Search for a word"
          className="search-input"
          onChange={handleSearchChange}
        />
        <input type="submit" value="GO" className="submit-button" />
      </form>
      <Results results={results} />
    </div>
  );
}

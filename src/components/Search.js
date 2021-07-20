import { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search({ defaultKeyword }) {
  const [searchedWord, setSearchedWord] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSearchChange(event) {
    const word = event.target.value;
    setSearchedWord(word);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault(search());
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchedWord}`;
    axios.get(url).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for a word"
            className="search-input"
            onChange={handleSearchChange}
            defaultValue={defaultKeyword}
          />
          <input type="submit" value="GO" className="submit-button" />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

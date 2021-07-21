import { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search({ defaultKeyword }) {
  const [searchedWord, setSearchedWord] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleSearchChange(event) {
    const word = event.target.value;
    setSearchedWord(word);
  }

  function handleSubmit(event) {
    event.preventDefault(search());
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchedWord}`;
    axios.get(url).then(handleResponse);

    const pexelsApiKey = process.env.REACT_APP_API_KEY;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchedWord}&per_page=12`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
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
        <Results
          results={results}
          photos={photos}
          searchedWord={searchedWord}
        />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

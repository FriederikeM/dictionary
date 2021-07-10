import { useState } from "react";
import "./Search.css";

export default function Search() {
  const [searchedWord, setSearchedWord] = useState("");

  function handleSearchChange(event) {
    const word = event.target.value;
    setSearchedWord(word);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching ${searchedWord}`);
  }
  return (
    <header className="Search">
      <form onSubmit={search} className="search-form">
        <input
          type="text"
          placeholder="Search for a word"
          className="search-input"
          onChange={handleSearchChange}
        />
        <input type="submit" value="GO" className="submit-button" />
      </form>
    </header>
  );
}

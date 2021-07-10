import "./Search.css";

export default function Search() {
  return (
    <header className="Search">
      <input
        type="text"
        placeholder="Search for a word"
        className="search-input"
      />
      <input type="submit" value="GO" className="submit-button" />
    </header>
  );
}

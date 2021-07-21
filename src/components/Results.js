import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";
import Photos from "./Photos";

export default function Results({ results, photos, searchedWord }) {
  if (results) {
    return (
      <div className="Results">
        <div className="spelling">
          <h1 className="word">{results.word}</h1>
          <h2 className="written-phonetic">{results.phonetics[0].text}</h2>
        </div>
        <section className="phonetic-section">
          {results.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {results.meanings.map((meaning, index) => {
          return (
            <ul key={index} className="meanings-list">
              <Meaning meaning={meaning} />
            </ul>
          );
        })}
        <Photos photos={photos} searchedWord={searchedWord} />
      </div>
    );
  } else {
    return null;
  }
}

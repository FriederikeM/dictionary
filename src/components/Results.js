import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <h1 className="word">{results.word}</h1>
        {results.phonetics.map((phonetic, index) => {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          )
        })}
        {results.meanings.map((meaning, index) => {
          return (
            <ul key={index}>
              <Meaning meaning={meaning} />
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

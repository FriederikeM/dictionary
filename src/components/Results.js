import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <h1 className="word">{results.word}</h1>
        {results.meanings.map(function (meaning, index) {
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

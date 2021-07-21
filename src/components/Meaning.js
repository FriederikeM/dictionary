import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h2>{meaning.partOfSpeech}</h2>
      {meaning.definitions.map((definition, index) => {
        return (
          <div key={index} className="content">
            <section>
              <strong>Definition:</strong>
              <br />
              {definition.definition}
            </section>
            <section>
              <strong>Example:</strong>
              <br />
              <em>{definition.example}</em>
            </section>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

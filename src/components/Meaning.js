import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  // console.log(meaning.definitions[0].synonyms
  //   )
  return(
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        return(
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              <br />
              {definition.definition}
              <br />
              <strong>Example:</strong>
              <br />
              <em>
              {definition.example}
              </em>
              <Synonyms synonyms={definition.synonyms}/>
            </p>
          </div>
        )
      })}
    </div>
  )
}

import "./Meaning.css";

export default function Meaning({ meaning }) {
  console.log(meaning.definitions[0].definition)
  return(
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        return(
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>
              {definition.example}
              </em>
            </p>
          </div>
        )
      })}
    </div>
  )
}

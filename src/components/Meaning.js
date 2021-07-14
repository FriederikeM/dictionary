import "./Meaning.css";

export default function Meaning({ meaning }) {
  console.log(meaning.definitions[0].definition)
  return(
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>{meaning.definitions[0].definition}</p>
      <p>{meaning.definitions[0].example}</p>
    </div>
  )
}

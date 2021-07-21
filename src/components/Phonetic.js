import "./Phonetic.css";

export default function Phonetic({ phonetic }) {
  return (
    <div className="Phonetic">
      <a href={phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <p>{phonetic.text}</p>
    </div>
  );
}

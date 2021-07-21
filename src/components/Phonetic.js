import "./Phonetic.css";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Phonetic({ phonetic }) {
  const audio = new Audio(phonetic);
  function handleIconClicked() {
    audio.play();
  }
  return (
    <div className="Phonetic">
      <AiFillPlayCircle className="play-icon" onClick={handleIconClicked} />
    </div>
  );
}

import "./Phonetic.css"

export default function Phonetic({phonetic}) {
    console.log(phonetic)
    return (
        <div className="Phonetic">
            <a href={phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
            <p>{phonetic.text}</p>
        </div>
    )
}

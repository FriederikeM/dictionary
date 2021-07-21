import "./Photos.css";

export default function Photos({ photos, searchedWord }) {
  if (photos) {
    return (
      <div className="Photos">
        <div className="photos-wrapper">
          {photos.map((photo, index) => {
            return (
              <img
                src={photo.src.landscape}
                alt={searchedWord}
                className="example-image"
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

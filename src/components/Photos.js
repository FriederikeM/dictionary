import "./Photos.css";

export default function Photos({ photos, searchedWord }) {
  if (photos) {
    return (
      <div className="Photos">
        <div className="photos-wrapper">
          {photos.map((photo, index) => {
            return (
              <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <img
                  src={photo.src.landscape}
                  alt={searchedWord}
                  className="example-image"
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

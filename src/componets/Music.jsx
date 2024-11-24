import "./music.css";

const Music = ({ name, artist, album, previewUrl, artworkUrl }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={artworkUrl}
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3 className="text">{name}</h3>
      <p className="text">{artist}</p>
      <p>
        <i className="text">{album}</i>
      </p>
      <audio
        controls
        style={{
          width: "100%",
          zIndex: -1,
        }}
      >
        <source src={previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Music;

export const SongCard = (props) => {
  return (
    <div className="flex-shrink-0 song" style={{ width: "33%" }}>
      <a href={props.url} target="_blank">
        <img src={props.image} className="img-fluid" alt={props.name} />
        <div
          className="transparent"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "16px",
          }}
        ></div>
        <i className="bi bi-arrow-up-right"></i>
        <h3 style={{fontSize:"clamp(1rem, 1vw + 0.5rem, 1.5rem)"}}>{props.name}</h3>
      </a>
    </div>
  );
};

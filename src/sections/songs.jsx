import { SongCard } from "../components/songCard";
import { songs } from "../data";

export const Songs = () => {
  return (
    <section id="songs">
      <div className="container">
        <h3 className="mb-4">الترانيم</h3>

        <div
          className="d-flex overflow-auto songs"
          style={{ gap: "1rem", flexDirection: "row-reverse" }}
        >
          {songs.map((song) => 
            <SongCard name={song.name} url={song.url} image={song.image} />
          )}
        </div>
      </div>
    </section>
  );
};

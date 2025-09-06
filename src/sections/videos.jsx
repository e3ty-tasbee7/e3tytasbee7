import one from "../assets/videos/one.mp4";
import two from "../assets/videos/two.mp4";
import three from "../assets/videos/three.mp4";

export const Videos = () => {
  return (
    <section id="videos" dir="rtl" className="container pt-3 pb-3">
      <h3>
        جزء من خدماتنا
      </h3>

      <div className="videos">
        <div className="video-card">
          <video controls className="video">
            <source src={one} type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <video controls className="video">
            <source src={two} type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <video controls className="video">
            <source src={three} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
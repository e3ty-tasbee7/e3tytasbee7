import hero1 from "../assets/29.jpg";
import hero2 from "../assets/3.jpg";
import hero3 from "../assets/image.png";
import hero4 from "../assets/image2.png";
import music from "../assets/music.png";
import { Icons } from "../components/icons";

export const Hero = () => {
  return (
    <section id="hero" className="container pt-3">
      <div className="hero-grid">
        <img src={hero2} alt="" className="first" />

        <img src={hero3} alt="" />

        <div className="bottom position-relative">
          <img src={hero4} alt="" />
          <p
            className="position-absolute top-0 text-light text-center mt-2"
            style={{ fontSize: "80%" }}
          >
            لا تهمل الموهبة التي فيك (1تي 4:14)
          </p>
        </div>

        <img src={hero1} alt="" className="second" />
        <img
          src={music}
          className="music-icon"
          style={{ width: "80px", height: "80px" }}
          alt=""
        />
      </div>
      <div className="caption">
        <h1>فريق أعطي تسبيحًا</h1>
        <p>
          "رَنِّمُوا لِلرَّبِّ تَرْنِيمَةً جَدِيدَةً، لأَنَّ الرَّبَّ قَدْ
          صَنَعَ أُمُورًا عَجِيبَةً." (مزمور ٩٨:١){" "}
        </p>
        <div className="mt-5 m-md-2 mb-md-3 hero-bottom">
          <button className="btn">
            <a href="#contact">تواصل معنا</a>
          </button>
          <Icons />
        </div>
      </div>
    </section>
  );
};

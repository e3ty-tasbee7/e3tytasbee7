import one from "../assets/11.jpg";
import two from "../assets/12.jpg";
import three from "../assets/1.jpg";
import four from "../assets/23.jpg";
import five from "../assets/25.jpg";
import six from "../assets/21.jpg";
import back from "../assets/10.jpg";

export const Gallary = () => {
  return (
    <div
      style={{
        backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0, 0.8)),
      url(${back})
    `,
      }}
      className="position-relative"
    >
      <section id="gallary" className="pt-5 pb-3">
        <h3>بعض الصور من خدماتنا</h3>
        <div className="images p-sm-5">
          <img src={two} alt="one" className="first" />
          <img src={one} alt="two" className="second" />
          <img src={three} alt="three" />
          <img src={four} alt="four" className="fourth" />
          <img src={five} alt="five" />
          <img src={six} alt="six" />
        </div>
      </section>
    </div>
  );
};

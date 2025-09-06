import { Navbar } from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Hero } from "./sections/hero";
import "bootstrap-icons/font/bootstrap-icons.css";
import { About } from "./sections/about";
import { Songs } from "./sections/songs";
import { Gallary } from "./sections/gallary";
import { Achievements } from "./sections/achievements";
import { Joining } from "./sections/joining";
import { Feedbacks } from "./sections/feedbacks";
import { ContactUs } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Videos } from "./sections/videos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Songs />
      <Achievements />
      <Gallary />
      <Videos />
      <Joining />
      <Feedbacks />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

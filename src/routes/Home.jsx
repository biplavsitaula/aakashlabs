import Slider from "../components/Slider";
import ShortAbout from "../components/ShortAbout";
import Services from "../components/Services";
import ContactLocation from "../components/ContactLocation";

function Home() {
  return (
    <>
      <div className="home">
        <Slider></Slider>
        <ShortAbout></ShortAbout>
        <Services></Services>
        <ContactLocation></ContactLocation>
      </div>
    </>
  );
}

export default Home;

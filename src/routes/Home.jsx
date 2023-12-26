import Slider from "../components/Home/Slider";
import ShortAbout from "../components/Home/ShortAbout";
import Services from "../components/Home/Services";
import ContactLocation from "../components/Home/ContactLocation";

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

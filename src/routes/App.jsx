import "../App.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <NavBar></NavBar>
        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

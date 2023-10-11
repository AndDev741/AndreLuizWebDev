import About from "./About";
import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Contact";
import Home from "./Home";
import MyProjects from "./MyProjects";
import Services from "./Services";

export default function Render() {
    return(
        <div>
            <Navbar/>
            <Home/>
            <Services/>
            <MyProjects/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}
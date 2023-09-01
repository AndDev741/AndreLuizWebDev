import About from "./About";
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
        </div>
    )
}
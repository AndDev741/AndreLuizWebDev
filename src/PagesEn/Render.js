import About from "./About";
import Navbar from "./Components/Navbar";
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
            <Services/>
        </div>
    )
}
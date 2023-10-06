import { Element, Link } from "react-scroll";
import { FaRegHandPointUp } from 'react-icons/fa'

export function Footer(){
    return(
        <Element className="flex items-center justify-between h-[20vh] border-t-2 border-black font-pFont">
            <h2 className="text-3xl ml-12">©André Luiz Digital solutions, 2023</h2>
            <Link to="home" smooth={true} className="cursor-pointer mr-12 flex flex-col justify-end items-center">
                <FaRegHandPointUp className="text-[40px]"/>
                <p className="text-2xl">Go to top</p>
            </Link>
            
        </Element>
    )
}
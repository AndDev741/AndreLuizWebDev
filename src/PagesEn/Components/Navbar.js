import { Link, useLocation } from "react-router-dom"
import { Link as Linkar } from "react-scroll";
import { useState } from "react";
//images
import logoMB from '../Assets/logoAndMB.png'
import menuMB from '../Assets/menuMB.png'
export default function Navbar() {
    const location = useLocation();
    let [menu, setMenu] = useState(false)

    function handleMenu() {
        if (menu === false){
            setMenu(true)
        }else {
            setMenu(false)
        }
        
    }
    return(
        <>
        <nav>
         <div className="flex justify-around mt-2">
            <div>
                <img src={logoMB} />
            </div>
            <div className="flex items-center justify-center">
                <Link to='/en' className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-l-[24px]
                ${location.pathname === '/pt' ? 'bg-black text-white' : ''}`}>
                    <p>EN</p>
                </Link>
                <Link to='/pt' className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-r-[24px]
                ${location.pathname === '/en' ? 'bg-black text-white' : ''}`}>
                    <p>PT</p>
                </Link>
            </div>
            <div>
                <img src={menuMB}
                onClick={handleMenu}
                 className='cursor-pointer'/>
            </div>
          </div>
            <div className={` ${menu === true ? 'block' : 'hidden'}
                absolute top-0 z-50 w-[100vw] h-[100vh] bg-white
                flex justify-center`}>
                <ul className="relative mt-3">
                    <h2 className="font-hFont text-2xl">Navigation</h2>
                    <Linkar to="services" smooth={true} onClick={handleMenu}>Services</Linkar>
                </ul>
            </div>
        </nav>      
        </>
    )
}
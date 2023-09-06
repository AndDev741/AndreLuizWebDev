import { Link, useLocation } from "react-router-dom"
import { Link as Linkar } from "react-scroll";
import { useState } from "react";
//images
import logoMB from '../Assets/logoAndMB.png'
import logoPC from '../Assets/logoAndPC.png'
import menuMB from '../Assets/menuMB.png'
import lnkdLogo from '../Assets/lnkdLogo.png'
import gthbLogo from '../Assets/gthbLogo.png'
//icons
import { FaRegUser, FaRegEnvelope, FaRegImages, FaRegWindowRestore } from 'react-icons/fa'

export default function Navbar() {
    const location = useLocation();
    let [menu, setMenu] = useState(false)

    function handleMenu() {
        setMenu(!menu)
    }
    return(
        <>
        <nav>
         <div className={`flex justify-evenly mt-2`}>
            <div>
                <img src={logoMB} alt='logo' className="block lg:hidden" />
                <img src={logoPC} alt='logo' className="hidden lg:block w-[200px] mr-12 " />
            </div>
            <div className="hidden md:flex items-center text-[18px] font-pFont ml-12 ">
                <button><Linkar to="home" smooth className="mx-5 hover:underline cursor-pointer">Home</Linkar></button>
                <button><Linkar to="services" smooth className="mx-5 hover:underline cursor-pointer">Services</Linkar></button>
                <button><Linkar to="myprojects" smooth className="mx-5 hover:underline cursor-pointer">My Projects</Linkar></button>
                <button><Linkar to="about" smooth className="mx-5 hover:underline cursor-pointer">About Me</Linkar></button>
                <button><Linkar to="contact" smooth className="mx-5 hover:underline cursor-pointer">Contact Me</Linkar></button>
            </div>
            <div className="flex items-center justify-center md:ml-8">
                <Link to='/en' className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-l-[24px]
                ${location.pathname === '/pt' ? 'bg-black text-white' : ''}`}>
                    <b><p>EN</p></b>
                </Link>
                <Link to='/pt' className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-r-[24px]
                ${location.pathname === '/en' ? 'bg-black text-white' : ''}`}>
                    <b><p>PT</p></b>
                </Link>
            </div>
            <div className="hidden xl:flex items-center ml-12">
                <a href="https://www.linkedin.com/in/andr%C3%A9-luiz-dev-b9915b275/?locale=en_US" target={"_blank"} rel='noreferrer'> 
                    <img src={lnkdLogo} alt='Linkedin logo' className="ml-3 hover:scale-95"/></a>
                <a href="https://github.com/AndDev741" target={"_blank"} rel='noreferrer'>
                    <img src={gthbLogo} alt='Github logo' className="ml-3 hover:scale-95"/></a>
            </div>
            <div>
                <img src={menuMB} alt='menu'
                onClick={handleMenu}
                 className='block md:hidden cursor-pointer'/>
            </div>
          </div>
            <div className={` ${menu === true ? 'block' : 'hidden'}
                fixed top-0 z-50 w-[100%] h-[100vh] bg-white overflow-hidden
                flex justify-center`}>
                <ul className="relative flex flex-col items-center justify-evenly font-pFont mt-3 text-center">
                    <h2 className="font-hFont text-3xl sm:text-[64px]">Navigation</h2>
                    <button className="flex items-center">
                        <FaRegWindowRestore className="sm:text-[40px]"/>
                        <Linkar to="services" className="ml-2 text-3xl sm:text-[60px]" smooth={true} onClick={handleMenu}>
                        Services</Linkar></button>
                    <button className="flex items-center">
                        <FaRegImages className="sm:text-[40px]"/>
                        <Linkar to="myprojects" className="ml-2 text-3xl sm:text-[60px]"  smooth={true} onClick={handleMenu}>
                        My projects</Linkar></button>
                    <button className="flex items-center">
                        <FaRegUser className="sm:text-[40px]"/>
                        <Linkar to="about" className="ml-2 text-3xl sm:text-[60px]"  smooth={true} onClick={handleMenu}>
                        About me</Linkar></button>
                    <button className="flex items-center">
                        <FaRegEnvelope className="sm:text-[40px]"/>
                        <Linkar to="contact" className="ml-2 text-3xl sm:text-[60px]"  smooth={true} onClick={handleMenu}>
                        Contact me</Linkar></button>
                    <button onClick={handleMenu} className='my-8 text-3xl sm:text-[60px] border-2 border-black rounded sm:p-5 p-2'>Exit Menu</button>
                </ul>
            </div>
        </nav>      
        </>
    )
}
import { Link, useLocation } from "react-router-dom"
import { Link as Linkar } from "react-scroll";
import { useState } from "react";
//images
import logoMB from '../Assets/logoAndMB.png'
import logo from '../Assets/Logo EN.png'
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
    if(menu == false){
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
    console.log(menu)
    return(
        <>
        <nav>
         <div className={`flex items-center justify-evenly lg:justify-evenly mt-2`}>
            <div className="hidden lg:flex m-1 flex-col items-center justify-center">
                <h1 className="text-xl md:ml-12 font-hFont">André Luiz</h1>
                <h1 className="text-xl md:ml-12 font-hFont">Soluções Digitais</h1>
            </div>
            <div className="hidden md:flex items-center text-[18px] font-pFont ml-12 ">
                <button><Linkar to="home" smooth className="mx-5 hover:underline cursor-pointer">Início</Linkar></button>
                <button><Linkar to="services" smooth className="mx-5 hover:underline cursor-pointer">Serviços</Linkar></button>
                <button><Linkar to="myprojects" smooth className="mx-5 hover:underline cursor-pointer">Meus Projetos</Linkar></button>
                <button><Linkar to="about" smooth className="mx-5 hover:underline cursor-pointer">Sobre mim</Linkar></button>
                <button><Linkar to="contact" smooth className="mx-5 hover:underline cursor-pointer">Contato</Linkar></button>
            </div>
            <div className="flex items-center justify-center md:ml-8">
                <Link to='/en' className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-l-[24px]
                ${location.pathname === '/en' ? 'bg-black text-white' : ''}`}>
                    <b><p>EN</p></b>
                </Link>
                <Link to='/' className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-r-[24px]
                ${location.pathname === '/' ? 'bg-black text-white' : ''}`}>
                    <b><p>PT</p></b>
                </Link>
            </div>
            <div className="hidden xl:flex items-center ml-12">
                <a href="https://www.linkedin.com/in/andr%C3%A9-luiz-dev-b9915b275/" target={"_blank"} rel='noreferrer'> 
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
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl md:ml-12 font-hFont">André Luiz</h1>
                        <h1 className="text-2xl md:ml-12 font-hFont">Soluções Digitais</h1>
                    </div>
                    <h2 className="font-hFont text-3xl">Menu de Navegação</h2>
                    <button className="flex items-center">
                        <FaRegWindowRestore className="sm:text-[30px]"/>
                        <Linkar to="services" className="ml-2 text-3xl" smooth={true} onClick={handleMenu}>
                        Serviços</Linkar></button>
                    <button className="flex items-center">
                        <FaRegImages className="sm:text-[30px]"/>
                        <Linkar to="myprojects" className="ml-2 text-3xl"  smooth={true} onClick={handleMenu}>
                        Meus Projetos</Linkar></button>
                    <button className="flex items-center">
                        <FaRegUser className="sm:text-[30px]"/>
                        <Linkar to="about" className="ml-2 text-3xl"  smooth={true} onClick={handleMenu}>
                        Sobre Mim</Linkar></button>
                    <button className="flex items-center">
                        <FaRegEnvelope className="sm:text-[30px]"/>
                        <Linkar to="contact" className="ml-2 text-3xl"  smooth={true} onClick={handleMenu}>
                        Contato</Linkar></button>
                    <button onClick={handleMenu} className='my-8 text-3xl sm:text-[40px] border-2 border-black rounded sm:p-5 p-2'>Sair do Menu</button>
                </ul>
            </div>
        </nav>      
        </>
    )
}
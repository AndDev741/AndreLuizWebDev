import { useLocation } from "react-router-dom"
import { Link as Linkar } from "react-scroll";
import { useState } from "react";
import { useTranslation } from "react-i18next";
//images
import menuMB from '../Assets/menuMB.png'
import lnkdLogo from '../Assets/lnkdLogo.png'
import gthbLogo from '../Assets/gthbLogo.png'
//icons
import { FaRegUser, FaRegEnvelope, FaRegImages, FaRegWindowRestore } from 'react-icons/fa'

export default function Navbar() {
    const location = useLocation();
    let [menu, setMenu] = useState(false)

    const {t, i18n} = useTranslation();

    function handleMenu() {
        setMenu(!menu)
        
    }
    if(menu == false){
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
    return(
        <>
        <nav>
         <div className={`flex items-center justify-evenly lg:justify-evenly mt-2`}>
            <div className="hidden lg:flex m-1 flex-col items-center justify-center">
                <h1 className="text-xl md:ml-12 font-hFont">André Luiz</h1>
                <h1 className="text-xl md:ml-12 font-hFont">{t('Digital Solutions')}</h1>
            </div>
            <div className="hidden md:flex items-center text-[18px] font-pFont ml-12 ">
                <button>
                    <Linkar to="home" smooth className="mx-5 hover:underline cursor-pointer">{t('Home')}</Linkar>
                </button>
                <button>
                    <Linkar to="services" smooth className="mx-5 hover:underline cursor-pointer">{t('Services')}</Linkar>
                </button>
                <button>
                    <Linkar to="myprojects" smooth className="mx-5 hover:underline cursor-pointer">{t('My Projects')}</Linkar>
                </button>
                <button>
                    <Linkar to="about" smooth className="mx-5 hover:underline cursor-pointer">{t('About Me')}</Linkar>
                </button>
                <button>
                    <Linkar to="contact" smooth className="mx-5 hover:underline cursor-pointer">{t('Contact Me')}</Linkar>
                </button>
            </div>
            <div className="flex items-center justify-center md:ml-8">
                <div onClick={() => i18n.changeLanguage('en')} 
                className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-l-[24px] cursor-pointer
                ${i18n.language === 'en' ? 'bg-black text-white' : ''}`}>
                    <b><p>EN</p></b>
                </div>
                <div onClick={() => i18n.changeLanguage('pt')}
                className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-r-[24px] cursor-pointer
                ${i18n.language === 'pt' || i18n.language === 'pt-BR' ? 'bg-black text-white' : ''}`}>
                    <b><p>PT</p></b>
                </div>
            </div>
            <div className="hidden xl:flex items-center ml-12">
                <a href="https://www.linkedin.com/in/andré-luiz-b9915b275/" target={"_blank"} rel='noreferrer'> 
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
                        <h1 className="text-2xl md:ml-12 font-hFont">{t('Digital Solutions')}</h1>
                    </div>
                    <h2 className="font-hFont text-3xl sm:text-[64px]">{t('Navigation')}</h2>
                    <button className="flex items-center">
                        <FaRegWindowRestore className="sm:text-[40px]"/>
                        <Linkar to="services" className="ml-2 text-3xl sm:text-[60px]" smooth={true} onClick={handleMenu}>
                            {t('Services')}
                        </Linkar>
                    </button>
                    <button className="flex items-center">
                        <FaRegImages className="sm:text-[40px]"/>
                        <Linkar to="myprojects" className="ml-2 text-3xl sm:text-[60px]"  smooth={true} onClick={handleMenu}>
                            {t('My Projects')}
                        </Linkar>
                    </button>
                    <button className="flex items-center">
                        <FaRegUser className="sm:text-[40px]"/>
                        <Linkar to="about" className="ml-2 text-3xl sm:text-[60px]"  smooth={true} onClick={handleMenu}>
                            {t('About Me')}
                        </Linkar>
                    </button>
                    <button className="flex items-center">
                        <FaRegEnvelope className="sm:text-[40px]"/>
                        <Linkar to="contact" className="ml-2 text-3xl sm:text-[60px]"  smooth={true} onClick={handleMenu}>
                            {t('Contact Me')}
                        </Linkar>
                    </button>
                    <button onClick={handleMenu} className='my-8 text-3xl sm:text-[60px] border-2 border-black rounded sm:p-5 p-2'>
                        {t('Exit Menu')}
                    </button>
                </ul>
            </div>
        </nav>      
        </>
    )
}
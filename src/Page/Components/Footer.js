import { Element, Link } from "react-scroll";
import { FaRegHandPointUp } from 'react-icons/fa'
import { useTranslation } from "react-i18next";

export function Footer(){
    const {t} = useTranslation();
    return(
        <Element className="flex flex-col md:flex-row items-center justify-center md:justify-between h-[20vh] border-t-2 border-black font-pFont">
            <h2 className="text-xl sm:text-2xl md:text-3xl md:ml-12 mt-4 sm:mt-0">©André Luiz {t('Digital Solutions')}, 2023</h2>
            <Link to="home" smooth={true} className="mt-5 lg:mt-0 cursor-pointer md:mr-12 flex flex-col justify-end items-center">
                <FaRegHandPointUp className="text-[40px]"/>
                <p className="text-2xl">{t("Go to top")}</p>
            </Link>
            
        </Element>
    )
}
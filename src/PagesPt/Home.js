import { Element } from "react-scroll"
import { BiLogoWhatsapp } from "react-icons/bi";
//images
import whatsBlackIcon from './Assets/blackWhats.png'
import homeImage from './Assets/homeImage.png'
export default function Home() {

    return(
        <Element name="home">
            <div className="flex flex-col lg:flex-row items-center lg:justify-around justify-center font-pFont">
                <div className="flex flex-col items-center lg:items-start justify-center mt-5 font-pFont lg:mx-12">
                    <div className="flex lg:hidden flex-col items-center justify-center">
                        <h1 className="text-xl md:ml-12 font-hFont">André Luiz</h1>
                        <h1 className="text-xl md:ml-12 font-hFont">Soluções Digitais</h1>
                    </div>
                    <h1 className="font-hFont text-[54px] sm:text-[70px] text-center lg:text-left">
                        Construindo <br/> sua imagem <br/> na <u>internet</u><span className="animate-pulse">|</span></h1>
                    <p className="text-[36px] lg:text-[34px] text-center lg:text-left mt-5 lg:mt-0 lg:w-[480px]">
                        Eu ofereço tudo que você <u>precisa</u>, desde o <b>design, desenvolvimento e taticas de SEO</b> e muito mais </p>
                    <a href="https://wa.me//5562983264291?text=Olá%20Boa%20Tarde,%20gostaria%20de%20conversar%20sobre%20uma%20solução%20digital%20para%20minha%20empresa." target={"_blank"}><button className="flex items-center bg-black w-[257px] h-[63px] rounded-[24px] mt-5 lg>mt-2
                            hover:scale-95">
                        <BiLogoWhatsapp className="text-white text-[60px] ml-3"/>
                        <h2 className="text-white text-[24px] font-[800] ml-3">Fale comigo</h2>
                    </button></a>
                </div>
                <div className="flex justify-center mb-6">
                    <img src={homeImage} alt="homepage" className=' w-[400px] lg:w-[80%] animate-smoothMoveMB lg:animate-smoothMove'/>
                </div>
            </div>
        </Element>
    )
}
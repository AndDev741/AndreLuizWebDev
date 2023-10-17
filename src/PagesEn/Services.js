import { Element } from "react-scroll"
import { BiLogoWhatsapp } from "react-icons/bi";
//images
import foguete from './Assets/foguete.png'
import websiteIMG from './Assets/websiteIMG.png'
import designIMG from './Assets/designIMG.png'
import seoIMG from './Assets/SEOIMG.png'
import youinternetIMG from './Assets/youinternetIMG.png'
import whatsWhiteIMG from './Assets/whatsWhiteIMG.png'
import growIMG from './Assets/growIMG.png'
import fastIMG from './Assets/fastIMG.png'
import identityIMG from './Assets/identityIMG.png'
import servicesIMG from './Assets/servicesIMG.png'
import whatsBlackIcon from './Assets/blackWhats.png'

export default function Services() {
    return(
        <Element name="services" className="mt-12">
            <ServicesResume />
            <WhyServices />
        </Element>
    )
}

function ServicesResume(){
    return(
        <main className="flex flex-col">
        <div className="flex justify-center xl:justify-normal xl:ml-12">
            <img src={foguete} alt='rocket' className="w-[280px]" />
        </div>
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center font-pFont bg-black xl:ml-8 xl:rounded-[8px] text-white ">
            <div className="xl:m-5 xl2:m-12">
                <h2 className="font-hFont text-[54px] xl:text-[72px] xl:text-left text-center mt-6 xl:w-[550px]">
                    Services <br /> that i gonna <br /> build for you</h2>
                <p className="text-center xl:text-left text-[28px] xl:text-[35px] xl:w-[550px] xl:mt-3">
                    Boosting your <b>digital</b> presence with effective strategies, <u>growing</u> <b>clients</b> and <b>sales</b>!</p>
                <a href={`https://wa.me//5562983264291?text=Hello,%20%20I%20would%20like%20to%20talk%20discuss%20a%20digital%20solution%20for%20my%20company`} target={"_blank"}><button className=" items-center bg-white w-[257px] h-[63px] rounded-[24px] my-6 xl>mt-2
                    hover:scale-95 hidden xl:flex xl:mt-8">
                    <BiLogoWhatsapp className="text-black text-[60px] ml-3"/>
                    <h2 className="text-black text-[24px] font-[800] ml-3"><b>Gets Started</b></h2>
                </button></a>
            </div>
           
            <div className="flex flex-col md:flex-row items-center md:justify-around flex-wrap">
                <div className="flex flex-col md:w-1/2 items-center xl:items-start justify-center my-3">
                    <h2 className="text-[38px] mb-4"><b>Websites</b></h2>
                    <div className="flex items-end w-[279px] h-[279px] rounded-[12px] bg-white">
                        <img src={websiteIMG} alt='webdeveloper' className='rounded-[12px]' />
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2 items-center xl:items-start my-3 ">
                    <h2 className=" text-[38px] mb-4"><b>Design</b></h2>
                    <div className="flex items-end w-[279px] h-[279px] rounded-[12px] bg-white">
                        <img src={designIMG} alt='designer' className='rounded-[12px] '/>
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2 items-center xl:items-start my-3 xl:mx-0 ">
                    <h2 className="text-[38px] mb-4"><b>SEO Tatics</b></h2>
                    <div className="flex items-end w-[279px] h-[279px] rounded-[12px] bg-white">
                        <img src={seoIMG} alt='seo strategies' className='rounded-[12px]' />
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2 items-center xl:items-start my-3 xl:mx-0 ">
                    <h2 className="text-[38px] mb-4"><b>You on Internet</b></h2>
                    <div className="flex items-end w-[279px] h-[279px] rounded-[12px] bg-white">
                        <img src={youinternetIMG} alt='you on internet' className='rounded-[12px]' />
                    </div>
                </div>
            </div>
            <a href={`https://wa.me//5562983264291?text=Hello,%20%20I%20would%20like%20to%20talk%20discuss%20a%20digital%20solution%20for%20my%20company`} target={"_blank"}><button className="flex items-center bg-white w-[257px] h-[63px] rounded-[24px] my-6 xl>mt-2
                    hover:scale-95 xl:hidden">
                <BiLogoWhatsapp className="text-black text-[60px] ml-3"/>
                <h2 className="text-black text-[24px] font-[800] ml-3"><b>Gets Started</b></h2>
            </button></a>
        </div>
    </main>
    )
}

function WhyServices() {
    return (
        <div className="flex flex-col lg:flex-row-reverse lg:justify-evenly mt-6">
            <div className="flex flex-col items-center lg:items-start font-pFont lg:mr-[100px]">
                <h1 className="font-hFont text-[50px] lg:text-[65px] lg:text-left text-center mt-6">Why Choose <br /> My Services?</h1>
                <div className="flex flex-col lg:flex-row items-center">
                    <img src={growIMG} alt='rocket' className='my-8 lg:w-[80px]' />
                    <p className="text-3xl lg:ml-8 text-center lg:text-start">Drive Rapid Business Growth</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-start">
                    <img src={fastIMG} alt='fast clock' className='my-8 lg:w-[80px] mr-4 lg:mr-0' />
                    <p className="text-3xl lg:ml-8 text-center lg:text-start">Achieve Lightning-Fast Results</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    <img src={identityIMG} alt='person' className='my-8 lg:w-[80px]' />
                    <p className="text-3xl lg:ml-8 text-center lg:text-start">Crafting Solutions with Your Identity</p>
                </div>
                <a href={`https://wa.me//5562983264291?text=Hello,%20%20I%20would%20like%20to%20talk%20discuss%20a%20digital%20solution%20for%20my%20company`} target={"_blank"}><button className="flex items-center bg-black w-[257px] h-[63px] rounded-[24px] mt-10 sm:mt-5 lg:mt-2 hover:scale-95">
                        <BiLogoWhatsapp className="text-white text-[60px] ml-5"/>
                        <h2 className="text-white text-[24px] font-[800] ml-3">Learn More</h2>
                </button></a>
            </div>
            <div className="flex items-center justify-center">
                <img src={servicesIMG} alt="services icon" className='animate-smoothMoveMB sm:w-[60%] lg:w-[75%]' />
            </div>

        </div>
    )
}

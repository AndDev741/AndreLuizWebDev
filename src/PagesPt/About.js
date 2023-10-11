import { Element } from "react-scroll"
import { useState } from "react"
import { FaRegUserCircle, FaReact, FaRegMap } from 'react-icons/fa'
import { SlTrophy } from 'react-icons/sl'
//skill icons
import { HiCodeBracket, HiMiniPaintBrush ,HiRocketLaunch} from 'react-icons/hi2' 
import { SiReact, SiTailwindcss, SiJavascript, SiHtml5} from "react-icons/si";
import { BiHighlight, BiPalette, BiHeartCircle, } from "react-icons/bi";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
//Images
import aboutIMG  from './Assets/aboutIMG.png'
import devIMG  from './Assets/devIMG.png'
import aDevImg  from './Assets/adev.svg'
import aDesignImg  from './Assets/aDesigner.svg'
import aCommImg  from './Assets/acomm.svg'


export default function About() {
    return(
        <Element name="about" className="">
            <div className="font-pFont">
                <div className="lg:flex justify-end">
                    <div className="mr-12 hidden lg:block">
                        <img src={devIMG} />
                    </div>
                    <div className="flex items-center lg:justify-start justify-center bg-black lg:w-[930px]">
                        <h1 className="text-white text-[45px] lg:ml-8 font-hFont m-1">About Me</h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center ">
                    <div className="flex flex-col items-center lg:items-start justify-center mt-8 lg:mt-0 lg:w-[40%]">
                        <div className="flex flex-col lg:flex-row items-center justify-center my-6 lg:my-2">
                            <FaRegUserCircle className="text-[60px] text-black mb-2 lg:mr-4" />
                            <p className="text-center text-3xl">My name is <strong>André Luiz</strong></p>
                        </div>
                        <div className="flex flex-col lg:flex-row  items-center justify-center my-6 lg:my-2">
                            <FaRegMap className="text-[60px] text-black mb-2 lg:mr-4" />
                            <p className="text-center text-3xl">I'm from <strong>Brazil</strong></p>
                        </div>
                        <div className="flex flex-col lg:flex-row  items-center justify-center my-6 lg:my-2">
                            <FaReact className="text-[60px] text-black mb-2 lg:mr-4" />
                            <p className="text-center lg:text-start text-3xl lg:w-[100%]">I study <u>Analysis and systems development</u></p>
                        </div>
                        <div className="flex flex-col  items-center justify-center my-6 lg:my-2">
                            <SlTrophy className="text-[60px] text-black mb-2 " />
                            <p className="text-center text-3xl lg:w-[80%]">My motivation its be a <strong>better professional</strong> every day, <u>helping people</u> with they <strong>image on internet</strong></p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end lg:w-1/2">
                        <img src={aboutIMG} className="animate-smoothMoveMB lg:animate-smoothMove lg:mr-5 sm:w-[80%] md:w-[60%] lg:w-[90%]" />
                    </div>
                </div>
                <Skills />
            </div>
        </Element>
    )
}

function Skills() {
    let [id , setId] = useState(0);
    let [id2 , setId2] = useState(1);
    let [id3 , setId3] = useState(2);
    let skills = [
        {
            id: 0,
            title: "Web Developer",
            phrase: `I know all the main features of actuality to make modern and functional websites that your company need`,
            IMG: aDevImg,
            iconT: <HiCodeBracket/>,
            icon1: <SiReact/>,
            icon2: <SiTailwindcss/>,
            icon3: <SiJavascript/>,
            icon4: <SiHtml5/>
        },
        {
            id: 1,
            title: "Web Designer",
            phrase: "I’m always studying new ways to make spectacular  website pages, with a lot of identity and design",
            IMG: aDesignImg,
            iconT: <HiMiniPaintBrush/>,
            icon1: <BiHighlight/>,
            icon2: <BiPalette/>,
            icon3: <BiHeartCircle/>,
            icon4: ''
        },
        {
            id: 2,
            title: "Comunication",
            phrase: "My communication with clients its one of the most important steps of my work, so i’m clearly and a good listener",
            IMG: aCommImg,
            iconT: <HiRocketLaunch/>,
            icon1: 'I speak two languages:',
            icon2: 'Portuguese',
            icon3: 'English',
            icon4: ''
        },
        {
            id: 0,
            title: "",
            phrase: "",
            IMG: ""
        }
    ]
    function setSkill() {
        setId(id + 1);
        if (id === 2){
            setId(0);
        }

    }
    function setSkill2(){
        setId2(id2 + 1)
        if (id2 === 2){
            setId2(0);
        }      
    }
    function setSkill3(){
        if (id3 === 2){
            setId3(0);
        }
        setId3(id3 + 1)
    }
    
    return(
        <div className="font-pFont">
            <h1 className="text-center text-[50px] font-hFont mt-3">My skills</h1>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <div className={`relative lg:absolute z-50 bg-white w-[90vw] sm:w-[70vw] lg:w-[38vw] xl:w-[35vw] h-[563px] border-2 border-black rounded-[6px]`}>
                        <div className="flex items-center justify-center mt-6">
                            <p className="text-[40px] mr-4">{skills[id].iconT}</p>
                            <h1 className="text-3xl lg:text-[35px] font-hFont">{skills[id].title}</h1>
                        </div>
                        <ul className={`${id === 2 ? 'flex flex-col items-start justify-start' : 'flex items-center justify-center mt-8'}`}>      
                            <li className={`${id === 2 ? 'text-2xl ml-3 mt-2' : 'text-[50px] mx-3'}`}>{skills[id].icon1}</li>
                            <li className={`${id === 2 ? 'text-2xl ml-8 list-disc' : 'text-[50px] mx-3'}`}><strong>{skills[id].icon2}</strong></li>
                            <li className={`${id === 2 ? 'text-2xl ml-8  list-disc' : 'text-[50px] mx-3'}`}><strong>{skills[id].icon3}</strong></li>
                            <li className={`${id === 2 ? 'text-2xl ml-5' : 'text-[50px] mx-3'}`}>{skills[id].icon4}</li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <p className={`text-center w-[95%] mt-8 ${id === 2 ? 'text-[25px] lg:text-[23px]' : 'text-[26px] sm:text-[27px]'}`}>{skills[id].phrase}</p>
                        </div>
                        <div className="flex items-end justify-center">
                        <div className="absolute bottom-0">
                            <img src={skills[id].IMG} className={`${id === 1 ? 'w-[330px]' : 'w-[420px]'}`} />
                        </div>
                        </div>
                    </div>

                    <div className={`hidden lg:block relative mx-[100px] lg:mx-[50px] xl:mx-[100px] scale-75 z-10 w-[80vw] lg:w-[30vw] xl:w-[30vw] h-[563px] border-2 border-black rounded-[6px]`}>
                        <div className="flex items-center justify-center mt-6">
                            <p className="text-[40px] mr-4">{skills[id2].iconT}</p>
                            <h1 className="text-[35px] font-hFont">{skills[id2].title}</h1>
                        </div>
                        <ul className={`${id2 === 2 ? 'flex flex-col items-start justify-start' : 'flex items-center justify-center mt-8'}`}>      
                            <li className={`${id2 === 2 ? 'text-2xl ml-3 mt-2' : 'text-[50px] mx-3'}`}>{skills[id2].icon1}</li>
                            <li className={`${id2 === 2 ? 'text-2xl ml-8 list-disc' : 'text-[50px] mx-3'}`}><strong>{skills[id2].icon2}</strong></li>
                            <li className={`${id2 === 2 ? 'text-2xl ml-8  list-disc' : 'text-[50px] mx-3'}`}><strong>{skills[id2].icon3}</strong></li>
                            <li className={`${id2 === 2 ? 'text-2xl ml-5' : 'text-[50px] mx-3'}`}>{skills[id2].icon4}</li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <p className={`text-center w-[95%] mt-8 ${id2 === 2 ? 'text-[23px]' : 'text-[27px] lg:text-[23px]'}`}>{skills[id2].phrase}</p>
                        </div>
                        <div className="absolute bottom-0">
                            <img src={skills[id2].IMG} className={`${id2 === 1 ? 'w-[330px]' : 'w-[420px]'}`} />
                        </div>
                    </div>

                    <div className={`hidden lg:block relative mx-[100px] lg:mx-[50px] xl:mx-[100px] scale-75 z-10 w-[80vw] lg:w-[30vw] xl:w-[30vw] h-[563px] border-2 border-black rounded-[6px]`}>
                        <div className="flex items-center justify-center mt-6">
                            <p className="text-[40px] mr-4">{skills[id3].iconT}</p>
                            <h1 className="text-[35px] font-hFont">{skills[id3].title}</h1>
                        </div>
                        <ul className={`${id3 === 2 ? 'flex flex-col items-start justify-start' : 'flex items-center justify-center mt-8'}`}>      
                            <li className={`${id3 === 2 ? 'text-2xl ml-3 mt-2' : 'text-[50px] mx-3'}`}>{skills[id3].icon1}</li>
                            <li className={`${id3 === 2 ? 'text-2xl ml-8 list-disc' : 'text-[50px] mx-3'}`}><strong>{skills[id3].icon2}</strong></li>
                            <li className={`${id3 === 2 ? 'text-2xl ml-8  list-disc' : 'text-[50px] mx-3'}`}><strong>{skills[id3].icon3}</strong></li>
                            <li className={`${id3 === 2 ? 'text-2xl ml-5' : 'text-[50px] mx-3'}`}>{skills[id3].icon4}</li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <p className={`text-center w-[95%] mt-8 ${id3 === 2 ? 'text-[23px]' : 'text-[27px] lg:text-[23px]'}`}>{skills[id3].phrase}</p>
                        </div>
                        <div className="absolute bottom-0">
                            <img src={skills[id3].IMG} className={`${id3 === 1 ? 'w-[350px]' : 'w-[420px]'}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-around lg:mt-[-40px]">
                <button className="text-[60px]" onClick={() => {setId(id - 1); setId2(id2 - 1); setId3(id3 - 1); if (id === 0){setId(2)};if (id2 === 0){setId2(2)}; if (id3 === 0){setId3(2)};}}><IoArrowBackCircleOutline/></button>
                <button className="text-[60px]" onClick={() => {setSkill(); setSkill2(); setSkill3(); if(id3 === 2) {setId3(0)}}}><IoArrowForwardCircleOutline/></button>
            </div>
        </div>
    )
}
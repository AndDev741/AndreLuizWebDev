import { Element } from "react-scroll"
import { FaRegUserCircle, FaReact, FaRegMap } from 'react-icons/fa'
import { SlTrophy } from 'react-icons/sl' 
//Images
import aboutIMG  from './Assets/aboutIMG.png'


export default function About() {
    return(
        <Element name="about" className="">
            <div className="font-pFont">
                <div className="lg:flex justify-end">
                    <div className="flex items-center lg:justify-start justify-center bg-black lg:w-[1041px]">
                        <h1 className="text-white text-[70px] lg:ml-8 font-hFont m-5">About Me</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-8">
                    <div className="flex flex-col items-center justify-center my-6">
                        <FaRegUserCircle className="text-[60px] text-black mb-2" />
                        <p className="text-center text-3xl">My name is <strong>André Luiz</strong></p>
                    </div>
                    <div className="flex flex-col items-center justify-center my-6">
                        <FaRegMap className="text-[60px] text-black mb-2" />
                        <p className="text-center text-3xl">I'm from <strong>Brazil</strong></p>
                    </div>
                    <div className="flex flex-col items-center justify-center my-6">
                        <FaReact className="text-[60px] text-black mb-2" />
                        <p className="text-center text-3xl w-[80%]">I study <u>Analysis and systems development</u></p>
                    </div>
                    <div className="flex flex-col items-center justify-center my-6">
                        <SlTrophy className="text-[60px] text-black mb-2" />
                        <p className="text-center text-3xl w-[80%]">My motivation its be a <strong>better professional</strong> every day, <u>helping people</u> with they <strong>image on internet</strong></p>
                    </div>
                    <div className="flex items-center justify-end">
                        <img src={aboutIMG} className="animate-smoothMoveMB w-[340px]" />
                    </div>
                </div>
            </div>
        </Element>
    )
}
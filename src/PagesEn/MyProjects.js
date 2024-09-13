import { Element } from "react-scroll"
import { useState } from "react"
import data from './projects.json'
import pageIMG from './Assets/pageIMG.png'
import nextIMG from './Assets/nextIMG.png'
import githubIMG from './Assets/githubIMG.png'
import projectsIMG from './Assets/projectsIMG.png'
import mindblowingGIF from './Assets/mindBlowingGIF.webm'
import mindblowingIMG from './Assets/mindBlowingIMG.png'
import jmServiçosGIF from './Assets/jmServiçosGIF.webm'
import jmServiçosIMG from './Assets/jmServiçosIMG.png'
import GYRGIF from './Assets/GYRGIF.webm'
import GYRIMG from './Assets/GYRIMG.png'
import dreamBoardIMG from './Assets/DreamBoards.png'
import dreamBoardGIF from './Assets/DreamBoards.webm'
import siteIMG from './Assets/siteIMG.png'
import designIMG from './Assets/designsIMG.png'
import howIMG from './Assets/howIMG.png'

   
export default function MyProjects() {
    let [githubLink, setGithubLink] = useState(false)
    function handleLink() {
        if (githubLink === true) {
            setGithubLink(false)
            document.body.style.overflow = 'auto';
        } else {
            setGithubLink(true);
            document.body.style.overflow = 'hidden'
        }
    }
    function doNot() {
        setGithubLink(githubLink)
    }
    let [id, setId] = useState(0);
    function handleNext(){
        setId(id + 1)
    }
    return(
        <Element name="myprojects" className="font-pFont mt-4 mb-12">
            <div className='my-12'>
                <div className="lg:flex items-center">
                    <div className="bg-black lg:w-[950px]">
                        <h1 className="text-[45px] lg:text-[70px] font-hFont text-center text-white m-1">Projects <br className="block lg:hidden" /> that i made</h1>
                    </div>
                    <img src={projectsIMG} alt='desktop icon' className="hidden lg:block ml-[100px]" />
                </div>
                <div className={`${githubLink === true ? 'relative lg:flex items-center' : 'hidden'}`}>
                     <div className="fixed top-0 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 left-0 w-[100vw] lg:w-[60vw] h-[100vh] lg:h-[600px] bg-black overflow-hidden lg:rounded text-white flex flex-col items-center justify-evenly text-center z-50">
                        <h1 className="font-hFont text-[40px] mt-8 lg:m-5">Unfortunaly i can't provide <u>all</u> the source code of this project </h1>
                        <p className="text-xl">You can see a part of the code here:</p>
                        <button className="border-2 border-white ronded m-6"><a href={data.projects[id].githubLink} target={"_blank"} rel='noreferrer' className='text-xl underline m-6'
                        onClick={handleLink}>See the code</a></button>
                        <button className='text-2xl underline m-6 cursor-pointer' onClick={handleLink}>Go back</button>
                     </div>
                </div>
                <div className="">
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-evenly mt-8">
                        <div className="flex flex-col items-center justify-center order-2 lg:order-none">
                            <div className="flex flex-col items-center my-4">
                                <img src={pageIMG} alt='page icon' className="mt-6 mb-2" />
                                <a href={data.projects[id].pageLink} target={"_blank"} rel='noreferrer' className='text-xl underline  cursor-pointer mt-4'>See the page</a>
                            </div>
                            <div className="flex flex-col items-center my-4">
                                <img src={nextIMG} alt='page icon' className="mt-6 mb-2 w-[68px]" />
                                <button className='text-xl underline cursor-pointer' onClick={id === data.projects.length - 1 ? setId(0) : handleNext}>Next Project</button>
                            </div>  
                            <div className="flex flex-col items-center my-4">
                                <img src={githubIMG} alt='page icon' className="mt-6 mb-2" />
                                <a href={data.projects[id].privacy === false ? data.projects[id].githubLink : doNot} target={"_blank"} rel='noreferrer' className='text-xl underline cursor-pointer'
                                onClick={data.projects[id].privacy === true ? handleLink : doNot}>See the code</a>
                            </div>
                        </div>
                        <div className="bg-[#d9d9d9] rounded-[12px] w-[276px] h-[452px]">
                            <img src={`${process.env.PUBLIC_URL}/static/media/${data.projects[id].mbIMG}`} alt='Mind blowing morning site' className="w-[276px] h-[452px] rounded-[12px]" />
                        </div>
                        <div className="flex flex-col items-center">
                        <div className="hidden lg:block bg-[#d9d9d9] rounded-[12px] w-[620px] h-[352px]">
                            <video 
                            src={`${process.env.PUBLIC_URL}/static/media/${data.projects[id].pcGIF}`}
                            type='video/webm' 
                            autoPlay={true} 
                            controls={true} 
                            className='rounded-[12px]'></video>
                        </div>
                            <h1 className="text-3xl font-hFont text-center my-6">{data.projects[id].title}</h1>
                            <p className="text-xl text-center w-[85vw] lg:w-[664px]">{data.projects[id].phrase}</p>
                        </div>
                    </div>
                </div>
            </div>
            <HowIMake />
        </Element>
    )
}
function HowIMake() {
    return(
        <div className="font-pFont mt-12">
        <h1 className="text-[60px] md:text-[55px] text-center lg:text-left font-hFont lg:ml-12">How i make them</h1>
        <div className="flex flex-col lg:items-center md:flex-row lg:justify-center lg:mx-12">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center lg:items-start w-[98%] sm:w-[90%] md:w-[80%] lg:w-[580px] h-[100%] pb-3 lg:pb-0 lg:h-[280px] border-[2px] border-black rounded-[6px] mt-6 lg:mt-0 ">
                    <div className="flex items-center flex-wrap">
                        <img src={siteIMG} alt='website icon' className='w-[80px] sm:w-[90px]' />
                        <h1 className="font-hFont text-[23px] sm:text-[26px] lg:text-[37px] lg:ml-3">Websites Development</h1>
                    </div>
                    <p className="text-3xl text-center lg:text-start mt-4 lg:m-4">I use <strong>React JS</strong>  to make all the websites from zero, creating custom websites with <strong>personality</strong> and unique <strong>functionalities</strong></p>
                </div>
                <div className="flex flex-col items-center  lg:items-start w-[98%] sm:w-[90%] md:w-[80%] lg:w-[580px] h-[100%] pb-3 lg:pb-0 lg:h-[280px] border-[2px] border-black rounded-[6px] mt-8">
                    <div className="flex items-center flex-wrap sm:ml-3">
                        <img src={designIMG} alt='design icon' className='w-[80px] sm:w-[90px]' />
                        <h1 className="font-hFont text-[26px] sm:text-[28px]  lg:text-[37px] ml-2 lg:ml-6">Web Design Process</h1>
                    </div>
                    <p className="text-3xl text-center lg:text-start mt-4 lg:m-4"><strong>Figma</strong>  its the software that i choose to make all this beautiful websites design, with a lot of <strong>UI</strong> and <strong>UX</strong> strategies for better user experience</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
            <img src={howIMG} alt='future man icon' className='w-[100%] sm:w-[80%] md:w-[100%] animate-smoothMoveMB lg:animate-smoothMove'/>
            </div>
        </div>     
        
        </div>
    )
}
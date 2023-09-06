import { Element } from "react-scroll"
import { useState } from "react"
//images
import mindBlowingIMG from './Assets/mindBlowingIMG.png'
import pageIMG from './Assets/pageIMG.png'
import nextIMG from './Assets/nextIMG.png'
import githubIMG from './Assets/githubIMG.png'
import projectsIMG from './Assets/projectsIMG.png'
   

export default function MyProjects() {

    let [githubLink, setGithubLink] = useState(false)

    function handleLink() {
    if(githubLink === false) {
        setGithubLink(true)
    } else if (githubLink === true) {
        setGithubLink(false)
    }}


    return(
        <Element name="myprojects" className="font-pFont mt-4 mb-12">
            <div className='mt-8'>
                <div className="lg:flex items-center">
                    <div className="bg-black lg:w-[800px]">
                        <h1 className="text-[60px] lg:text-[70px] font-hFont text-center text-white">Projects <br className="block lg:hidden" /> that i made</h1>
                    </div>
                    <img src={projectsIMG} alt='desktop icon' className="hidden lg:block ml-[100px]" />
                </div>
                <div className="">
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-evenly mt-8">
                        <div className="flex flex-col items-center justify-center order-2 lg:order-none">
                            <div className="flex flex-col items-center my-4">
                                <img src={pageIMG} alt='page icon' className="mt-6 mb-2" />
                                <a href="https://mindblowingmornings.com/" target={"_blank"} className='text-xl underline mt-4'>See the page</a>
                            </div>
                            <div className="flex flex-col items-center my-4">
                                <img src={nextIMG} alt='page icon' className="mt-6 mb-2 w-[68px]" />
                                <a href="https://mindblowingmornings.com/" target={"_blank"} className='text-xl underline'>Next Project</a>
                            </div>  
                            <div className="flex flex-col items-center my-4">
                                <img src={githubIMG} alt='page icon' className="mt-6 mb-2" />
                                <a target={"_blank"} className='text-xl underline'
                                onClick={handleLink}>See the code</a>
                            </div>
                        </div>
                        <div className={`${handleLink === true ? 'block' : 'hidden'} absolute mt-[-20px] w-[62vw] h-[80vh] rounded bg-black font-hFont`}>
                            <p onClick={handleLink} className={` text-white text-right text-[40px] mr-12 mt-8 cursor-pointer`}>X</p>
                        </div>
                        <div className="bg-[#d9d9d9] rounded-[12px] w-[276px] h-[452px]">
                            <img src={mindBlowingIMG} alt='Mind blowing morning site' className="w-[276px] h-[452px] rounded-[12px]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="hidden lg:block bg-[#d9d9d9] rounded-[12px] w-[620px] h-[352px]">
                            
                            </div>
                            <h1 className="text-3xl font-hFont text-center my-6">MindBlowingMorning</h1>
                            <p className="text-xl text-center w-[85vw] lg:w-[664px]">Mind Blowing Morning was a amazing site that i help build for the tann mann gaadi company, a institution from India. I work as a front-end developer, building the page according to the design and making new funcionalites</p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
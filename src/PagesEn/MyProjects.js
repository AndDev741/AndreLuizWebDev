import { Element } from "react-scroll"
import { useState } from "react"
import { Link as Linkar } from "react-scroll";
import data from './projects.json'
//images
import mindBlowingIMG from './Assets/mindBlowingIMG.png'
import pageIMG from './Assets/pageIMG.png'
import nextIMG from './Assets/nextIMG.png'
import githubIMG from './Assets/githubIMG.png'
import projectsIMG from './Assets/projectsIMG.png'
import mindBlowingGIF from './Assets/mindBlowingGIF.webm'
   

export default function MyProjects() {

    let [githubLink, setGithubLink] = useState(false)
    function handleLink() {
        if (githubLink === true) {
            setGithubLink(false)
        } else {
            setGithubLink(true)
        }
    }

    let [id, setId] = useState(0);
    function handleNext(){
        setId(id + 1)
    } 
    
    const project = data.projects[id]
    const importImage = () => import(`${project.pcGIF}`)


    console.log(data.projects[id].pcGIF)
    console.log(importImage)


    return(
        <Element name="myprojects" className="font-pFont mt-4 mb-12">
            <div className='mt-8'>
                <div className="lg:flex items-center">
                    <div className="bg-black lg:w-[800px]">
                        <h1 className="text-[60px] lg:text-[70px] font-hFont text-center text-white">Projects <br className="block lg:hidden" /> that i made</h1>
                    </div>
                    <img src={projectsIMG} alt='desktop icon' className="hidden lg:block ml-[100px]" />
                </div>
                <div className={`${githubLink === true ? 'relative lg:flex items-center' : 'hidden'}`}>
                     <div className="fixed top-0 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 left-0 w-[100vw] lg:w-[60vw] h-[100vh] lg:h-[600px] bg-black overflow-hidden lg:rounded text-white flex flex-col items-center justify-evenly text-center">
                        <h1 className="font-hFont text-[40px] mt-8">Unfortunaly i can't provide the source code of this project </h1>
                        <p className="text-xl">You can see a part of the code here:</p>
                        <button className="border-2 border-white ronded m-6"><a target={"_blank"} className='text-xl underline m-6'
                        onClick={handleLink}>See the code</a></button>
                        <Linkar className='text-2xl underline m-6 cursor-pointer' to='myprojects' onClick={handleLink}>Go back</Linkar>
                     </div>
                </div>
                <div className="">
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-evenly mt-8">
                        <div className="flex flex-col items-center justify-center order-2 lg:order-none">
                            <div className="flex flex-col items-center my-4">
                                <img src={pageIMG} alt='page icon' className="mt-6 mb-2" />
                                <a href='' target={"_blank"} className='text-xl underline  cursor-pointer mt-4'>See the page</a>
                            </div>
                            <div className="flex flex-col items-center my-4">
                                <img src={nextIMG} alt='page icon' className="mt-6 mb-2 w-[68px]" />
                                <button className='text-xl underline cursor-pointer' onClick={handleNext}>Next Project</button>
                            </div>  
                            <div className="flex flex-col items-center my-4">
                                <img src={githubIMG} alt='page icon' className="mt-6 mb-2" />
                                <a target={"_blank"} className='text-xl underline cursor-pointer'
                                onClick={handleLink}>See the code</a>
                            </div>
                        </div>
                        <div className="bg-[#d9d9d9] rounded-[12px] w-[276px] h-[452px]">
                            <img src={importImage} alt='Mind blowing morning site' className="w-[276px] h-[452px] rounded-[12px]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="hidden lg:block bg-[#d9d9d9] rounded-[12px] w-[620px] h-[352px]">
                            <video src={mindBlowingGIF} type='video/webm' autoPlay={true} controls={true} className='rounded-[12px]'></video>
                            </div>
                            <h1 className="text-3xl font-hFont text-center my-6">{data.projects[id].title}</h1>
                            <p className="text-xl text-center w-[85vw] lg:w-[664px]">{data.projects[id].phrase}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
import { Element } from "react-scroll"
import { useState } from "react"
import { Link as Linkar } from "react-scroll";
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
import todoListIMG from './Assets/todoListIMG.png'
import todoListGIF from './Assets/todoListGIF.webm'
import siteIMG from './Assets/siteIMG.png'
import designIMG from './Assets/designsIMG.png'
import howIMG from './Assets/howIMG.png'

console.log(todoListGIF)
console.log(todoListIMG)
   
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
                        <h1 className="text-[45px] lg:text-[55px] font-hFont text-center lg:text-start lg:ml-8 text-white m-1">Projetos <br className="block lg:hidden" /> já feitos</h1>
                    </div>
                    <img src={projectsIMG} alt='Computadores com códigos de programação' className="hidden lg:block ml-[100px]" />
                </div>
                <div className={`${githubLink === true ? 'relative lg:flex items-center' : 'hidden'}`}>
                     <div className="fixed top-0 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 left-0 w-[100vw] lg:w-[60vw] h-[100vh] lg:h-[600px] bg-black overflow-hidden lg:rounded text-white flex flex-col items-center justify-evenly text-center z-50">
                        <h1 className="font-hFont text-[40px] mt-8 lg:m-5">Infelizmente eu não posso mostrar <u>todo </u>o código deste projeto </h1>
                        <p className="text-xl">Você pode ver uma parte do código aqui:</p>
                        <button className="border-2 border-white ronded m-6"><a href={data.projects[id].githubLink} target={"_blank"} rel='noreferrer' className='text-xl underline m-6'
                        onClick={handleLink}>Ver o código</a></button>
                        <button onClick={handleLink} className='text-2xl underline m-6 cursor-pointer'>Voltar</button>
                     </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-evenly mt-8">
                        <div className="flex flex-col items-center justify-center order-2 lg:order-none">
                            <div className="flex flex-col items-center my-4">
                                <img src={pageIMG} alt='Icone de uma página web' className="mt-6 mb-2" />
                                <button><a href={data.projects[id].pageLink} target={"_blank"} rel='noreferrer' className='text-xl underline  cursor-pointer mt-4'>Ir até a página</a></button>
                            </div>
                            <div className="flex flex-col items-center my-4">
                                <img src={nextIMG} alt='Icone de uma seta para a direita' className="mt-6 mb-2 w-[68px]" />
                                <button className='text-xl underline cursor-pointer' onClick={id === data.projects.length - 1 ? setId(0) : handleNext}>Próximo Projeto</button>
                            </div>  
                            <div className="flex flex-col items-center my-4">
                                <img src={githubIMG} alt='Icone do github' className="mt-6 mb-2" />
                                <button><a href={data.projects[id].privacy === false ? data.projects[id].githubLink : doNot} target={"_blank"} rel='noreferrer' className='text-xl underline cursor-pointer'
                                onClick={data.projects[id].privacy === true ? handleLink : doNot}>Ver o código</a></button>
                            </div>
                        </div>
                        <div className="bg-[#d9d9d9] rounded-[12px] w-[276px] h-[452px]">
                            <img src={`${process.env.PUBLIC_URL}/static/media/${data.projects[id].mbIMG}`} alt='Video de apresentação do site' className="w-[276px] h-[452px] rounded-[12px]" />
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
        <h1 className="text-[60px] md:text-[55px] text-center lg:text-left font-hFont lg:ml-12">Como eu faço eles</h1>
        <div className="flex flex-col lg:items-center md:flex-row lg:justify-center lg:mx-12">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center lg:items-start w-[98%] sm:w-[90%] md:w-[80%] lg:w-[600px] h-[100%] pb-3 lg:pb-0 lg:h-[280px] border-[2px] border-black rounded-[6px] mt-6 lg:mt-0 ">
                    <div className="flex flex-col sm:flex-row items-center flex-wrap">
                        <img src={siteIMG} alt='icone de uma página na web' className='w-[80px] sm:w-[90px]' />
                        <h1 className="font-hFont text-[26px] sm:text-[26px] lg:text-[37px] lg:ml-3">Desenvolvimento de sites</h1>
                    </div>
                    <p className="text-2xl sm:text-3xl text-center lg:text-start mt-4 lg:m-4">Eu uso <strong>React JS</strong>  para criar todos os sites do zero, construindo incriveis sites com <strong>personalidade</strong> e funcionalidades <strong>únicas</strong></p>
                </div>
                <div className="flex flex-col items-center  lg:items-start w-[98%] sm:w-[90%] md:w-[80%] lg:w-[600px] h-[100%] pb-3 lg:pb-0 lg:h-[280px] border-[2px] border-black rounded-[6px] mt-8">
                    <div className="flex flex-col sm:flex-row items-center flex-wrap sm:ml-3">
                        <img src={designIMG} alt='icone de design' className='w-[80px] sm:w-[90px]' />
                        <h1 className="font-hFont text-[26px] sm:text-[28px]  lg:text-[37px] ml-2 lg:ml-6">Web Design</h1>
                    </div>
                    <p className="text-2xl sm:text-3xl text-center lg:text-start mt-4 lg:m-4"><strong>Figma</strong>  é o software que eu escolhi para fazer todos os incriveis designs dos websites, com várias estratégias de <strong>UI</strong> e <strong>UX</strong> para melhor experiência dos usuários</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
            <img src={howIMG} alt='imagem de um homem tecnologico selecionando coisas' className='w-[100%] sm:w-[80%] md:w-[100%] animate-smoothMoveMB lg:animate-smoothMove'/>
            </div>
        </div>     
        
        </div>
    )
}
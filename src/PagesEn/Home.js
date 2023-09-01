import { Element } from "react-scroll"
//images
import whatsBlackIcon from './Assets/blackWhats.png'
import homeImage from './Assets/homeImage.png'
export default function Home() {


    return(
        <Element name="home">
            <div className="flex flex-col lg:flex-row items-center lg:justify-around justify-center font-pFont">
                <div className="flex flex-col items-center lg:items-start justify-center mt-12 font-pFont lg:mx-12">
                    <h1 className="font-hFont text-[54px] sm:text-[70px] text-center lg:text-left">
                        I create <br/> your image <br/> on <u>internet</u><span className="animate-pulse">|</span></h1>
                    <p className="text-[36px] lg:text-[34px] text-center lg:text-left mt-5 lg:mt-0 lg:w-[480px]">
                        I made everything that you <u>need</u>, since the <b>design, engineering, SEO tactics</b>  and more </p>
                    <button className="flex items-center bg-black w-[257px] h-[63px] rounded-[24px] mt-5 lg>mt-2
                            hover:scale-95">
                        <img src={whatsBlackIcon} className='ml-[20px]'/>
                        <h2 className="text-white text-[24px] font-[800] ml-3">Contact me</h2>
                    </button>
                </div>
                <div className="flex justify-center mb-6">
                    <img src={homeImage} className=' w-[400px] lg:w-[80%] animate-smoothMoveMB lg:animate-smoothMove'/>
                </div>
            </div>
        </Element>
    )
}
import { Link, useLocation } from "react-router-dom"
import RenderPt from "../../PagesPt/RenderPt"
export default function NavbarPt() {
    const location = useLocation();
    return(
        <nav>
            <div className="flex items-center justify-center">
                <Link to='/en' className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-l-[24px]
                ${location.pathname === '/pt' ? 'bg-black text-white' : ''}`}>
                    <p>EN</p>
                </Link>
                <Link to='/pt' className={`flex items-center justify-center
                w-[48px] h-[26px] border-[1px] border-black rounded-r-[24px]
                ${location.pathname === '/en' ? 'bg-black text-white' : ''}`}>
                    <p>PT</p>
                </Link>
            </div>
        </nav>
    )}
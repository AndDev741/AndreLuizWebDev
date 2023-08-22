export default function Navbar() {
    return(
        <nav>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center
                w-[48px] h-[26px] border-2 border-black rounded-l-[24px]">
                    <p>EN</p>
                </div>
                <div className="flex items-center justify-center
                w-[48px] h-[26px] border-2 border-black rounded-r-[24px]">
                    <p>PT</p>
                </div>
            </div>
        </nav>
    )
}
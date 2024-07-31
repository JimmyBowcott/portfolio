import { Link } from "react-router-dom";
import Underline from "../components/Underline";

const NavBar = () => {
    return (
        <nav className="w-full bg-slate-800 text-white flex items-center justify-center p-4">
            <div className="flex flex-row gap-2 justify-between max-w-[1100px] w-full">
                <Link to="/"><p className="text-lg font-bold">Jimmy Bowcott</p></Link>
                <p className="text-lg font-bold">|</p>
                <Link to="/about">
                    <Underline title="about" params="text-lg" lineHeight="h-1" />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;
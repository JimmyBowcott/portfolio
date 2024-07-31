import { Link } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";

const Footer = () => {
    return (
        <footer className="flex flex-col w-full bg-slate-800 text-white justify-center items-center p-8">
            <div className="flex flex-row justify-between w-full max-w-[1100px]">
                <p className="text-2xl font-bold max-w-32">Jimmy Bowcott</p>
                <ul className="flex flex-col">
                    <li className="font-bold">Links</li>
                    <Link to="/"><li className="text-orange-500 hover:text-white">Home</li></Link>
                    <Link to="/about"><li className="text-orange-500 hover:text-white">About</li></Link>
                </ul>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Contact</p>
                    <div className="flex flex-row gap-4">
                        <HeaderIcon src="github" href="https://github.com/jimmybowcott" />
                        <HeaderIcon src="linkedin" href="https://www.linkedin.com/in/jimmy-bowcott-3b58ab25b/" />
                        <HeaderIcon src="mailto" href="mailto:bowcottjames&#64;gmail&#46;com" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import { Link } from "react-router-dom";
import Underline from "../../components/Underline";

const SkillsSection = () => {
    return (
        <div className="flex flex-col w-auto">
        <Underline title="Skills" params="text-4xl font-bold" lineHeight="h-2" />
        <div className="flex flex-col sm:flex-row gap-4">
            <img src="./assets/media/portrait.gif" className="pixelated h-72 md:h-96 w-auto mx-auto mt-4" alt="Portrait"/>
            <div className="flex flex-col flex-wrap gap-2 mt-4">
                <div className="flex flex-wrap gap-2 text-white">
                    <div className="bg-slate-800 p-1 px-2">HTML</div>
                    <div className="bg-slate-800 p-1 px-2">CSS</div>
                    <div className="bg-slate-800 p-1 px-2">JavaScript</div>
                    <div className="bg-slate-800 p-1 px-2">React</div>
                    <div className="bg-slate-800 p-1 px-2">Tailwind</div>
                    <div className="bg-slate-800 p-1 px-2">Python</div>
                    <div className="bg-slate-800 p-1 px-2">T-SQL</div>
                    <div className="bg-slate-800 p-1 px-2">Git</div>
                    <div className="bg-slate-800 p-1 px-2">Webpack</div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <h1 className="text-2xl font-bold">About me</h1>
                  <p>Alongside my first-class aerospace degree, I am proficient in HTML, CSS, JavaScript and have experience with Python and T-SQL. 
                    I made the switch from engineering to software development in order to persue something that I am passionate about, I love to be constantly
                    learning new skills and computers have always been an interest to me!</p>
                </div>
                <Link to="/about"><p className="text-lg text-orange-500 font-bold">Read more</p></Link>
            </div>
        </div>
    </div>
    )
}

export default SkillsSection;
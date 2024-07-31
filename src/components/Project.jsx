import { Link } from "react-router-dom";

const Project = ({name, tags, description}) => {
    const url = name.toLowerCase().replace(' ', '-');
    return (
        <div className="flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold">{name}</h2>
                <div className="flex flex-wrap gap-2 text-white">
                    {tags.map((tag, i) => (
                        <div key={i} className="bg-slate-800 p-1 px-2 text-md sm:text-lg">{tag}</div>
                    ))}  
                </div>
                <p className="max-w-[500px]">{description}</p>
                <Link to={`/projects/${url}`}><button className="bg-orange-500 p-2 px-4 hover:px-8 transition-all duration-300 ease-in-out">View Project</button></Link>
            </div>
            <Link to={`/projects/${url}`}><img src={`./assets/media/${url}.png`} alt="" className="w-full max-w-[500px] h-auto mb-auto 
            transition-transform transform hover:-translate-y-5 duration-300 ease-in-out " /></Link>
        </div>
    );
}

export default Project;
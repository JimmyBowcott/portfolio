import { Link } from "react-router-dom"
import { useState } from 'react';
import '../css/index.css';

const Underline = ({title, params, lineHeight}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="flex flex-col mr-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className={params}>{title}</p>
            <div className={`transition-all duration-300 ease-in-out ${isHovered ? "w-full" : "w-1/2"} ${lineHeight} bg-orange-400`}></div>
        </div>
    );
}

export default Underline;
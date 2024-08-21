import { useState } from 'react';

const HeaderIcon = ({src, href}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <a href={href} target='_blank'>
            <img src={`${isHovered ? "./assets/icons/hover/" : "./assets/icons/"}${src}.png`} alt=""
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
            className="pixelated h-8 w-8"/>
        </a>
    );
}

export default HeaderIcon;
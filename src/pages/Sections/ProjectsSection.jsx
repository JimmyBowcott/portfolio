import Underline from '../../components/Underline';
import Project from '../../components/Project';

const ProjectsSection = () => {
    return (
        <div className="flex flex-col w-auto gap-8">
            <Underline title="Projects" params="text-4xl font-bold" lineHeight="h-2" />
            <div className="flex flex-col w-auto gap-16">
                <Project name="Pixterest" tags={["MongoDB", "Express", "Node", "React", "Tailwind", "API"]} description="Pixterest is a full-stack Pinterest clone designed specifically for pixel art. Built with React, it features DeviantArt's RSS API to fetch posts which can be saved to user accounts. It is designed to be fully responsive for every screen size. My inspiration for this project came from wanting to make a challenging website with my own personal spin." />
                <Project name="Algorithm Visualiser" tags={["React", "Tailwind"]} description="Algorithm Visualiser is an interactive visualiser for search and sort algorithms. It features data structures such as arrays, trees and graphs, and is supported on mobile devices." />
                <Project name="Knight Moves" tags={["Vanilla", "Algorithm"]} description="Knight moves is a knight pathfinder which finds the shortest path to a pawn. This was my first implementation of a BFS algorithm and I figured it could do with an interactive UI alongside it. It is written in vanilla JS/CSS." />
            </div>
        </div>
    );
}

export default ProjectsSection;
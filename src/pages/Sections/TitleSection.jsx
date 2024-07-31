import HeaderIcon from "../../components/HeaderIcon";

const TitleSection = () => {
    
    return (
        <div className="h-screen w-full bg-slate-800 text-white flex flex-col items-center p-4">
            <div className="flex flex-grow h-full flex-col justify-center gap-8 p-8">
                <div className="flex flex-row">
                    <h1 className="text-5xl sm:text-7xl mr-4 max-w-[1100px] w-full">Hi, I'm
                    <span className="text-orange-500"> Jimmy Bowcott</span>, a front-end developer.</h1>
                </div>
                <div className="flex flex-row gap-6">
                    <HeaderIcon src="github" href="https://github.com/jimmybowcott" />
                    <HeaderIcon src="linkedin" href="https://www.linkedin.com/in/jimmy-bowcott-3b58ab25b/" />
                    <HeaderIcon src="mailto" href="mailto:bowcottjames@gmail.com" />
                    <HeaderIcon src="cv" href="" />
                </div>
                <p className=" text-lg sm:text-xl max-w-[500px]">Passionate problem-solver 🧩 Strategic thinker ♟️ Creative coder 💻... And I may also have a thing for pixel art.</p>
            </div>
      </div>
    )
}

export default TitleSection;
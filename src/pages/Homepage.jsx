import TitleSection from './Sections/TitleSection'
import SkillsSection from './Sections/SkillsSection'
import ProjectsSection from './Sections/ProjectsSection'

function Homepage() {

  return (
    <>
      <TitleSection />
      <div className="flex justify-center w-full bg-white text-slate-800 text-md sm:text-lg mb-8">
        <div className="flex flex-col gap-16 max-w-[1100px] w-full mt-8 px-4">
            <SkillsSection />
            <ProjectsSection />
          </div>
      </div>
    </>
  )
}

export default Homepage;

import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaProjectDiagram } from "react-icons/fa";

export default function Projects() {
  return (
    <div id="projects" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaProjectDiagram />Projects</p>
          <div className="grid grid-cols-4 gap-4">
            {profile.projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col justify-start items-center gap-2 p-6 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-600 cursor-pointer"
              >
                <img
                  src={project.logo}
                  alt="logo"
                  className="w-32 rounded-full"
                />
                <p className="w-full text-center text-md font-medium text-zinc-50 px-4 py-2 rounded-lg">{project.name}</p>
                <p className="text-sm text-zinc-400">{project.bio}</p>
                <p className="text-sm">{project.description}</p>
                <div className="w-full flex flex-wrap justify-start gap-1">
                  {project.skills?.map((skill) => (
                    <p key={skill} className="text-[12px] border border-zinc-800 px-3 py-1 rounded-full">{skill}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}
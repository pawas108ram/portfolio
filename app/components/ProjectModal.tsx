import React from 'react'
import { Project } from './ProjectCard'
import { MdClose } from 'react-icons/md'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import Link from 'next/link'

const ProjectModal = ({onClose,project}:{onClose:()=>void,project:Project}) => {
  return (
      <div className='fixed inset-0 bg-black/40 flex flex-row items-center justify-center z-[99]'>
          <div className='w-2/3 bg-color-panel p-4 rounded flex flex-col items-center relative gap-4 '>
              <button className='absolute p-3 bg-black text-white -top-5 -right-5 rounded-full ' onClick={onClose}><MdClose /></button>
              <span className='text-4xl underline  text-white font-semibold '>{project.name}</span>
              <span className='text-2xl underline font-medium text-white '>Description of the Project</span>
              <span className='text-xl text-white bg-black/30 py-1 px-2 rounded'>{project.description}</span>
              <span className='text-2xl underline font-medium text-white '>Tech Stack</span>
                <div className='flex flex-row gap-4'>
                    {project.techStack.map((tech) => (
                        <span key={tech} className='text-xl text-white bg-black/40 py-1 px-2 rounded '>{tech}</span>
                    ))}
              </div>
              <div className='flex flex-row items-center gap-3 text-white bg-black/50 py-2 px-3 w-full justify-center rounded'>
                  <FaGlobe/>
                  <Link className='underline text-blue-600' href={project.deployedLink}>{project.deployedLink} </Link>
              </div>
              <div className='flex flex-row items-center gap-3 text-white bg-black/50 py-2 px-3 w-full justify-center rounded'>
                  <FaGithub />
                    <Link className='underline text-blue-600' href={project.githubLink}>{project.githubLink} </Link>
              </div>
          </div>
      
    </div>
  )
}

export default ProjectModal

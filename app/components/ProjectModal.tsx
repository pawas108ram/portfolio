import React from 'react'
import { Project } from './ProjectCard'
import { MdClose } from 'react-icons/md'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import Link from 'next/link'

const ProjectModal = ({onClose,project}:{onClose:()=>void,project:Project}) => {
  return (
      <div className='fixed inset-0 bg-black/40 flex flex-row items-center justify-center z-[99]'>
          <div className='lg:w-2/3 bg-color-panel p-4 rounded flex flex-col items-center relative gap-4 xs:h-5/6 xs:overflow-y-auto lg:h-auto lg:overflow-visible xs:w-5/6 '>
              <button className='absolute p-3 bg-black text-white -top-5 -right-5 rounded-full xs:top-0 xs:right-0 ' onClick={onClose}><MdClose /></button>
              <span className='lg:text-4xl underline  text-white font-semibold xs:text-2xl flex-wrap w-5/6 text-center'>{project.name}</span>
              <span className='lg:text-2xl underline font-medium text-white xs:text-lg'>Description of the Project</span>
              <span className='lg:text-xl text-white bg-black/30 py-1 px-2 rounded xs:text-base' >{project.description}</span>
              <span className='lg:text-2xl underline font-medium text-white xs:text-lg'>Tech Stack</span>
                <div className='flex flex-row gap-4 xs:gap-2 flex-wrap'>
                    {project.techStack.map((tech) => (
                        <span key={tech} className='lg:text-xl text-white bg-black/40 py-1 px-2 rounded xs:text-sm'>{tech}</span>
                    ))}
              </div>
              <div className='flex flex-row items-center gap-3 text-white bg-black/50 py-2 px-3 w-full justify-center rounded xs:text-sm lg:text-base'>
                  <FaGlobe/>
                  <Link className='underline text-blue-600 flex-wrap' href={project.deployedLink}>{project.deployedLink} </Link>
              </div>
              <div className='flex flex-row items-center gap-3 text-white bg-black/50 py-2 px-3 w-full justify-center rounded xs:text-sm lg:text-base'>
                  <FaGithub />
                    <Link className='underline text-blue-600 flex-wrap' href={project.githubLink}>{project.githubLink} </Link>
              </div>
          </div>
      
    </div>
  )
}

export default ProjectModal

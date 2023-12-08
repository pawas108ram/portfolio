import { projects } from '@/lib/projects'
import React from 'react'
import ProjectCard, { Project } from './ProjectCard'

const Projects = () => {
  return (
      <div className='bg-white/10 rounded w-full flex flex-col gap-8 p-4'>
          <span className='text-4xl underline font-bold text-white '>My Projects</span>
          <div className='bg-black/30 p-4 rounded lg:w-5/6 grid lg:grid-cols-2 gap-4 self-center xs:grid-cols-1 xs:w-full '>
              {projects.map((project:Project) => {
                 return  <ProjectCard project={project} key={project.name} />
              })}
          </div>

      
    </div>
  )
}

export default Projects

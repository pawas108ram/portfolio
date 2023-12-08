'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import ProjectModal from './ProjectModal';
import {motion} from 'framer-motion';

export type Project={
    name: string;
    techStack: string[];
    description: string;
    deployedLink: string;
    githubLink: string;
    image: string;

}


const ProjectCard = ({ project }: { project: Project }) => {
    const [showProject, setShowProject] = useState(false);
    const [showEye, setShowEye] = useState(false);
    return (
      
        <>
            {showProject && <ProjectModal onClose={()=>setShowProject(false)} project={project}/>}
            <div className='bg-black/40 p-3 rounded flex flex-row items-center justify-center h-[250px] relative ' onMouseEnter={() => setShowEye(true)} onMouseLeave={() => setShowEye(false)}>
                {<motion.div animate={showEye ? 'show' : 'hide'} variants={
                    {
                        show: { scale: 1, opacity: 1, transition: { duration: 0.3 } ,display:'flex' ,backdropFilter:'blur(6px)'},
                        hide: { scale: 0, opacity: 0, transition: { duration: 0.3 } ,display:'none' ,backdropFilter:'blur(0px)'}
                    }
                } className=' bg-color-panel/40  flex flex-row items-center justify-center absolute top-0 left-0 right-0 bottom-0  z-10'>
                    <button className='bg-black text-white font-semibold rounded py-2 px-4' onClick={()=>setShowProject(true)}>Show Project Details</button>
                </motion.div>}
              <Image src={project.image} alt='Project Image' height={400} width={400} className=' h-full w-full object-contain '/>
              
                </div>
        </>
  )
}

export default ProjectCard

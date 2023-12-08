import { skills } from '@/lib/skills'
import Image from 'next/image'
import React from 'react'
import Tooltip from '@mui/material/Tooltip';

const Skills = () => {
  return (
      <div className='bg-white/10 rounded w-full flex flex-col gap-3 p-4 text-white/70'>
          <span className='text-4xl underline font-bold text-white '>Tech Skills</span>
          {skills.map((skill) => (
              <div key={skill.skillDomain} className='flex flex-col gap-3 bg-black/40 rounded p-2'>
                  <span className='text-white underline font-medium text-2xl'>{skill.skillDomain}</span>
                    <div className='flex flex-row flex-wrap gap-4 py-2 px-4 xs:justify-center lg:justify-start'>
                      {skill.skills.map((ski) => (
                          <div className='lg:w-24 xs:w-12 xs:h-12 lg:h-24  bg-blue-600/10 outline outline-1 p-2 outline-white hover:scale-105 duration-300 hover:bg-blue-600/30 transition' key={ski.name}>
                              <Tooltip title={ski.name} placement='top-end'>
                                  <Image src={ski.icon} alt={ski.name} height={32} width={32} className='h-full w-full object-contain' />
                              </Tooltip>
                            </div>
                        ))}
                  </div>
                  </div>
        )) }

          
      
    </div>
  )
}

export default Skills

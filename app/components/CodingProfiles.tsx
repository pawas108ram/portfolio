import { profiles } from '@/lib/profiles'
import { Tooltip } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CodingProfiles = () => {
  return (
      <div className='bg-white/10 rounded w-full flex flex-col gap-8 p-4'>
          <span className='text-4xl underline font-bold text-white '>Coding Profiles</span>
          <div className='flex flex-row items-center py-3 px-4 rounded  bg-black/40  gap-6 xs:justify-center lg:justify-start '>
              {profiles.map((profile) => {
                  return  <Link  key={profile.name} href={profile.profile} className='lg:h-24 lg:w-24 xs:w-12 xs:h-12 bg-gray-800/80 p-2 rounded outline outline-1 outline-white hover:scale-105 transition duration-300 hover:bg-blue-800/20 z-20'>
                          <Tooltip title={profile.name} placement='top-end'className='text-black'>
                              <Image src={profile.icon} alt={profile.profile} height={32} width={32} className=' h-full w-full' />
                          </Tooltip>
                      </Link>
                  
              })}
                 
              
              
          </div>
      
    </div>
  )
}

export default CodingProfiles

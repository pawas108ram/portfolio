'use client'
import React, { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import {motion} from 'framer-motion'
import { navbar } from '@/lib/navbar'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import { MdClose } from 'react-icons/md'

const MobileNavbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
  return (
      <>
          <motion.div animate={showMenu ? 'show' : 'hide'} variants={{
              show: { x: 0, scaleX:1,transition: { duration: 0.6 },display:'flex' },
                hide: { x: '100%',scaleX:0, transition: { duration: 0.6 },display:'none' }
          }} className='fixed inset-0 bg-color-panel z-[999] flex flex-col items-end gap-2 p-2 xs:flex lg:hidden   '>
              <div className='relative py-4'>
                  <button className='bg-color-text/30 text-white p-4 rounded-full absolute top-0 right-0' onClick={()=>setShowMenu(false)}><MdClose/></button>
              </div>
              {navbar.map((nav) => (
                  <ScrollLink key={nav.name} spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  to={nav.id} activeClass='active'   className='bg-black/30 w-full text-center font-semibold text-color-text py-3 px-4 rounded cursor-pointer ' >{nav.name}</ScrollLink>
              ))}
                <Link href='https://drive.google.com/file/d/142yYdDYVt1uuPfQO1mk6dJSg_C4NyMnP/view?usp=drive_link' target='_blank' className="bg-black/30 w-full text-center font-semibold text-color-text py-3 px-4 rounded cursor-pointer">Resume</Link>
              
         </motion.div>
          
          {!showMenu && <div className='flex flex-row items-center p-2 bg-color-panel w-full justify-end xs:flex lg:hidden sticky top-0 z-20'>
              <button className='bg-color-panel-hover p-3  text-white ' onClick={() => setShowMenu(true)}><CiMenuFries size={20} /></button>
          
              
          </div>}
      </>
  )
}

export default MobileNavbar

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contacts = () => {
  return (
      <div className='bg-black/40 text-white rounded w-full flex flex-col p-4 gap-2 z-[999999] '>
          <span className='underline lg:text-4xl xs:text-2xl '>Socials</span>
          <div className='flex flex-row gap-2 items-center p-2'>
              <span className='flex flex-row items-center gap-4 lg:text-lg  xs:text-sm'>
                 <Image src='https://www.svgrepo.com/show/303161/gmail-icon-logo.svg' alt='gmail' height={32} width={32} />
                  <Link href='mailto:pawas48ram@gmail.com' className='text-blue-500 underline'>Gmail</Link>
              </span>
              <span className='flex flex-row items-center gap-4 lg:text-lg xs:text-sm'>
                  <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png' alt='linkedin' height={32} width={32} />
                  <Link href='https://www.linkedin.com/in/pawas-goyal/' className='text-blue-500 underline'>LinkedIn</Link>
              </span>
              <span className='flex flex-row items-center gap-4 lg:text-lg  xs:text-sm'>
                  <Image src='https://www.sarkarinaukriexams.com/images/import/sne13333514974.png' alt='twitter' height={32} width={32}  />
                  <Link href='https://twitter.com/Weeb_NotMeCoder' className='text-blue-500 underline'>Twitter</Link>
              </span>
          </div>
      
    </div>
  )
}

export default Contacts

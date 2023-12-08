
'use client'
import Banner from './components/Banner';
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import CodingProfiles from './components/CodingProfiles';
import MobileNavbar from './components/MobileNavbar';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string >('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.portfolio-section');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <=0) {
          setActiveSection(section.id);
        }
      });
    };
    

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(activeSection);

  return (
    <div className='bg-color-bg min-h-screen flex flex-col gap-3'>
      <Navbar  />
      <MobileNavbar/>
      <div id='about' className='portfolio-section'>
        <Banner />
      </div>
      <div id='skills' className='portfolio-section' >
        <Skills/>
      </div>
      <div id='profiles' className='portfolio-section'>
        <CodingProfiles/>
      </div>
      <div id='projects' className='portfolio-section'>
        <Projects/>
      </div>
      <div id='socials' className='portfolio-section'>
        <Contacts/>
      </div>
      

    </div>
  )
}

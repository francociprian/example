import React from 'react';
import { Link } from 'react-router-dom';
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <div className='my-10 text-[#1F2626] dark:text-[#DBFFFF] text-center max-w-sm mx-auto'>
      <div className='py-10 '>
        <ul  className='flex justify-between items-center'>
          <li>
            <a 
              href='https://gmail.com/'
              className='flex flex-col items-center justify-center'
              >
              <SiGmail className='text-[#5222D0] dark:text-[#00F5A0] text-3xl' /> GMAIL
            </a>
          </li>
          <li>
            <a 
              href='https://www.linkedin.com/'
              className='flex flex-col items-center justify-center'
            >
              <SiLinkedin className='text-[#5222D0] dark:text-[#00F5A0] text-3xl' /> LINKEDIN 
            </a>
          </li> 
          <li>
            <a 
              href='https://github.com/'
              className='flex flex-col items-center justify-center'
            >
              <SiGithub className='text-[#5222D0] dark:text-[#00F5A0] text-3xl' /> GITHUB
            </a>
          </li>
        </ul>
      </div>
      <div className='mb-10'>
        <ul className='flex justify-evenly'>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <p>LoremIpsum.com , 2022</p>
    </div>
  )
}

import React from 'react';
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <div className='text-[#1F2626] dark:text-[#BDEBEA] text-center'>
      <div>
        <ul  className='flex justify-center items-center gap-5'>
          <li>
            <a 
              href='https://gmail.com/'
              className='flex flex-col items-center justify-center'
              >
              <SiGmail /> GMAIL
            </a>
          </li>
          <li>
            <a 
              href='https://www.linkedin.com/'
              className='flex flex-col items-center justify-center'
            >
              <SiLinkedin /> LINKEDIN 
            </a>
          </li> 
          <li>
            <a 
              href='https://github.com/'
              className='flex flex-col items-center justify-center'
            >
              <SiGithub /> GITHUB
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href='#home'>Projects</a></li>
          <li><a href='#home'>Contact</a></li>
        </ul>
      </div>
      <p>LoremIpsum.com, 2022</p>
    </div>
  )
}

import React from 'react';


import Javascript from '../assets/logos/javascript.svg';
import ChakraUi from '../assets/logos/chakra-ui.svg';
import Docker from '../assets/logos/docker.svg';
import Express from '../assets/logos/expressjs.svg';
import Git from '../assets/logos/git.svg';
import Jest from '../assets/logos/jest.svg';
import Mongodb from '../assets/logos/mongodb.svg';
import Nest from '../assets/logos/nestjs.svg';
import Nextjs from '../assets/logos/nextjs.svg';
import ReactJs from '../assets/logos/react.svg';
import TailwindCss from '../assets/logos/tailwindcss.svg';
import Typescript from '../assets/logos/typescript.svg';
 
const data = [
  {
        name: 'Javascript',
        icon: Javascript,
  },
  {
        name: 'Typescript',
        icon: Typescript,
  },
  {
        name: 'React',
        icon: ReactJs,
  },
  {
    name: 'NextJs',
    icon: Nextjs,
  },
  {
        name: 'Mongodb',
        icon: Mongodb,
  },
  {
        name: 'ExpressJs',
        icon: Express,
  },
  {
      name: 'Jest',
      icon: Jest,
  },
  {
    name: 'Nest Js',
    icon: Nest,
  },
  {
    name: 'Docker',
    icon: Docker,
  },
  {
    name: 'Git',
    icon: Git,
  },
  {
    name: 'Tailwind Css',
    icon: TailwindCss,
  },
  {
    name: 'Chakra Ui',
    icon: ChakraUi,
  },
];

export default function Skills() {
  return (
    <div className='max-w-6xl mx-auto h-[700px] text-[#1F2626] dark:text-[#BDEBEA] my-40 '>
      <h1 className='tracking-wider text-2xl mb-24'>Skills</h1>
      <div className='grid grid-cols-4 gap-10'>
        {data.map((items, index) => {
          return (
            <div key={index} className='flex flex-col items-center'>
              <img src={items.icon} alt={items.name} className=' h-20'/>
              <p>{items.name}</p>
            </div>
          )
          })}
      </div>
    </div>
  )
}

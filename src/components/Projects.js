import React from 'react';
import ImageProjects from '../assets/ImageProjects.png';
import Button from './Button';


const TechnologiesProjects = ({title}) => {
  return (
    <p className='py-2 px-4 rounded-md bg-[#5222D0] text-[#DBFFFF] dark:bg-gradient-to-r dark:from-[#00F5A0] dark:to-[#00D9F5] dark:text-[#252728]'>{title}</p>
  )
};

const CardProjects = () => {
  return(
    <div className='flex flex-col justify-between bg-[#F5F2FD] dark:bg-[#222525] pb-10 shadow-sLight dark:shadow-sDark'>
      <img src={ImageProjects} alt='Projects' />
      <div className='px-4 py-4'>
        <h2 className='pb-2'>TITLE PROJECT</h2>
        <div className='flex gap-3 pb-3'>
          <TechnologiesProjects title={'JAVASCRIPT'}/>
          <TechnologiesProjects title={'REACT'}/>
          <TechnologiesProjects title={'REDUX'}/>
          <TechnologiesProjects title={'MONGODB'}/>
        </div>
        <p className='tracking-wider'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
  )
};

export default function Projects() {
  return (
    <div className='max-w-6xl mx-auto text-[#1F2626] dark:text-[#BDEBEA] my-32'>
      <h1 className='tracking-wider text-2xl mb-20'>Projects</h1>
      <div className='my-10 grid grid-cols-2 gap-7'>
        <CardProjects />
        <CardProjects />
      </div>
      <div className='flex justify-center items-center' >
        <Button name={'SEE ALL PROJECTS'} to={'/projects'}/>
      </div>
    </div>
  )
}

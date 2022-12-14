import React , { useEffect }from 'react';
import ImageProjects from '../assets/ImageProjects.png';
import { motion, AnimatePresence } from "framer-motion";


const TechnologiesProjects = ({title}) => {
  return (
    <p className='
      py-2 px-4 rounded-md 
      text-[#DBFFFF] dark:text-[#252728] 
      bg-[#5222D0] dark:bg-gradient-to-r dark:from-[#FFAFBD] dark:to-[#ffc3a0] '
    >
      {title}
    </p>
  )
};

const CardProjects = () => {
  return(
    <div className='flex flex-col justify-between bg-[#F5F2FD] dark:bg-[#222525] pb-10 shadow-sLight dark:shadow-sDark'>
      <img src={ImageProjects} alt='Projects' />
      <div className='px-4 py-4'>
        <h2 className='pb-2'>TITLE PROJECT</h2>
        <div className='flex flex-wrap gap-3 pb-3'>
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
  const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  return (
    <AnimatePresence
    mode='wait'
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        <div className='max-w-6xl mx-auto text-[#1F2626] dark:text-gray-100'>
          <h1 className='tracking-wider pt-32 text-2xl pl-4'>Projects</h1>
          <div className='grid grid-cols-1 gap-10 my-12 px-8 sm:my-28 sm:grid-cols-2 sm:px-4 '>
            <CardProjects />
            <CardProjects />
            <CardProjects />
            <CardProjects />
            <CardProjects />
            <CardProjects />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
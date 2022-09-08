import React, { useContext } from 'react'
import HeroLight from '../assets/hero/HeroLight.png'
import HeroDark from '../assets/hero/HeroDark.png'
import { ThemeContext } from '../context/themeContext';
import Button from './Button'

export default function Hero() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className='max-w-6xl mx-auto h-screen flex'>
      <div className='flex flex-col-reverse justify-center md:flex-row md:justify-between md:items-center px-10' >
        <div className='flex flex-col items-start'>
          <p className='font-Tinos font-normal leading-6 text-xl text-[#1F2626] dark:text-white pb-5'>WEB DEVELOPER</p>
          <h1 
            className='
            hero-title
            text-7xl md:text-5xl lg:text-7xl 
            pb-5 font-extrabold
            bg-[#5222D0] text-[#DBFFFF]
            dark:bg-gradient-to-r dark:from-[#FFAFBD] dark:to-[#ffc3a0] 
            dark:text-[#252728]'
            >
              {theme === "dark" ? "Hello, I'm John Doe" : "Hello, I'm Jane Doe"}
          </h1>
          <p className='text-xl md:text-sm lg:text-xl  text-[#1F2626] dark:text-gray-100 pb-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
          <Button name={'Contact Me'} to={'/contact'}/>
        </div>
        <img 
          alt='Hero' 
          src={theme === 'dark' ? HeroDark : HeroLight} 
          className='hidden md:block w-[60%] lg:w-[50%]'
        />
      </div>
    </div>
  )
}

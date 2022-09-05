import React, { useContext } from 'react'
import HeroLight from '../assets/HeroLight.png'
import HeroDark from '../assets/HeroDark.png'
import { ThemeContext } from '../context/themeContext';
import Button from './Button'

export default function Hero() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className='max-w-6xl mx-auto h-screen flex'>
      <div className='flex justify-between items-center' >
        <div className='flex flex-col items-start '>
          <p className='font-Tinos font-normal leading-6 text-xl text-[#1F2626] dark:text-[#BDEBEA] pb-5'>WEB DEVELOPER</p>
          <h1 
            className='
            hero-title
            text-7xl pb-5 font-extrabold
            bg-[#5222D0] text-[#DBFFFF]
            dark:bg-gradient-to-r dark:from-[#00F5A0] dark:to-[#00D9F5] dark:text-[#252728]'
          >
              John Doe
          </h1>
          <p className='text-[#1F2626] dark:text-[#BDEBEA] pb-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
          <Button name={'Contact Me'} to={'/contact'}/>
        </div>
        <img src={theme === 'dark' ? HeroDark : HeroLight} alt='Hero'/>
      </div>
    </div>
  )
}

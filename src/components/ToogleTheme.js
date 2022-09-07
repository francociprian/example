import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext';
import { BsFillBrightnessHighFill, BsMoonFill } from "react-icons/bs";


function ToogleTheme() {
    const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button 
        className="py-4 px-3 text-xs font-thin text-black dark:text-[#f6f6f6]" 
        onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} 
    >   
      {theme === 'dark' ? <BsFillBrightnessHighFill className='h-5 w-5' /> : <BsMoonFill  className='h-4 w-4'/>}
    </button>
  )
}

export default ToogleTheme
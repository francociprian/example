import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({name, to}) {
  return (
    <Link to={to} 
      className='
        flex justify-center items-center pt-3 pb-3 px-5 rounded-md
        bg-[#5222D0]  
        dark:bg-gradient-to-r dark:from-[#FFAFBD] dark:to-[#ffc3a0] 
        text-[#DBFFFF] dark:text-[#1F2626]
      '
    >
      {name}
    </Link>
  )
}

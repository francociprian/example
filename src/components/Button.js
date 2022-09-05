import React from 'react'

export default function Button({name}) {
  return (
    <button 
        className='flex justify-center items-center pt-3 pb-3 px-5 rounded-md
        bg-[#5222D0] text-[#DBFFFF]
        dark:bg-gradient-to-r dark:from-[#00F5A0] dark:to-[#00D9F5] dark:text-[#252728]'
    >
        {name}
    </button>
  )
}

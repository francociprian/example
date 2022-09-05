import React from 'react';
import { Link } from 'react-router-dom';
import ToogleTheme from './ToogleTheme';
import Button from './Button';

export default function Header() {
  return (
    <div className=' font-Montserrat font-medium leading-5 '>
        <div className='text-textLight dark:text-textDark flex justify-between items-center fixed dark:bg-[#041F31] bg-[#FAFAFA] w-full h-20 pl-40 pr-40' >
            <Link to='/'>Home</Link>
            <nav className='flex justify-end'>
                <ul className='flex items-center gap-16'>
                    <li>
                        <Link  to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Button name={'Contact'} to={'/contact'}/>
                    </li>
                </ul>
                <ToogleTheme/>
            </nav>
        </div>
    </div>
  )
}

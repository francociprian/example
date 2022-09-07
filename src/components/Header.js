import React, { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Button from "./Button";
import ToogleTheme from "./ToogleTheme";

const Header = ({ menuState, setMenuState }) => {
  const location = useLocation()
  useEffect(() => {
    setMenuState(false)
  }, [location, setMenuState])

  return (
    <header className="fixed w-full z-99  876Max:px-8 text-black dark:text-[#f6f6f6] dark:bg-[#041F31] bg-[#FAFAFA] shadow-sLight dark:shadow-sDark">
      <div 
        // className="container"
        className='w-4/5 mx-auto 876Max:w-full'
        >
        <div className="h-20 876Max:h-16 flex items-center justify-between">
          <NavLink
            className={
              (navData) => navData.isActive ? 
              "text-xs ml-0 mr-12 underline underline-offset-4 decoration-1" 
                : 
              'text-xs ml-0 mr-12'}
            to="/"
          >
            HOME
          </NavLink>
          <nav className="w-full text-center flex items-center justify-end 876Max:hidden">
            <NavLink 
              className={
                (navData) => navData.isActive ? 
                "text-xs ml-0 mr-12 underline underline-offset-4 decoration-1" 
                  : 
                'text-xs ml-0 mr-12'}
              to="/projects"
            >
              PROJECTS
            </NavLink>
            <div className="ml-0 mr-6">
                <Button name={'Contact'} to={'/contact'}/>
            </div>
            <ToogleTheme/>
          </nav>
          <div
            onClick={() => setMenuState(!menuState)}
            className="cursor-pointer hidden 876Max:block"
          >
            <span className="h-[2px] w-8 m-1 block bg-bgDark dark:bg-bgLight"></span>
            <span className="h-[2px] w-8 m-1 block bg-bgDark dark:bg-bgLight"></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

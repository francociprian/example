import React from "react";
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import ToogleTheme from "./ToogleTheme";
//icons
import { BiX } from 'react-icons/bi';


const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

const Menu = ({ setMenuState, menuState }) => {
  return (
    <>
      <AnimatePresence>
        {menuState && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ ...transition, duration: 1 }}
            className="fixed h-full w-full z-999 overflow-hidden dark:bg-bgDark bg-bgLight"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ...transition }}
              onClick={() => setMenuState(!menuState)}
              className="z-1000 absolute text-textLight dark:text-textDark top-14 right-8 flex items-center uppercase text-siteVersion tracking-wider cursor-pointer"
            >
              CLOSE <BiX  className='h-6 w-6'/>
            </motion.div>
                <div className="container">
                    <motion.div className="flex items-center justify-center h-[80vh]">
                        <motion.ul className="text-center">
                            <li className=" m-24 text-textLight dark:text-white relative overflow-hidden 480Max:m-16">
                                <motion.span
                                initial={{ y: 300, skewY: 4 }}
                                animate={{
                                    y: 0,
                                    skewY: 0,
                                }}
                                exit={{ y: 300, skewY: 40 }}
                                transition={{ delay: 0, ...transition }}
                                >
                                    <NavLink to="/" className={(navData) => navData.isActive ? "text-7xl 480Max:text-5xl capitalize mx-auto font-light underline underline-offset-4" : "text-7xl 480Max:text-5xl capitalize mx-auto font-light"}>
                                        Home
                                    </NavLink>
                                </motion.span>
                            </li>
                            <li className=" m-24 text-textLight dark:text-white relative overflow-hidden 480Max:m-16">
                                <motion.span
                                initial={{ y: 300, skewY: 40 }}
                                animate={{
                                    y: 0,
                                    skewY: 0,
                                }}
                                exit={{ y: 300, skewY: 40 }}
                                transition={{ delay: 0.1, ...transition }}
                                >
                                    <NavLink to="/projects" className={(navData) => navData.isActive ? "text-7xl 480Max:text-5xl capitalize mx-auto font-light underline underline-offset-4" : "text-7xl 480Max:text-5xl capitalize mx-auto font-light"}>
                                        Projects
                                    </NavLink>
                                </motion.span>
                            </li>
                            <li className=" m-24 text-textLight dark:text-white relative overflow-hidden 480Max:m-16">
                                <motion.span
                                initial={{ y: 300, skewY: 40 }}
                                animate={{
                                    y: 0,
                                    skewY: 0,
                                }}
                                exit={{ y: 300, skewY: 40 }}
                                transition={{ delay: 0.2, ...transition }}
                                >
                                    <NavLink to='/contact' className={(navData) => navData.isActive ? "text-7xl 480Max:text-5xl capitalize mx-auto font-light underline underline-offset-4" : "text-7xl 480Max:text-5xl capitalize mx-auto font-light"}>
                                        Contact
                                    </NavLink>
                                </motion.span>
                            </li>
                        </motion.ul>
                    </motion.div>
                    <div className="flex justify-end mr-8">
                        <ToogleTheme />
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu

import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ComponentNotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'> 
            <div className=' text-center text-5xl'>
              <h1 className=' text-pink-400'>404</h1>
              <p>Sorry, that page cannot be found</p>
            </div>
        </div>
    )
}

export default function NotFound() {
  const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }
  
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
        <ComponentNotFound />
      </motion.div>
    </AnimatePresence>
  )
}
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const FormContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // const [loader, setLoader] = useState(true)
  
  const handleSubmit = (e) => {
      e.preventDefault();
      // setLoader(true);
      setName('')
      setEmail('')
      setMessage('')
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <form 
          onSubmit={()=>handleSubmit}
          className="max-w-xl w-full flex flex-col mx-4"
          style={{transition: 'all 4s ease-in-out'}}
          method="post" 
          action="">
          <label htmlFor='name' className='mt-5 pb-2 font-light font-Montserrat text-[14px] leading-4 dark:text-white text-textLight'>Name</label>
          <input 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            className="
              w-full bg-bgLight dark:bg-bgDark 
              dark:text-white text-textLight 
              text-sm rounded-md p-2
              border border-[#534084] dark:border-gray-200
              outline-2 outline-purple-800 dark:outline-[#FFAFBD]
              focus:ring-2 focus:ring-purple-800 focus:dark:ring-1 focus:dark:ring-[#FFAFBD]
              "  
            placeholder="Your Name" 
            required 
          />
          <label htmlFor='email' className='mt-5 pb-2 font-light font-Montserrat text-[14px] leading-4 dark:text-white text-textLight'>Email</label>
          <input 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}   
            type="email" 
            className="
              w-full bg-bgLight dark:bg-bgDark 
              dark:text-white text-textLight 
              text-sm rounded-md p-2
              border border-[#534084] dark:border-gray-200
              outline-2 outline-purple-800 dark:outline-[#FFAFBD]
              focus:ring-2 focus:ring-purple-800 focus:dark:ring-[#FFAFBD]
              "  
            placeholder="Your Email" 
            required 
          />
          <label htmlFor='message' className='mt-5 pb-2 font-light font-Montserrat text-[14px] leading-4 dark:text-white text-textLight'>Message</label>
          <textarea 
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full bg-bgLight dark:bg-bgDark 
              dark:text-white text-textLight 
              text-sm rounded-md p-2 
              border border-[#534084] 
              dark:border-gray-200 
              outline-2 outline-purple-800 dark:outline-[#FFAFBD]
              focus:ring-2 focus:ring-purple-800 focus:dark:ring-[#FFAFBD]
              "
            placeholder="Your message goes here!" 
            rows="4" 
            required>
          </textarea>
          <input 
            type="submit" 
            value="SEND MESSAGE"
            className='self-center flex justify-center items-center mt-5 pt-3 pb-3 px-10 rounded-md
            font-Montserrat font-semibold text-sm
            bg-[#5222D0] text-[#DBFFFF] dark:text-[#252728]
            dark:bg-gradient-to-r dark:from-[#FFAFBD] dark:to-[#ffc3a0] '
            />
      </form>
    </div>
  )
}

export default function Contact() {
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
        <FormContact/>
      </motion.div>
    </AnimatePresence>
  )
}
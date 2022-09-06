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
          <label htmlFor='name' className='mt-5 pb-2 font-light font-Montserrat text-[14px] leading-4 dark:text-textDark text-textLight'>Name</label>
          <input 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            className="
              w-full bg-bgLight dark:bg-bgDark 
              dark:text-textDark text-textLight 
              rounded-md p-2
              border border-[#534084] dark:border-textDark
              outline-2 outline-purple-800 dark:outline-[#00F5A0]
              focus:ring-2 focus:ring-purple-800 focus:dark:ring-1 focus:dark:ring-[#00F5A0]
              "  
            placeholder="Your Name" 
            required 
          />
          <label htmlFor='email' className='mt-5 pb-2 font-light font-Montserrat text-[14px] leading-4 dark:text-textDark text-textLight'>Email</label>
          <input 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}   
            type="email" 
            className="
              w-full bg-bgLight dark:bg-bgDark 
              dark:text-textDark text-textLight 
              rounded-md p-2
              border border-[#534084] dark:border-textDark
              outline-2 outline-purple-800 dark:outline-[#00F5A0]
              focus:ring-2 focus:ring-purple-800 focus:dark:ring-[#00F5A0]
              "  
            placeholder="Your Email" 
            required 
          />
          <label htmlFor='message' className='mt-5 pb-2 font-light font-Montserrat text-[14px] leading-4 dark:text-textDark text-textLight'>Message</label>
          <textarea 
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full bg-bgLight dark:bg-bgDark 
              dark:text-textDark text-textLight 
              rounded-md p-2 
              border border-[#534084] 
              dark:border-textDark 
              outline-2 outline-purple-800 dark:outline-[#00F5A0]
              focus:ring-2 focus:ring-purple-800 focus:dark:ring-[#00F5A0]
              "  
              // style={{ borderWidth: '2px', borderStyle: 'solid', borderImage: 'linear-gradient(to right , #00F5A0, #00D9F5) 1' }}
            placeholder="Your message goes here!" 
            rows="4" 
            required>
          </textarea>
          <input 
            type="submit" 
            value="SEND MESSAGE"
            className='self-center flex justify-center items-center mt-5 pt-3 pb-3 px-5 rounded-md
            font-Montserrat font-normal text-sm
            bg-[#5222D0] text-[#DBFFFF] dark:text-[#252728]
            dark:bg-gradient-to-r dark:from-[#00F5A0] dark:to-[#00D9F5]'
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
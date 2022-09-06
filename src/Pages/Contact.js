import React, { useState } from 'react'

export default function Contact() {
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
          className="flex flex-col justify-center items-center  "
          style={{transition: 'all 4s ease-in-out'}}
          method="post" 
          action="">
          <input 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            className="w-96"  
            placeholder="Your Name" 
            required />
          <input 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}   
            type="email" 
            className="" 
            placeholder="Your Email" 
            required />
          <textarea 
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="" 
            placeholder="Your message goes here!" 
            rows="4" 
            required>
          </textarea>
          <input 
            type="submit" 
            value="SEND MESSAGE"
            className='flex justify-center items-center pt-3 pb-3 px-5 rounded-md
            bg-[#5222D0] text-[#DBFFFF]
            
            '
            />
      </form>
    </div>
  )
}

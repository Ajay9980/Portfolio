import {motion} from 'framer-motion'
import js from '../assets/javascript.png' 
import ts from '../assets/typescript.png'
import python from '../assets/python.png'
import sql from '../assets/sql.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.svg'
import nextjs from '../assets/Next.js2.png'
import nodejs from '../assets/Node.js.png'
import tailwind from '../assets/Tailwind CSS.png'
import bootstrap from '../assets/Bootstrap.png'
import gsap2 from '../assets/gsap.png'
import framermotion from '../assets/motion.png'
import express from '../assets/express2.png'
import api from '../assets/API2.png'
import prisma from '../assets/PRISMA.png'
import websocket from '../assets/WebSocket2.png'
import mongodb from '../assets/mongodb3.png'
import postgre from '../assets/postgresql.png'
import git from '../assets/git2.png'
import github from '../assets/github2.png'
import vercel from '../assets/vercel2.png'
import render from '../assets/render2.png'
import postman from '../assets/postman.png'
import team from '../assets/team2.png'
import solving from '../assets/solving.png'
import communication from '../assets/communication.png'
import time from '../assets/time.png'
 


 


function Skill(){


 




    return (
        <div id="skill" className='overflow-hidden'>

            <section   className="px-6 md:px-20 py-16 mt-30 text-white font-sans">
  <motion.h2 
  initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
  className=" font-sans mb-10 text-purple-400 text-center text-[15vw]  md:text-[5vw]">Skills</motion.h2>

  <div className=" md:grid md:grid-cols-2   text-neutral-300 text-lg font-sans">

    
    {/* Languages */}
    <motion.div 
    initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
    className='left1 flex flex-col justify-center items-center mt-10  '>
  <h3 className="md:text-[4vw] text-[7vw]  text-purple-300 ">Languages</h3>

  <ul className="flex text-md flex-wrap justify-center gap-8 mt-4 ">
    <li className="flex flex-col items-center">
      <img src={js} alt="JavaScript" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">JavaScript</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={ts} alt="TypeScript" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">TypeScript</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={python} alt="Python" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Python</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={sql} alt="SQL" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">SQL</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={html} alt="HTML" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">HTML</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={css} alt="CSS" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">CSS</span>
    </li>
  </ul>
</motion.div>


    {/* Frontend */}
   <motion.div 
   initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
   className='right1 flex flex-col justify-center items-center mt-10'>
  <h3 className="md:text-[4vw] text-[7vw]  text-purple-300 mb-4">Frontend</h3>

  <ul className="flex flex-wrap  justify-center gap-8 mt-4">
    <li className="flex flex-col items-center">
      <img src={react} alt="React.js" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">React.js</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={nextjs} alt="Next.js" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Next.js</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={tailwind} alt="Tailwind CSS" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Tailwind CSS</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={bootstrap} alt="Bootstrap" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Bootstrap</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={gsap2} alt="GSAP" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">GSAP</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={framermotion} alt="FramerMotion" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">FramerMotion</span>
    </li>
  </ul>
</motion.div>

 


    
    {/* Backend */}
   <motion.div 
   
   initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
   className='left2 flex flex-col justify-center items-center mt-30'>
  <h3 className="md:text-[4vw]  text-[7vw]  text-purple-300 mb-4">Backend & APIs</h3>

  <ul className="flex flex-wrap justify-center gap-8">
    <li className="flex flex-col items-center">
      <img src={nodejs} alt="Node.js" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Node.js</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={express} alt="Express.js" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Express.js</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={api} alt="REST APIs" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">REST APIs</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={prisma} alt="Prisma ORM" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Prisma ORM</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={websocket} alt="WebSocket" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">WebSocket</span>
    </li>
  </ul>
</motion.div>


    {/* Database */}
   <motion.div 
   initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
   className='right2 flex flex-col justify-center items-center mt-30'>
  <h3 className="md:text-[4vw] text-[7vw]  text-purple-300 mb-4">Databases</h3>

  <ul className="flex flex-wrap justify-center gap-8 mt-4">
    <li className="flex flex-col items-center">
      <img src={mongodb} alt="MongoDB" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">MongoDB</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={postgre} alt="PostgreSQL" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">PostgreSQL</span>
    </li>
  </ul>
</motion.div>


 
    {/* Tools */}
   <motion.div 
   initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
   className='left3 flex flex-col justify-center items-center mt-30'>
  <h3 className="md:text-[4vw] text-[7vw]  text-purple-300 mb-4">Tools & Platforms</h3>

  <ul className="flex flex-wrap justify-center gap-8">
    <li className="flex flex-col items-center">
      <img src={git} alt="Git" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Git</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={github} alt="GitHub" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">GitHub</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={postman} alt="Postman" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Postman</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={vercel} alt="Vercel" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Vercel</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={render} alt="Render" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Render</span>
    </li>
  </ul>
</motion.div>


    {/* Soft Skills */}
    <motion.div
    initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
    className='right3 flex flex-col justify-center items-center mt-30'>
  <h3 className="md:text-[4vw] text-[7vw]  text-purple-300 mb-4">Soft Skills</h3>

  <ul className="flex flex-wrap justify-center gap-8">
    <li className="flex flex-col items-center">
      <img src={team} alt="Team" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Team Collaboration</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={solving} alt="Solving" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Problem Solving</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={communication} alt="Communication" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Communication</span>
    </li>
    <li className="flex flex-col items-center">
      <img src={time} alt="Time Management" className='w-12 h-12' />
      <span className="text-white mt-2 text-center">Time Management</span>
    </li>
  </ul>
</motion.div>

  </div>
</section>


        </div>
    )
}

export default Skill
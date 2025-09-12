import devhire from '../assets/devhire.png'
import royalweave from '../assets/royalweave.png'
import airmath from '../assets/AirMath.png'
import craftmycv from '../assets/craftmycv.png'
import { motion } from 'framer-motion'



function Project() {




    return (
        <div id='project' className='font-sans mt-30 overflow-hidden '>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className='text-[15vw] md:text-[5vw]  text-purple-300 text-center'>Project</motion.h1>
            <div className='md:flex items-start gap-4 mt-15'>
                {/* DevHire */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='card md:w-1/2 p-4 border border-neutral-500 m-4 mt-25 md:mx-2 rounded-xl shadow-xl/30 shadow-yellow-700   hover:bg-gray-500/30 '>
                    <img src={devhire} alt='devhire' className='rounded-md border border-neutral-500' />
                    <h1 className='text-[10vw] md:text-[3vw] underline'>DevHire</h1>
                    <div className='flex flex-wrap text-sm md:text-xl gap-2 my-3'>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>ReactJS</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>NodeJS</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>ExpressJS</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>PostgreSQL</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>TailwindCSS</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Gemini API</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Razorpay</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Multer & Cloudinary</button>
                    </div>
                    <h2 className='text-lg md:text-3xl text-neutral-500'>A full-stack platform to connect developers and clients. Includes real-time bidding, payment workflows, and AI-enhanced proposals.</h2>

                    <div className='flex gap-2 mb-5'>
                        <a href="https://github.com/Ajay9980/DevHire" className='bg-white text-black py-2 px-3 rounded-full mt-5 text-lg md:text-2xl   ' ><i className="ri-github-fill">GitHub</i></a>

                        <a href="https://lnkd.in/diZCrGxJ" className='bg-white text-black py-2 px-3 rounded-full mt-5 text-lg md:text-2xl' ><i className="ri-eye-fill">View</i></a>


                    </div>
                </motion.div>

                {/* DevHire */}


                {/* CraftMyCV */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='card md:w-1/2 p-5 border border-neutral-500 md:mx-2 m-4 mt-25 rounded-xl shadow-xl/30 shadow-yellow-700 hover:bg-gray-500/30'>
                    <img src={craftmycv} alt='CraftMyCV' className='rounded-md border border-neutral-500' />
                    <h1 className='text-[10vw] md:text-[3vw] underline'>CraftMyCV</h1>

                    <div className='flex flex-wrap text-sm md:text-xl gap-2 my-3'>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>React</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Node.js</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Multer & Cloudinary</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Razorpay</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>TypeScript</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Prisma</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>PostgreSQL</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>TailwindCSS</button>
                    </div>

                    <h2 className='text-xl md:text-3xl text-neutral-500'>
                        CraftMyCV is a full-stack web application that allows users to create professional resumes and cover letters effortlessly. It features modern templates, secure authentication, PDF export, and payment integration for premium features.
                    </h2>

                    <div className='mt-5 mb-5 flex gap-3'>
                        <a href="https://github.com/Ajay9980/CraftMyCV" className='bg-white text-black py-2 px-3 rounded-full text-lg md:text-2xl'>
                            <i className="ri-github-fill">GitHub</i>
                        </a>
                        <a href="https://craft-my-cv-omega.vercel.app" className='bg-white text-black py-2 px-3 rounded-full text-lg md:text-2xl'>
                            <i className="ri-link-line">Live Demo</i>
                        </a>
                    </div>
                </motion.div>
                {/* CraftMyCV */}


                {/* RoyalWeave    */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='card md:w-1/2 p-4 border border-neutral-500 md:mx-2 m-4 mt-25 rounded-xl shadow-xl/30 shadow-yellow-700   hover:bg-gray-500/30 '>
                    <img src={royalweave} alt='devhire' className='rounded-md border border-neutral-500' />
                    <h1 className='text-[15vw] md:text-[3vw] underline'>Royal Weave</h1>
                    <div className='flex text-sm md:text-xl flex-wrap gap-2 my-3'>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>ReactJS</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>NodeJS</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>ExpressJS</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>MongoDB</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>TailwindCSS</button>
                    </div>
                    <h2 className='text-lg md:text-3xl text-neutral-500'>Developed a watch e-commerce platform with admin dashboard, user authentication, product management. Features clean UI with responsive design using TailwindCSS.</h2>

                    <div className='mt-5 mb-5'>
                        <a href="https://github.com/Ajay9980/RoyalWeave-Ecommerce" className='bg-white text-black py-2 px-3 rounded-full text-lg  md:text-2xl' ><i className="ri-github-fill">GitHub</i></a>
                    </div>


                </motion.div>

                {/* RoyalWeave    */}

                {/* AirMath */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='card md:w-1/2 p-5 border border-neutral-500 md:mx-2 m-4 mt-25 rounded-xl shadow-xl/30 shadow-yellow-700  hover:bg-gray-500/30'>
                    <img src={airmath} alt='devhire' className='rounded-md border border-neutral-500' />
                    <h1 className='text-[10vw] md:text-[3vw] underline'>AirMath </h1>
                    <div className='flex flex-wrap text-sm md:text-xl gap-2 my-3'>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Python</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>OpenCV</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>Gemini API</button>
                        <button className='bg-purple-500 py-2 px-3 rounded-full'>MongoDB</button>

                    </div>
                    <h2 className='text-xl md:text-3xl text-neutral-500'>AirMath is an AI-powered web app that lets users solve math problems using real-time hand gestures. It captures air-drawn equations using gesture recognition and solves them instantly with AI integration.</h2>

                    <div className='mt-5 mb-5'>
                        <a href="https://github.com/Ajay9980/mathSolutionUsingGestureAi" className='bg-white text-black py-2 px-3 rounded-full mt-5 text-lg md:text-2xl' ><i className="ri-github-fill">GitHub</i></a>
                    </div>


                </motion.div>

                {/* AirMath */}





            </div>

        </div>
    )
}

export default Project
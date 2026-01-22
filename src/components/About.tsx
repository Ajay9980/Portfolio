import gsap from 'gsap' 
import { useGSAP } from '@gsap/react'
import dev from '../assets/dev.webp'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About(){

    useGSAP(()=>{

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : '.img',
                scroller : 'body',
                markers : false,
                end : 'top 80%',
                scrub : 2
                 
            }
        })
        tl.from('.img',{
            x : -500,
            opacity : 0,
            duration : 0.5,
            delay : 0.3,
             
            
        }, 'about')
        tl.from('.desc',{
            x : 500,
            opacity : 0,
            duration : 0.6,
            delay : 0.3,

        }, 'about')
    },[])



    return (
        <div id='about'  className='mt-30 overflow-hidden'>
            <h1   className="text-[15vw] md:text-[5vw] text-center text-purple-300 font-sans ml-5">About Me</h1>
        <div className=' items-center md:flex '>
            <div className='img md:w-1/2 '>
                <img src={dev} alt="img" className='md:ml-50 '   />
            </div>
            {/* <section className="desc  ml-3  px-4 py-8 md:w-1/2">
                <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed">
                    I’m <span className="font-bold text-white">Ajay Chavan</span>, a passionate Full Stack Developer with hands-on experience building modern web applications using the <span className="text-purple-300 font-semibold">MERN stack </span>and <span className="text-purple-300">PostgreSQL</span> I specialize in crafting responsive, interactive user interfaces with <span className="text-purple-300">React</span> and <span className="text-purple-300">Tailwind CSS</span>, enhanced by animation libraries like <span className="text-purple-300">GSAP</span> and <span className="text-purple-300">Framer Motion</span>.
                </p>

                <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed mt-4">
                    My recent projects include a freelance marketplace featuring real-time bidding, <span className="text-purple-300">Gemini AI</span>-based proposal rewriting, and Razorpay-powered payment workflows. Through my internship at <span className="text-purple-300">Octanet Pvt. Ltd.</span>, I’ve gained practical experience in API integration, teamwork, and delivering production-ready features. Whether it’s building scalable backends with <span className="text-purple-300">Node.js</span> and <span className="text-purple-300">Prisma</span> or designing intuitive front-end experiences, I’m always focused on creating smart, impactful solutions.
                </p>
                </section> */}

                <section className="desc ml-3 px-4 py-8 md:w-1/2">
  <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed">
    I’m <span className="font-bold text-white">Ajay Chavan</span>, a Full Stack Developer with hands-on industry experience building scalable, production-ready web applications. I work extensively with modern frontend and backend technologies including <span className="text-purple-300 font-semibold">React</span>, <span className="text-purple-300">Vue.js</span>, <span className="text-purple-300">TypeScript</span>, <span className="text-purple-300">Node.js</span>, and <span className="text-purple-300">PostgreSQL</span>. I enjoy crafting responsive, intuitive user interfaces using <span className="text-purple-300">Tailwind CSS</span> and <span className="text-purple-300">Vuetify</span>, enhanced with smooth animations using <span className="text-purple-300">Framer Motion</span>.
  </p>

  <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed mt-4">
    Currently, I’m working as a <span className="text-purple-300 font-semibold">Software Development Intern at YCanary</span>, where I develop production-ready SaaS features using <span className="text-purple-300">Vue.js</span>, <span className="text-purple-300">TypeScript</span>, and <span className="text-purple-300">Pinia</span>. My work involves building reusable components, implementing global search and notification systems, and collaborating closely with backend teams in an Agile environment. Previously, during my internship at <span className="text-purple-300">Octanet Pvt. Ltd.</span>, I gained practical experience in API integration and real-world frontend–backend workflows. Whether it’s designing scalable backends with <span className="text-purple-300">Prisma</span> or delivering polished frontend experiences, I focus on building clean, efficient, and impactful solutions.
  </p>
</section>


        </div>
        </div>
    )
}

export default About
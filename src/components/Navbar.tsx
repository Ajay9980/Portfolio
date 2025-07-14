import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
 

 

function Navbar(){
    
    const [menu , setMenu] = useState(false)

    
useGSAP(()=>{

    const tl = gsap.timeline()

    tl.from('.logo',{
        y : -30,
        opacity :  0,
        duration : 0.5,
        delay : 0.5,
        ease : 'elastic.out(1,0.3)'
    })

    tl.from('.navs',{
        x : 1000,
         opacity : 0,
        duration : 0.3,
        stagger : 0.3,
        ease : 'power2.inOut'
    },'-=0.3')
},[])



useGSAP(()=>{

    const tl = gsap.timeline()

    tl.from('.menu',{
        x : 1000,
        opacity : 0,
        duration : 0.2,
        delay : 0.5
    })

    tl.from('.item',{

        x : 1000,
        opacity : 0,
        duration : 0.3,
        delay : 0.3,
        stagger : 0.2,
        ease : 'power2.inOut'
    },'-=0.4')



},[menu])





    return  <div className="relative z-50  backdrop-blur-md bg-black/30 sticky top-0">
        <div className="mx-6   flex justify-between items-center">
        <div>
            <h1 className="logo text-3xl font-bold   md:text-[4vw] font-todo bg-gradient-to-r from-purple-800 to-purple-300 text-transparent bg-clip-text ">AJAY</h1>
        </div>
        <div>
            <i className="ri-menu-3-line text-xl text-neutral-400 md:hidden" onClick={()=>setMenu(!menu)}></i>
        </div>
        <div className=" hidden md:flex  font-sans gap-5 text-[2vw] text-neutral-400">

            <h1 className="navs"><a href="#hero">Home</a> </h1>
            <h1 className="navs"><a href="#about">About</a></h1>
            <h1 className="navs"><a href="#skill">Skill</a> </h1>
            <h1 className="navs"><a href="#project">Project</a></h1>
            <h1 className="navs"><a href="#contact">Contact</a></h1>
           
        </div>

        { menu && <div className="menu w-full  bg-gradient-to-br from-black to-purple-900  absolute top-0 right-0 " > 
            <div className="absolute right-7 top-7 ">
            <i className="ri-close-circle-line text-neutral-200 text-3xl" onClick={()=>setMenu(!menu)}></i>
            </div>

        <div className=" md:hidden mb-5 font-sans gap-5 text-[10vw] flex flex-col items-center mt-20 underline  text-neutral-200">

            <h1 className="item"><a href="#hero">Home</a></h1>
            <h1 className="item"><a href="#about">About</a></h1>
            <h1 className="item"><a href="#skill">Skill</a></h1>
            <h1 className="item"><a href="#project">Project</a></h1>
            <h1 className="item"><a href="#contact">Contact</a></h1>

        </div> 
        </div> }
    </div>
    </div>
}

export default Navbar
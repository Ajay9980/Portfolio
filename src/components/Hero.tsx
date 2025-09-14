import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
 

gsap.registerPlugin(SplitText) 
function Hero(){

  useGSAP(()=>{

    const split = SplitText.create('.split',{type : 'words , chars'})
    const tl = gsap.timeline()

    tl.from(split.chars,{
      duration : 1 ,
      delay : 1,
      y : 100, 
      autoAlpha : 0,
      stagger : 0.05,
      ease : 'elastic.inOut(1,0.3)',
      
    })

    tl.from('.bio',{

      y : 50,
      opacity : 0,
      duration : 0.5,
      delay : 0.5
    },'-=0.3')



  },[])

  return (
    <div id="hero" className="h-screen  ">
      <div className="mt-60 ">
 
        <h1   className="split font-roboto text-center mt-10 text-[7vw] md:text-[6vw] font-bold">          
            Hello, I'm <span className="text-purple-400">Ajay Chavan</span>
        </h1>
        <h1 className="bio text-center text-lg mx-2 md:text-[2vw]  text-neutral-500">Full Stack MERN Developer ·   AI Enthusiast · UI/UX Focused  </h1>
      </div>
    </div>
  )
}

export default Hero
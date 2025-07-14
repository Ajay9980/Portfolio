import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import resume from '../assets/Resume2.pdf'
import ScrollTrigger from "gsap/dist/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

function Contact(){



    useGSAP(()=>{

        const tl = gsap.timeline({
              scrollTrigger : {
                trigger : '.form',
                scroller : 'body',
                markers : false,
                start : 'top 90%',
                end : 'top 70%',
                scrub : true
               
            }
        })

        tl.from('.form',{
            y : 50,
            opacity : 0,
            duration : 0.5,
            delay : 0.4,
            scale : 0
        },'contact')
        tl.from('.info',{
            y : 50,
            opacity : 0,
            duration : 0.5,
            delay : 0.4,
            scale : 0
        },'contact')



    },[])

    return (
        <div id="contact"  className="mt-30 overflow-hidden ">
            <h1  className=" text-purple-400 text-center text-[15vw] md:text-[5vw]">Contact</h1>

            <div className="flex flex-col md:flex-row gap-20 mb-10 md:items-start mt-15">

            <form action="https://api.web3forms.com/submit" method="POST" className="form flex flex-col bg-black   md:w-1/2 items-center mx-2 md:mx-10 rounded-xl shadow-xl shadow-red-400">

             <input type="hidden" name="access_key" value="34272431-0ac5-41ed-bfb2-0b505960605c"></input>

            <div className="flex flex-col  items-center md:flex-row gap-5 mt-10">
            <input type="text" name="name" placeholder="Jhon"  className="bg-white text-black  px-4 py-2 rounded-xl"/> 
            <input type="text" name="surname" placeholder="Doe" className="bg-white text-black  px-4 py-2 rounded-xl" /> 
            </div>


            <input type="email" name="email" placeholder="John@gmail.com" className="bg-white text-black mt-10 px-4 py-2  md:w-[28vw] rounded-xl " />

            <textarea name="messagge" id="" placeholder="Your Message..." className="bg-white text-black mt-10  px-4 py-2 w-[28vw] rounded-xl w-[68%] " rows={5} ></textarea>
            
       
            <button type="submit" className="bg-gradient-to-r from-purple-900 to-purple-600 rounded-full w-1/2 my-10  text-white p-4 mx-auto md:text-2xl"><i className="ri-send-plane-fill mr-4"></i>Send Message</button>
              
            
            </form>

            {/* or contact */}

            <div className="info mx-5">
                <h1 className="text-3xl md:text-[3vw] mb-4 text-purple-400">Contact Information</h1>
                <p className="text-lg md:text-3xl">Fill up the form and send me your message or contact through below details</p>

                <h1 className="mt-5 text-lg md:text-2xl"><span className="text-purple-400 text-lg md:text-3xl">Email:</span>   ajaychavan.dev@gmail.com</h1>
                <h1 className="mt-5 text-lg  md:text-2xl"><span className="text-purple-400 text-lg md:text-3xl">Phone:</span>+917498177115</h1>

                <div>

                    <a href="https://www.linkedin.com/in/ajay-chavan-b86638301/"><i className="ri-linkedin-box-fill text-[12vw] md:text-[3vw] "></i></a>

                    <a href="https://github.com/Ajay9980"><i className="ri-github-fill text-[12vw] md:text-[3vw]"></i></a>

                    <a href="https://x.com/Ajay_a95313943"><i className="ri-twitter-x-fill text-[12vw] md:text-[3vw]"></i></a>

                    <a href="https://www.instagram.com/ajaychavan9910?igsh=Mm9ydHhqcWx2NGds"><i className="ri-instagram-line text-[12vw] md:text-[3vw] "></i></a>

                    


                </div>

                <a
            href={resume}
            download
            className="px-6 py-2 bg-purple-700 text-white mt-5 text-2xl rounded-full hover:bg-purple-800 transition"
            ><i className="ri-download-line"></i>
            Resume
            </a>
            </div>

            </div>

            {/* or contact */}
        </div>
    )
}

export default Contact
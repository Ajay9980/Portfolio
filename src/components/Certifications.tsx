import { motion } from "framer-motion";

const certifications = [
  {
    title: "Full-Stack Web Development MERN Stack",
    issuer: "PrepInsta",
    date: "22 June 2024",
    link: "https://drive.google.com/file/d/1E_P9rYyztKO_GI6yzrBQqE6ivlaBzAF8/view?usp=drive_link",    
  },
  {
    title: "React Essential Training",
    issuer: "LinkedIn Learning",
    date: "30 Sept 2025",
    link: "https://drive.google.com/file/d/1Xo704jSRgBKlKvWsLw3zOfXz0Cuy5nYa/view?usp=sharing",    
  },
  {
    title: "LeetCode 50 Days Badge",
    issuer: "LeetCode",
    link: "https://drive.google.com/file/d/1q0FzuKvfKgm39RhTpcN3klWpu1Xz3eY0/view?usp=drive_link",    
  },
];


const Certifications = () => {
    return (
        <section id="certifications" className=" ">
            <div className="container mx-auto px-4">
                <motion.h1 
                initial = {{opacity : 0 , y : 30}}
                whileInView={{opacity : 1 , y : 0}}
                transition={{duration : 0.8 , ease : 'easeOut'}}
                viewport={{once : true,  amount : 0.3}}
                
                className="text-[15vw] md:text-[5vw] text-center text-purple-300 font-sans ml-5">Certifications & Achievements </motion.h1>
                {certifications.map((cert, index) => (
                    <motion.div 
                    initial = {{opacity : 0 , y : 30}}
                    whileInView={{opacity : 1 , y : 0}}
                    transition={{duration : 0.8 , ease : 'easeOut'}}
                    viewport={{once : true,  amount : 0.3}}
                    key={index} className="mb-10 mt-20">
                        <h3 className="text-lg md:text-2xl   font-sans    ">{cert.title}</h3>
                        <p className="font-sans   text-lg md:text-2xl mb-2">
                            {cert.issuer} | {cert.date}
                        </p>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-900 border bg-white rounded-full p-2 hover:text-gray-1200">
                            View Certificate
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
export default Certifications;
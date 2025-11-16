import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Web Development Intern",
    company: "Octanet Pvt. Ltd. (Remote)",
    duration: "Apr 2025 – Sept 2025",
    responsibilities: [
  "Built responsive web apps with React.js, Tailwind CSS, and JavaScript.",
  "Integrated REST APIs and optimized database queries (PostgreSQL/MongoDB).",
  "Implemented real-time features and improved performance by 25%.",
  "Managed CI/CD pipelines; deployed on Vercel, Railway, and AWS EC2.",
  "Contributed to UI/UX improvements and collaborated in Agile sprints.",
  "Performed testing and debugging with Postman and Jest.",
]

  },
  {
    role: "Frontend Developer Intern",
    company: "Ycanary",
    duration: "Oct 2025 – Present",
    responsibilities: [
   "Developing and integrating dynamic frontend pages using Vue.js & TypeScript",
   "Collaborating closely with backend engineers to connect APIs and ensure seamless data flow.",
   "Implementing smooth UI/UX interactions and custom animation logic.",
   "Contributing to feature development, optimizing performance, and maintaining code quality in Agile sprints."
]
  }
];

const Experience = () => {
  return (
    <section id="experience" className=" ">
      <div className="container mx-auto px-4">
        <motion.h1 
        initial = {{opacity : 0 , y : 30}}
        whileInView={{opacity : 1 , y : 0}}
        transition={{duration : 0.8 , ease : 'easeOut'}}
        viewport={{once : true,  amount : 0.3}}
        
        className="text-[15vw] md:text-[5vw] text-center text-purple-300 font-sans ml-5">Experience</motion.h1>
        {experiences.map((exp, index) => (
          <motion.div 
          initial = {{opacity : 0 , y : 30}}
        whileInView={{opacity : 1 , y : 0}}
        transition={{duration : 0.8 , ease : 'easeOut'}}
        viewport={{once : true,  amount : 0.3}}
          key={index} className="mb-10 mt-20">
            <h3 className="text-lg md:text-2xl text-purple-300 font-sans    ">{exp.role}</h3>
            <p className="text-purple-300 font-sans   text-lg md:text-2xl mb-2">
              {exp.company} | {exp.duration}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-5 text-left text-lg md:text-2xl text-white">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

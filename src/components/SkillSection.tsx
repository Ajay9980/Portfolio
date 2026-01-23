import { motion } from "framer-motion"

import { SkillItem } from "./SkillItem"

export const SkillSection = ({ title , skills } : any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex flex-col items-center"
  >
    <h3 className="md:text-[4vw] text-[7vw] text-purple-300 mb-6 text-center">
      {title}
    </h3>

    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
      {skills.map((skill : any, index : any) => (
        <SkillItem key={index} icon={skill.icon} name={skill.name} />
      ))}
    </ul>
  </motion.div>
)
import { skillSections } from "../Utlis/skillsItem"
import { motion } from "framer-motion"
 
import { SkillSection } from "./SkillSection"
function Skill() {
  return (
    <section
      id="skill"
      className="px-6 md:px-20 py-20 text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-purple-400 text-center font-sans mb-20 text-[15vw] md:text-[5vw]"
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-y-24 gap-x-16">
        {skillSections.map((section, index) => (
          <SkillSection
            key={index}
            title={section.title}
            skills={section.skills}
          />
        ))}
      </div>
    </section>
  )
}

export default Skill

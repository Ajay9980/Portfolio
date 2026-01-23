export const SkillItem = ({ icon, name } : any) => (
  <li className="flex flex-col items-center justify-center w-24 h-24">
    <img
      src={icon}
      alt={name}
      className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
    />
    <span className="text-white mt-2 text-sm text-center">
      {name}
    </span>
  </li>
)
 
import Image from "next/image"
import htmlIcon from "../../public/html5.svg"
import cssIcon from "../../public/css3.svg"
import jsIcon from "../../public/javascript.svg"
import reactIcon from "../../public/react.svg"
import gitIcon from "../../public/git.svg"
import tailwindIcon from "../../public/tailwindcss.svg"
import figmaIcon from "../../public/figma.svg"
import inkscapeIcon from "../../public/inkscape.svg"

const Skills = () => {
  return (
    <section className="py-14 md:py-24" id="skills">
      <div className="mx-auto w-10/12 flex flex-col justify-center max-w-6xl">
        <h2 className="mb-8">SKILLS</h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-5">
          <Image width={96} src={htmlIcon} title="HTML5" alt="HTML5" />
          <Image width={96} src={cssIcon} title="CSS3" alt="CSS3" />
          <Image width={96} src={jsIcon} title="JavaScript" alt="JavaScript" />
          <Image width={96} src={reactIcon} title="React" alt="React" />
          <Image width={96} src={gitIcon} title="Git" alt="Git" />
          <Image width={96} src={tailwindIcon} title="Tailwind CSS" alt="Tailwind CSS" />
          <Image width={96} src={figmaIcon} title="Figma" alt="Figma" />
          <Image width={96} src={inkscapeIcon} title="Inkscape" alt="Inkscape" />
        </div>
      </div>
    </section>
  )
}

export default Skills
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
    <section className="py-24">
      <div className="mx-auto w-10/12 flex flex-col justify-center max-w-6xl">
        <h2 className="mb-8">SKILLS</h2>
        <div className="flex gap-12 flex-wrap">
          <Image width={96} src={htmlIcon}/>
          <Image width={96} src={cssIcon}/>
          <Image width={96} src={jsIcon}/>
          <Image width={96} src={reactIcon}/>
          <Image width={96} src={gitIcon}/>
          <Image width={96} src={tailwindIcon}/>
          <Image width={96} src={figmaIcon}/>
          <Image width={96} src={inkscapeIcon}/>
        </div>
      </div>
    </section>
  )
}

export default Skills
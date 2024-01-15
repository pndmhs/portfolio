import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({ subsets: ['latin'] })

const About = () => {
  return (
    <section className="bg-[#1a1a1a]">
      <div className="2xl:container mx-auto lg:w-10/12 sm:w-11/12 flex flex-col justify-center h-[calc(100vh-5rem)] ">
        <h2>Hey, I'm 
          <br />
          <div className={`text-8xl my-5 text-[#1A9CFF] ${dmSans.className} font-medium`}>Pandu Mahesa</div>
        </h2>
        <p>I am a web developer with a passion for creating engaging and user-friendly websites. I have a good understanding of front end development, including HTML, CSS, JavaScript, and React. I am a quick learner and I enjoy learning new technologies and frameworks that can enhance my web development skills. I am always seeking opportunities to expand my knowledge and improve my skills, as well as to collaborate with other developers and clients on exciting projects.
        </p>
      </div>
    </section>
  )
}

export default About
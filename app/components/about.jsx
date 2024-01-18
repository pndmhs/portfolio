import { Plus_Jakarta_Sans } from "next/font/google"

const plusJkt = Plus_Jakarta_Sans({ subsets: ['latin'] })

const About = () => {
  return (
    <section className="bg-[#1a1a1a]">
      <div className="mx-auto w-10/12 flex flex-col justify-center h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] max-w-6xl">
        <h2>Hey, I'm 
          <br />
          <div className={`md:text-8xl text-7xl my-9 text-[#1A9CFF] ${plusJkt.className} font-semibold`}>Pandu Mahesa</div>
        </h2>
        <p>I am a web developer with a passion for creating engaging and user-friendly websites. I have a good understanding of front end development, including HTML, CSS, JavaScript, and React. I am a quick learner and I am always seeking opportunities to expand my knowledge and improve my skills, as well as to collaborate with other developers and clients on exciting projects.
        </p>
      </div>
    </section>
  )
}

export default About
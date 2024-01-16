import About from "./components/about"
import Projects from "./components/projects"
import Skills from "./components/skills"

const Home = () => {
  return (
    <main className="bg-black">
      <About />
      <Skills />
      <hr className="mx-auto lg:w-10/12 sm:w-11/12 max-w-6xl opacity-40" />
      <Projects />
    </main>
  )
}

export default Home
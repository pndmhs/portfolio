import About from "./components/about"
import Contacts from "./components/contacts"
import Projects from "./components/projects"
import Skills from "./components/skills"

const Home = () => {
  return (
    <main className="bg-black">
      <About />
      <Skills />
      <hr className="mx-auto w-10/12 max-w-6xl border-gray-600" />
      <Projects />
      <hr className="mx-auto w-10/12 max-w-6xl border-gray-600" />
      <Contacts />
    </main>
  )
}

export default Home
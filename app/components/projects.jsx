import { FaGithub } from "react-icons/fa6"
import { RiLinkM } from "react-icons/ri"
import simpleShop from "../../public/screenshot/simple-shop.jpg"
import todoApp from "../../public/screenshot/todo-app.jpg"
import battleship from "../../public/screenshot/battleship.jpg"
import socmedDash from "../../public/screenshot/social-media-dashboard.jpg"
import Image from "next/image"

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Simple Shop',
      repoURL: 'https://github.com/pndmhs/shopping-cart',
      demoURL: 'https://shopping-cart-vert-chi.vercel.app/',
      techStack: ['React', 'Vite', 'CSS Modules'],
      desc: 'A simple e-commerce website. You can search product, filter products by categories, and add product to cart/shopping bag. Products data fetched from FakeStore API',
      screenShot: simpleShop
    },
    {
      title: 'To-Do App',
      repoURL: 'https://github.com/pndmhs/to-do-app',
      demoURL: 'https://pndmhs.github.io/to-do-app/',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
      desc: 'A task management website inspired by Todoist. Built with HTML, CSS, and Vanilla JS',
      screenShot: todoApp
    },
    {
      title: 'Battleship',
      repoURL: 'https://github.com/pndmhs/battleship',
      demoURL: 'https://pndmhs.github.io/battleship/',
      techStack: ['HTML', 'JavaScript', 'Tailwind', 'Jest', 'Webpack'],
      desc: 'A website version of the Battleship board game. This project was built using Test-Driven Development (TDD) with Jest',
      screenShot: battleship
    },
    {
      title: 'Social Media Dashboard',
      repoURL: 'https://github.com/pndmhs/social-media-dashboard-with-theme-switcher',
      demoURL: 'https://pndmhs.github.io/social-media-dashboard-with-theme-switcher/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Social media dasboard with theme switcher. This is a design slicing project from Frontend Mentor',
      screenShot: socmedDash
    },
  ]

  return (
    <section className="py-14 md:py-24" id="projects">
      <div className="mx-auto w-10/12 max-w-6xl" >
        <h2 className="mb-11">FEATURED PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-12">
          {featuredProjects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="w-full h-auto bg-gray-600 mb-3">
                <Image src={project.screenShot} alt={project.title} />
              </div>
              <div className="flex gap-1 items-center text-2xl">
                <h3 className="mr-auto">{project.title}</h3>
                <a
                  className="hover:bg-gray-800 p-1.5 rounded-full"
                  href={project.repoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repository"
                >
                  <FaGithub />
                </a>
                <a
                  className="hover:bg-gray-800 p-1.5 rounded-full"
                  href={project.demoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <RiLinkM />
                </a>
              </div>
              <p className="text-[#C4C4C4]">{project.desc}</p>
              <div className="flex flex-wrap gap-2 text-[#1A9CFF]">
                {project.techStack.map((tools, index) => (
                  <div key={index} className="flex gap-2">
                    <p>{tools}</p>
                    {index !== project.techStack.length - 1 && <span>-</span> }
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
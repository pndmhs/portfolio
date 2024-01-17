import { HiMenu } from "react-icons/hi"

const Navbar = () => {
  return (
    <nav className="bg-[#1a1a1a] sticky top-0">
      <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row min-h-16 md:h-20 justify-center text-[#F0F0F0] max-w-6xl">
        <h1 className="flex justify-center md:mr-auto font-medium py-5 md:py-0 px-[calc(100%/12)] md:px-0">
          <a href="#" className="mr-auto md:mr-0">PM.</a>
          <button className="md:hidden text-2xl">
            <HiMenu />
          </button>
        </h1>
        <div className="hidden md:flex flex-col md:flex-row md:gap-7 md:items-center text-gray-300 font-normal">
          <a className="py-4 md:py-0 px-[calc(100%/12)] md:px-0 hover:text-white active:bg-gray-700 md:active:bg-inherit" href="#">About</a>
          <a className="py-4 md:py-0 px-[calc(100%/12)] md:px-0 hover:text-white active:bg-gray-700 md:active:bg-inherit" href="#skills">Skills</a>
          <a className="py-4 md:py-0 px-[calc(100%/12)] md:px-0 hover:text-white active:bg-gray-700 md:active:bg-inherit" href="#projects">Projects</a>
          <a className="py-4 md:py-0 px-[calc(100%/12)] md:px-0 hover:text-white active:bg-gray-700 md:active:bg-inherit" href="#contacts">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
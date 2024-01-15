const Navbar = () => {
  return (
    <nav className="bg-[#1a1a1a] sticky top-0">
      <div className="lg:w-10/12 sm:w-11/12 mx-auto flex gap-7 h-20 items-center text-[#F0F0F0] max-w-6xl">
        <h1 className="mr-auto font-medium">PM.</h1>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
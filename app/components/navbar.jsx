const Navbar = () => {
  return (
    <nav className="bg-[#1a1a1a] sticky top-0">
      <div className="w-10/12 mx-auto flex h-16 md:h-20 items-center text-[#F0F0F0] max-w-6xl">
        <h1 className="mr-auto font-medium">PM.</h1>
        <div className="hidden md:flex gap-7 items-center">
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
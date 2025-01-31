function Home2() {
    return (
        <div className="container flex flex-col items-center justify-center overflow-x-hidden ">
            <nav className="bg-red-500 w-full h-10 container"></nav>
            <div className="home  h-full sm:h-screen  p-2 ">
                <div className="hero text-4xl text-center mt-20 sm:text-6xl sm:text-left font-semibold sm:leading-[70px] mb-7">
                Hi, I'm <span className="text-[#6246EA]">Aneesh</span>
                <br />
                I'm a MERN Stack Developer
                
                </div>
                <div className=" hero_info_description text-xs text-[#C0C0C0] px-2 border-l-2 border-[#6246EA] mb-7 ml-3">
                On this blog I share tips and tricks, frameworks, projects,
                tutorials, etc. Make sure you subscribe to get the latest updates.
                          </div>
                          <div className="hero_info_email container bg-white p-1 rounded-md flex items-center justify-between">
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email here..."
                  className=" bg-transparent p-2  outline-none  mr-2 text-[#6246EA]  placeholder:text-[#6246EA] "
                />
                <button className=" p-2  bg-[#6246EA] text-white rounded-md">
                  Subscribe
                </button>
                          </div>
            </div>
        </div>
    )
}

export default Home2

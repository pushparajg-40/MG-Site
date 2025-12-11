function Blogs() {
  return (
    <>
      <section id="Blogs" className="bg-[#000000] pb-[100px]">
        <div className="px-10 md:p-4 lg:px-20 pt-8 sm:pt-12 lg:pt-16">
          {/* <!-- Heading --> */}
          <div className="flex gap-2 items-start">
            <h2 className="text-2xl md:text-4xl text-[#828282] mb-4 leading-tight">
              Blog &amp; News
            </h2>
          </div>
          <h1 className="text-2xl md:text-4xl text-[#055CC0] mb-4 leading-tight  md:px-0 font-extrabold  text-radiant">
            Latest News and Expert Advice
          </h1>
          <p className="text-md text-[#FFFFFF] font-normal mb-4 leading-[26px]">
            Stay ahead in the digital era with our expert insights on&nbsp;AI
            innovation, automation, and business transformation&nbsp;for every
            industry
          </p>
        </div>

        {/* <!-- Content Grid --> */}
        <div className="grid grid-cols-1  ">
          <div className="flex flex-col gap-4 px-10 px-[30px] lg:px-[80px] lg:pr-[120px]">
            <div
              id="blog-container"
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              <div className="flex flex-col  shadow hover:shadow-lg transition overflow-hidden">
                <img
                  src="assets/Blogs1.png"
                  alt="Harnessing AI: Transforming Tech Companies for the Future"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-sm text-[#7E7E7E]">July 21, 2025</span>
                  <h3 className="text-lg font-semibold text-white hover:underline cursor-pointer">
                    Harnessing AI: Transforming Tech Companies for the Future
                  </h3>
                  <p className="text-white text-sm">
                    Discover how AI is reshaping the tech landscape by boosting
                    efficiency, enabling smarter decision-making, and fostering
                    innovation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col  shadow hover:shadow-lg transition overflow-hidden">
                <img
                  src="assets/Blogs2.png"
                  alt="AI Unleashed: Shaping the Next Generation of Tech Companies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-sm text-[#7E7E7E]">July 22, 2025</span>
                  <h3 className="text-lg font-semibold text-white hover:underline cursor-pointer">
                    AI Unleashed: Shaping the Next Generation of Tech Companies
                  </h3>
                  <p className="text-white text-sm">
                    Explore how artificial intelligence is revolutionizing
                    product development and operational agility across tech
                    companies.
                  </p>
                </div>
              </div>

              <div
                className="relative  flex-col shadow hover:shadow-lg transition overflow-hidden 
              col-span-1 md:col-span-2 hidden md:flex"
              >
                <img
                  src="assets/updated/blogImage.png"
                  alt="How AI Tech Companies&nbsp;Are Reshaping the&nbsp;Future: Trends, Tools, and Industry&nbsp;Impact"
                  className="w-full h-48 md:h-[400px] object-cover"
                />

                {/* <!-- Text block (kept fully white) --> */}
                <div className="absolute inset-0 p-4 flex flex-col justify-center lg:justify-end z-10 pr-[130px]">
                  <span className="text-sm text-white">July 23, 2025</span>
                  <h3 className="text-lg font-semibold text-white hover:underline cursor-pointer">
                    How AI Tech Companies&nbsp;Are Reshaping the&nbsp;Future:
                    Trends, Tools, and Industry&nbsp;Impact
                  </h3>
                  <p className="text-[#D2D2D2] text-sm mt-1">
                    In just a few years, artificial intelligence (AI) has gone
                    from an experimental technology to a core driver of
                    innovation in business and society.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- View All Button --> */}
          <div className="flex justify-center mt-6">
            <a href="Blogs.html">
              <button className="px-4 py-2  text-black bg-white border flex items-center gap-2  transition">
                View All
                <img
                  src="assets/updated/crossArrow.svg"
                  alt="Arrow"
                  className="ml-2 w-3 h-3"
                />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;

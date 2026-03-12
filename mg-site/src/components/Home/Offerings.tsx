function Offerings() {
  return (
    <>
      {" "}
      <section
        className="bg-black pt-[100px] pb-[50px] transition-all duration-500 ease-in"
        id="offerings-section"
      >
        <div className="px-10 md:px-[50px] lg:px-[120px] sm:py-12 lg:py-16 pb-0 2xl-plus:max-w-9xl 2xl-plus:mx-auto">
          {/* Heading */}
          <div className="flex gap-2 items-start  duration-700 ease-out">
            <h2 className="text-3xl md:text-4xl text-[#828282] mb-4 leading-tight">
              Offerings
            </h2>
            <img
              src="/assets/updated/line.svg"
              className="pt-3"
              alt="Decorative Line"
            />
          </div>

          <h1 className="text-4xl text-gradient mb-4 leading-tight md:px-0 font-extrabold  ">
            Our Solutions by Function
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-10 md:px-[50px] lg:px-[120px] 2xl-plus:max-w-9xl 2xl-plus:mx-auto ">
          {/* Card 1 */}
          <div className="relative bg-white  transition-all duration-700 ease-in hover:scale-105 ">
            <div className="absolute inset-0 flex items-start justify-start">
              <div className="text-black z-10 p-2 md:p-4">
                <h2 className="text-lg lg:text-xl font-bold mb-2">
                  Data
                  <br /> Innovation
                </h2>
                <p className="text-xs lg:text-sm font-normal md:pr-8">
                  Unlock competitive advantage through advanced AI analytics and
                  data modeling.
                </p>
              </div>
            </div>
            {/* Image handling for light/dark mode */}
            <img
              src="/assets/updated/DataInnovation.png"
              alt="Data Innovation"
              className="h-full w-full object-cover "
            />
          </div>

          {/* Card 2 */}
          <div className="relative bg-white  transition-all duration-700 ease-in hover:scale-105 ">
            <div className="absolute inset-0 flex items-start justify-start">
              <div className="text-black z-10 p-2 md:p-4">
                <h2 className="text-lg lg:text-xl font-bold mb-2">
                  AI & Cybersecurity <br></br>Products Gateway to APAC
                </h2>
                <p className="text-xs lg:text-sm font-normal md:pr-8">
                  Localized AI products marketing, and regulatory support for
                  APAC expansion.
                </p>
              </div>
            </div>
            <img
              src="/assets/updated/Apac.png"
              alt="APAC"
              className="h-full w-full object-cover "
            />
          </div>

          {/* Card 3 */}
          <div className="relative bg-white  transition-all duration-700 ease-in hover:scale-105">
            <div className="absolute inset-0 flex items-start justify-start">
              <div className="text-black z-10 p-2 md:p-4">
                <h2 className="text-lg lg:text-xl font-bold mb-2">
                  AI Global Capability<br></br> Centers (GCCs)
                </h2>
                <p className="text-xs lg:text-sm font-normal md:pr-8">
                  Talent, governance, and operational AI for enterprise
                  scalability.
                </p>
              </div>
            </div>
            <img
              src="/assets/updated/Gccs.png"
              alt="GCCs"
              className="h-full w-full object-cover "
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Offerings;

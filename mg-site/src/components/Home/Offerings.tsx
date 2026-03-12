function Offerings() {
  return (
    <>
      <section
        className="bg-white dark:bg-black pt-[100px] pb-[50px] transition-all duration-500 ease-in"
        id="offerings-section"
      >
        <div className="px-10 md:px-[50px] lg:px-[120px] sm:py-12 lg:py-16 pb-0 2xl-plus:max-w-9xl 2xl-plus:mx-auto">
          {/* Heading */}
          <div className="flex gap-2 items-start duration-700 ease-out">
            <h2 className="text-3xl md:text-4xl text-[#1783F7] dark:text-[#828282] mb-4 leading-tight">
              Offerings
            </h2>
            <img
              src="/assets/updated/line.svg"
              className="pt-3"
              alt="Decorative Line"
            />
          </div>

          <h1
            className="text-4xl mb-4 leading-tight md:px-0 font-extrabold
          bg-clip-text text-transparent text-radiant text-gradient"
          >
            Our Solutions by Function
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-10 md:px-[50px] lg:px-[120px] 2xl-plus:max-w-9xl 2xl-plus:mx-auto">
          {/* Card 1 */}
          <div
            className="relative bg-white
          transition-all duration-700 ease-in hover:scale-105
          shadow-md dark:shadow-none
          border border-[#1783F7]/15 dark:border-transparent
          rounded-lg dark:rounded-none
          overflow-hidden"
          >
            <div className="absolute inset-0 flex items-start justify-start">
              <div className="text-black z-10 p-2 md:p-4">
                <h2
                  className="text-lg lg:text-xl font-bold mb-2
              text-[#1F3F68] dark:text-black"
                >
                  Data
                  <br /> Innovation
                </h2>
                <p
                  className="text-xs lg:text-sm font-normal md:pr-8
              text-[#667085] dark:text-black"
                >
                  Unlock competitive advantage through advanced AI analytics and
                  data modeling.
                </p>
              </div>
            </div>
            <img
              src="/assets/updated/DataInnovation.png"
              alt="Data Innovation"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-white
          transition-all duration-700 ease-in hover:scale-105
          shadow-md dark:shadow-none
          border border-[#1783F7]/15 dark:border-transparent
          rounded-lg dark:rounded-none
          overflow-hidden"
          >
            <div className="absolute inset-0 flex items-start justify-start">
              <div className="text-black z-10 p-2 md:p-4">
                <h2
                  className="text-lg lg:text-xl font-bold mb-2
              text-[#1F3F68] dark:text-black"
                >
                  AI & Cybersecurity <br /> Products Gateway to APAC
                </h2>
                <p
                  className="text-xs lg:text-sm font-normal md:pr-8
              text-[#667085] dark:text-black"
                >
                  Localized AI products marketing, and regulatory support for
                  APAC expansion.
                </p>
              </div>
            </div>
            <img
              src="/assets/updated/Apac.png"
              alt="APAC"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Card 3 */}
          <div
            className="relative bg-white
          transition-all duration-700 ease-in hover:scale-105
          shadow-md dark:shadow-none
          border border-[#1783F7]/15 dark:border-transparent
          rounded-lg dark:rounded-none
          overflow-hidden"
          >
            <div className="absolute inset-0 flex items-start justify-start">
              <div className="text-black z-10 p-2 md:p-4">
                <h2
                  className="text-lg lg:text-xl font-bold mb-2
              text-[#1F3F68] dark:text-black"
                >
                  AI Global Capability
                  <br /> Centers (GCCs)
                </h2>
                <p
                  className="text-xs lg:text-sm font-normal md:pr-8
              text-[#667085] dark:text-black"
                >
                  Talent, governance, and operational AI for enterprise
                  scalability.
                </p>
              </div>
            </div>
            <img
              src="/assets/updated/Gccs.png"
              alt="GCCs"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Offerings;

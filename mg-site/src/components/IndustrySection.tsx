import { useEffect, useRef } from "react";

export default function IndustrySection({
  title,
  image,
  overview,
  solutions,
  impacts,
  caseStudyTitle,
  caseStudyLink,
  caseStudyImage,
  bgColor,
}: any) {
  // const [animatedElements, setAnimatedElements] = useState({});
  const sectionRef = useRef<any | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add("active");
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      sectionRef.current
        .querySelectorAll(".fade-in, .slide-left, .slide-right, .slide-up")
        .forEach((el: any) => {
          observer.observe(el);
        });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${bgColor} py-8 sm:py-12 lg:py-16 transition-all duration-500 ease-in`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Image */}
        <div className="mb-10">
          <div
            className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-md fade-in"
            data-delay="0"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent flex items-center pl-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#687DA9]">
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-800 dark:text-white">
          {/* Overview */}
          <div className="slide-left" data-delay="100">
            <h3 className="text-3xl text-[#1783F7] dark:text-white mb-2">
              Overview
            </h3>
            <p className="text-lg">{overview}</p>
          </div>

          {/* Key Solutions */}
          <div
            data-delay="200"
            className="slide-up border-t md:border-t-0 md:border-l md:border-r border-gray-300 dark:border-[#6B6B6B] px-0 md:px-6 md:pl-[30px] pt-[20px] md:pt-0"
          >
            <h3 className="text-3xl text-[#1783F7] dark:text-white mb-2">
              Key Solutions
            </h3>
            <ul className="space-y-2 text-[#666666] dark:text-white">
              {solutions.map((solution: any, idx: any) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>
                    <img
                      src="assets/arrow.svg"
                      data-light="assets/arrow.svg"
                      data-dark="assets/updated/crossArrowWhite.svg"
                      className="theme-image"
                    />
                  </span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Impact */}
          <div
            data-delay="300"
            className="slide-right border-t md:border-t-0 pt-[20px] md:pt-0 border-gray-300 dark:border-[#6B6B6B] px-0 md:px-6"
          >
            <h3 className="text-3xl text-[#1783F7] dark:text-white mb-2">
              Business Impact
            </h3>
            <ul className="space-y-2 text-[#666666] dark:text-white">
              {impacts.map((impact: any, idx: any) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>
                    <img
                      src="assets/arrow.svg"
                      data-light="assets/arrow.svg"
                      data-dark="assets/updated/crossArrowWhite.svg"
                      className="theme-image"
                    />
                  </span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Case Study Section */}
        <div
          className="pt-10 flex flex-col md:flex-row gap-6 slide-up"
          data-delay="400"
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-black font-medium text-[35px] dark:text-white md:pr-[100px]">
              {caseStudyTitle}
            </h2>
            <a href={caseStudyLink}>
              <button className="mt-6 w-[240px] text-white dark:text-black font-semibold py-3 px-8 rounded-full flex items-center bg-[linear-gradient(141deg,rgba(139,139,139,1)_0%,rgba(23,131,247,1)_100%)] hover:bg-[linear-gradient(141deg,#787878_0%,#0653A7_100%)] dark:bg-white dark:bg-gradient-to-r dark:from-white dark:to-gray-100 dark:hover:from-gray-200 dark:hover:to-gray-400">
                View our Casestudy
                <img
                  src="assets/getInArrow.svg"
                  data-light="assets/getInArrow.svg"
                  data-dark="assets/updated/crossArrow.svg"
                  alt="Arrow"
                  className="ml-2 h-3 theme-image"
                />
              </button>
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={caseStudyImage}
              alt={caseStudyTitle}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

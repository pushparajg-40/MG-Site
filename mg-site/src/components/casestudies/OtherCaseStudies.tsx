import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../../../public/assets/arrow-right-icon.svg?react"
import HealthCareIcon from "../../../public/assets/health-care-icon.svg?react"
import AviationTransportIcon from "../../../public/assets/aviation-transport-icon.svg?react"
import FinancialBankingIcon from "../../../public/assets/financial-banking-icon.svg?react"
import TelecomIcon from "../../../public/assets/telecom-icon.svg?react"
import ManufacturingIcon from "../../../public/assets/manufacturing-icon.svg?react"
import EnergyUtilitiesIcon from "../../../public/assets/energy-utilities-icon.svg?react"



const CASE_STUDIES = [
  {
    id: 1,
    title: "Health Care",
    description:
      "Unified Patient Profile Platform for Smarter Clinical Decisions.",
    link: "/Healthcare",
    icon: HealthCareIcon
  },
  {
    id: 2,
    title: "Aviation & Transports",
    description: "End-to-End Airport Data Platform & AI Forecasting Engine.",
    link: "/Aviation_Transports",
    icon: AviationTransportIcon
  },
  {
    id: 3,
    title: "BFSI (Banking & Financial Services)",
    description: "AI-Driven Loan Origination & Collection Optimization",
    link: "/BFSI",
    icon: FinancialBankingIcon
  },
  {
    id: 4,
    title: "Telecom",
    description: "Enhance telecom networks with smart monitoring & automation.",
    link: "/telecom",
    icon: TelecomIcon
  },
  {
    id: 5,
    title: "Manufacturing",
    description:
      "AI-Driven Jewelry Design Innovation – GenAI DesignSmith Platform.",
    link: "/Manufacturing",
    icon: ManufacturingIcon
  },
  {
    id: 6,
    title: "Energy & Utilities",
    description:
      "AI-Driven ESG Platform for Sustainable Infrastructure Projects.",
    link: "/Energy_Utilities",
    icon: EnergyUtilitiesIcon
  },
];

export default function OtherCaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef<any | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < CASE_STUDIES.length - visibleCount;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1);
      scrollToSlide(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1);
      scrollToSlide(currentIndex + 1);
    }
  };

  const scrollToSlide = (index: any) => {
    if (sliderRef.current) {
      const slideWidth =
        window.innerWidth < 768 ? sliderRef.current.offsetWidth : 404.93 + 16;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="scroll-animate relative bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in py-8">
      <div className=" md:pr-16 lg:pr-32 mt-1 md:mt-8 lg:pt-[40px]">
        <div className="flex justify-between space-x-4 pt-[30px] lg:pt-0 mb-8">
          <div className="md:pl-16 lg:pl-32">
            <p className="text-2xl text-[#1783F7] dark:text-white">
              Other Case Studies
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`rounded-full w-8 h-8 flex items-center justify-center transition-all ${
                !canGoPrev ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <img
                src="/assets/arrowL.svg"
                data-light="/assets/arrowL.svg"
                data-dark="/assets/updated/rightWhiteArrow.svg"
                className="theme-image"
                alt="Previous"
              />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`rounded-full w-8 h-8 flex items-center justify-center transition-all ${
                !canGoNext ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <img
                src="/assets/arrowR.svg"
                data-light="/assets/arrowR.svg"
                data-dark="/assets/updated/leftWhiteArrow.svg"
                className="theme-image"
                alt="Next"
              />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-hidden snap-x md:ml-[20px] lg:ml-[60px] py-[60px] px-[20px] md:px-5 gap-2"
          >
            {CASE_STUDIES.map((study) => {
              const Icon = study?.icon;

              return(
              <Link to={study.link}>
                <div
                  key={study.id}
                  className="group snap-center flex-shrink-0 w-full 
                  md:w-[300px] lg:w-[350.93px] h-[250px] md:h-[300.1px] 
                  relative p-4 md:p-0 border border-[#BFBFBF] 
                  border-opacity-100 dark:border-white dark:border-opacity-40 
                  rounded-2xl hover:scale-105  transform transition-all duration-700 ease-out"
                >
                  <div className="h-full w-full rounded-2xl overflow-hidden p-2 md:p-4 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Icon className="w-6 h-6 md:w-9 md:h-9" />
                      <ArrowRightIcon className="w-4 h-4 md:w-7 md:h-7" />
                    </div>
                    <div className="text-white z-10">
                      <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#687DA9] dark:text-white">
                        {study.title}
                      </h2>
                      <p className="text-sm md:text-lg font-normal leading-snug text-[#667085] dark:text-white">
                        {study.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}

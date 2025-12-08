import { useState, useRef, useEffect } from "react";

interface IndustrySlide {
  id: number;
  name: string;
  title: string;
  image: string;
  hiddenOnMobile?: boolean;
}

const industries: IndustrySlide[] = [
  {
    id: 1,
    name: "Energy & Utilities",
    title:
      "Use intelligent systems to improve energy efficiency, reduce consumption, and advance sustainability goals.",
    image: "/assets/updated/energyIndustry.png",
  },
  {
    id: 2,
    name: "Telecom",
    title:
      "Enhance telecom networks with smart monitoring, automation, and secure communication.",
    image: "/assets/updated/telecomIndustryUpdated.png",
  },
  {
    id: 3,
    name: "Aviation",
    title:
      "Transform aviation operations with predictive maintenance, safety intelligence, and streamlined airport workflows.",
    image: "/assets/updated/aviataionIndustry.png",
  },
  {
    id: 4,
    name: "Transportation",
    title:
      "Enable smarter logistics with optimized routing, proactive maintenance, and real-time tracking.",
    image: "/assets/updated/transportationIndustryUpdated.png",
  },
  {
    id: 5,
    name: "Banking, Financial Services & Insurance (BFSI)",
    title:
      "Empower financial institutions with advanced fraud prevention, deeper credit insights, and personalized customer engagement.",
    image: "/assets/updated/naturaIndustry.png",
  },
  {
    id: 6,
    name: "HealthCare",
    title:
      "Elevate healthcare delivery through improved patient care, seamless workflows, and robust compliance.",
    image: "/assets/updated/healthIndustry.png",
    hiddenOnMobile: true,
  },
  {
    id: 7,
    name: "Manufacturing",
    title:
      "Strengthen manufacturing with intelligent production systems, advanced analytics, and supply chain optimization.",
    image: "/assets/updated/IndustryUpdated.png",
    hiddenOnMobile: true,
  },
];

export default function IndustryFocusSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const centerSlide = (index: number) => {
    if (!sliderRef.current) return;

    const slides =
      sliderRef.current.querySelectorAll<HTMLElement>(".snap-center");
    if (slides.length === 0) return;

    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    const slide = slides[clamped];

    if (slide) {
      const containerRect = sliderRef.current.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();

      const slideCenter = slideRect.left + slideRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      const offset = slideCenter - containerCenter;

      sliderRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  const detectCenteredSlide = () => {
    if (!sliderRef.current) return 0;

    const slides =
      sliderRef.current.querySelectorAll<HTMLElement>(".snap-center");
    if (slides.length === 0) return 0;

    const containerRect = sliderRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDist = Infinity;

    slides.forEach((slide, idx) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const dist = Math.abs(slideCenter - containerCenter);

      if (dist < minDist) {
        minDist = dist;
        closestIndex = idx;
      }
    });

    return closestIndex;
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setTimeout(() => centerSlide(index), 0);
  };

  const prevSlide = () =>
    goToSlide((currentIndex - 1 + industries.length) % industries.length);

  const nextSlide = () => goToSlide((currentIndex + 1) % industries.length);

  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % industries.length;
      setCurrentIndex(next);
    }, 5000);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const idx = detectCenteredSlide();
        if (idx !== currentIndexRef.current) {
          setCurrentIndex(idx);
        }
        startAutoSlide();
      }, 150);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    slider.addEventListener("mouseenter", () =>
      clearInterval(autoSlideRef.current!)
    );
    slider.addEventListener("mouseleave", startAutoSlide);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      slider.removeEventListener("mouseenter", () =>
        clearInterval(autoSlideRef.current!)
      );
      slider.removeEventListener("mouseleave", startAutoSlide);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    centerSlide(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    centerSlide(0);
    startAutoSlide();

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, []);

  return (
    <>
      <section className="bg-[#191919] pt-12 pb-4">
        <style>
          {`  .active-card {
      box-shadow: 0px 0px 40px rgba(255, 255, 255, 0.2);
      transition: box-shadow 0.5s ease;
    }

    .card-fill {
      position: relative;
      height: 45px;
      background-color: #1a1a1a;
      overflow: hidden;
      z-index: 0;
      color: black;
      font-weight: bold;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      line-height: normal;
    }

    .card-fill::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      background-color: #ffffff;
      z-index: 0;
      animation: card-progress 6s ease-out infinite;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
    }

    .card-fill span {
      position: relative;
      z-index: 1;
      transition: color 0.3s ease;
      display: inline-block;
      width: 100%;
    }

    .card-fill.active span {
      color: #000;
    }

    @keyframes card-progress {
      0% {
        width: 0%;
      }

      100% {
        width: 100%;
      }
    }`}
        </style>
        <div className="flex flex-col items-start justify-center px-4 sm:px-6 md:px-12 lg:px-[120px]">
          <div className="flex gap-2 items-start">
            <h2 className="text-2xl md:text-4xl text-[#828282] mb-4 leading-tight">
              Industry Focus
            </h2>
            <img src="/assets/updated/line.svg" className="pt-3" alt="line" />
          </div>
          <h1
            className="text-3xl md:text-4xl  mb-4 leading-tight font-extrabold text-gradient"
            
          >
            Transforming Industries with Intelligent & Scalable Solutions
          </h1>
          <p className="text-sm md:text-base text-[#FFFFFF] font-normal mb-8 leading-[26px] max-w-4xl">
            Mindgraph empowers sector-specific transformation with AI-driven,
            data-centric, and cloud-enabled solutions. Our deep domain expertise
            and tailored platforms help enterprises across industries accelerate
            innovation, streamline operations, and improve
            decision-making—securely and at scale.
          </p>
        </div>

        <section id="slider" className="relative">
          {/* Tabs */}
          <div className="flex flex-wrap text-white gap-1 md:gap-2 mb-8 px-4 sm:px-6 md:px-12 lg:px-[120px] overflow-x-auto pb-2">
            {industries.map((industry, idx) => (
              <button
                key={industry.id}
                className={`flex-shrink-0 border px-3 md:px-4 py-2 text-xs md:text-sm cursor-pointer transition-opacity duration-300 whitespace-nowrap ${
                  industry.hiddenOnMobile ? "hidden md:block" : "block"
                } ${
                  idx === currentIndex
                    ? "opacity-100 border-white card-fill active "
                    : "opacity-50 border-gray-600"
                }`}
                onClick={() => {
                  goToSlide(idx);
                  if (autoSlideRef.current) clearInterval(autoSlideRef.current);
                }}
              >
                <span>{industry.name}</span>
              </button>
            ))}

            <a href="#industries">
              <button className="flex-shrink-0 flex text-black py-2 px-3 md:px-6 items-center bg-white hover:bg-gray-100 transition-colors text-xs md:text-sm whitespace-nowrap">
                See All
                <img
                  src="assets/updated/crossArrow.svg"
                  alt="Arrow"
                  className="ml-2 w-3 h-3"
                />
              </button>
            </a>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth px-4 sm:px-6 md:px-12 lg:px-[120px] gap-4 md:gap-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {industries.map((industry, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={industry.id}
                    className={`snap-center flex-shrink-0 transition-all duration-500 ${
                      isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
                    } w-full md:w-96 lg:w-screen lg:max-w-5xl h-80 md:h-96 lg:h-[550px]`}
                  >
                    <div className="relative w-full h-full overflow-hidden ">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                      <div className="absolute inset-0 flex flex-col justify-start p-4 md:p-8 lg:p-12 text-white">
                        <p className="text-lg md:text-2xl lg:text-4xl font-extrabold leading-snug md:leading-normal lg:leading-relaxed lg:pr-[150px]">
                          {industry.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  prevSlide();
                  if (autoSlideRef.current) clearInterval(autoSlideRef.current);
                }}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Previous slide"
              >
                <img
                  src="assets/updated/rightWhiteArrow.svg"
                  className="w-4 md:w-5"
                  alt="Previous"
                />
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  if (autoSlideRef.current) clearInterval(autoSlideRef.current);
                }}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full  hover:bg-gray-700 transition-colors"
                aria-label="Next slide"
              >
                <img
                  src="assets/updated/leftWhiteArrow.svg"
                  className="w-4 md:w-5"
                  alt="Next"
                />
              </button>
            </div>

            {/* Dots */}
          </div>
        </section>

        <style>{`
        .snap-center {
          scroll-snap-align: center;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </section>
    </>
  );
}

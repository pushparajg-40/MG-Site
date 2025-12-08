import { useEffect } from "react";
import { Link } from "react-router-dom";

interface OfferCards {
  title: string;
  number: string;
  pageLink: string;
  desc: string;
  bgImage: string;
}

interface whatWeOfferParams {
  title: string;
  subtitle: string;
  desc: string;
  cards: OfferCards[];
}

function WhatWeOfferSection({ title, subtitle, desc, cards }: whatWeOfferParams) {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.getAttribute("data-delay")) || 0;

            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, delay);

            observerInstance.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll("#offer-section [data-delay]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); 
  }, []);

  return (
    <>
      <section id="offer-section" className="bg-[#000000] pt-[100px]">
        <div className="flex flex-col items-start justify-center px-10 md:px-[50px] lg:px-[120px] space-y-6">
          <div
            data-delay="100"
            className="flex gap-2 md:items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <h2 className="text-4xl text-[#828282] mb-4 leading-tight">
              {title}
            </h2>
            <img src="/assets/updated/line.svg" className="pt-0 md:pt-3" />
          </div>

          <h1
            data-delay="200"
            className="text-4xl text-[#055CC0] mb-4 leading-tight md:px-0 font-extrabold text-radiant opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            {subtitle}
          </h1>

          <p
            data-delay="300"
            className="text-md text-[#FFFFFF] font-normal mb-4 leading-[26px] opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            {desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-10 md:px-[50px] lg:px-[130px] gap-6 mt-12">
          {cards.map((card, idx) => (
            <Link to={card.pageLink} key={idx}>
              <div
                data-delay={400 + idx * 150}   
                className="text-white w-[264px] md:w-[300px] opacity-0 translate-y-10 transition-all duration-700 ease-out"
              >
                <div className="relative h-[300px] border p-6 overflow-hidden flex flex-col justify-between">
                  <div className={`${idx==3?'right-[-32px] bottom-[-61px]':'right-[-17px] bottom-[-17px]'} absolute  h-full flex items-end justify-end pointer-events-none`}>
                    <img
                      src={card.bgImage}
                      className="w-[180px] object-contain"
                    />
                  </div>

                  <p className="text-2xl mt-4 pr-16 font-semibold relative z-10">
                    {card.title}
                  </p>
                  <p className="text-4xl font-bold mt-20 relative z-10">
                    {card.number}
                  </p>
                </div>

                <p className="text-lg mt-6 leading-relaxed relative z-10 px-4">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .opacity-100 { opacity: 1; }
        .translate-y-0 { transform: translateY(0); }
      `}</style>
    </>
  );
}

export default WhatWeOfferSection;

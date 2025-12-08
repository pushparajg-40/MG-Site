import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface SolutionsCard {
  pageLink: string;
  id: string;
  productName: string;
}

const cards: SolutionsCard[] = [
  {
    pageLink: "mathops",
    id: "MathOps",
    productName: "MATHOPS",
  },
  {
    pageLink: "smartSustain",
    id: "smartSustain",
    productName: "SmartSustain.AI",
  },
  {
    pageLink: "opsbeat",
    id: "OpsBeat",
    productName: "OpsBeat",
  },
  {
    pageLink: "customerDlens",
    id: "CustomerDlens",
    productName: "CustomerDlens",
  },
  {
    pageLink: "optiSaas",
    id: "SaaSBeamAI",
    productName: "OptiSaas.AI",
  },
  {
    pageLink: "customerDlens",
    id: "Patient360",
    productName: "Patient360.AI",
  },
  {
    pageLink: "#",
    id: "ResponsibleAI",
    productName: "Responsible AI",
  },
];

function Solutions() {
  useEffect(() => {
    // ---- SCROLL ANIMATION OBSERVER ----
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.getAttribute("data-delay")) || 0;

            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll(
      "#solutions-section [data-delay]"
    );

    animatedElements.forEach((el) => observer1.observe(el));

    // ---- IMAGE + TEXT CHANGE LOGIC ----
    const solutionImage = document.getElementById(
      "solution-image"
    ) as HTMLImageElement;
    const solutionText = document.getElementById("solution-text");

    if (!solutionImage || !solutionText) return;

    const items = [
      {
        selector: "#MathOps",
        image: "/assets/mathOps.png",
        text: "MathOps is a next-gen analytics and monitoring platform built to optimize IT.",
      },
      {
        selector: "#SmartSustain",
        image: "/assets/prd-smartSustain.png",
        text: "Simplify and scale ESG reporting. SmartSustain.AI enables accurate tracking of carbon emissions, water usage, governance, and social impact.",
      },
      {
        selector: "#OpsBeat",
        image: "/assets/opsBeatprd.png",
        text: "Revolutionize your IT operations with smart automation, real-time visibility, and seamless integrations.",
      },
      {
        selector: "#CustomerDlens",
        image: "/assets/customerDlens.png",
        text: "AI-powered customer data fabric for 360° operational insights.",
      },
      {
        selector: "#SaaSBeamAI",
        image: "/assets/optiSaas.png",
        text: "Enterprise SaaS and Cloud Management Platform.",
      },
      {
        selector: "#Patient360",
        image: "/assets/prd-patient.png",
        text: "AI-powered patient data fabric for 360° operational insights.",
      },
      {
        selector: "#ResponsibleAI",
        image: "/assets/prd-patient.png",
        text: "Responsible AI fabric for 360° operational insights.",
      },
    ];

    const defaultImage = "/assets/mathOps.png";
    const defaultText =
      "MathOps is a next-gen analytics and monitoring platform built to optimize IT.";

    const listeners: Array<{ element: Element; enter: any; leave: any }> = [];

    function fadeSolutionImageChange(newSrc: string, newText: string) {
      solutionImage.style.opacity = "0";
      setTimeout(() => {
        solutionImage.src = newSrc;
        if (!solutionText) return;
        solutionText.innerHTML = newText;
        solutionImage.onload = () => (solutionImage.style.opacity = "1");
      }, 100);
    }

    items.forEach(({ selector, image, text }) => {
      const el = document.querySelector(selector);
      if (!el) return;

      const onEnter = () => fadeSolutionImageChange(image, text);
      const onLeave = () => fadeSolutionImageChange(defaultImage, defaultText);

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);

      listeners.push({ element: el, enter: onEnter, leave: onLeave });
    });

    // Cleanup
    return () => {
      animatedElements.forEach((el) => observer1.unobserve(el));

      listeners.forEach(({ element, enter, leave }) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <section
        id="solutions-section"
        className="bg-[#000000] pt-[100px] pb-[100px]"
      >
        <div
          className="px-10 md:px-[50px] lg:px-20 py-8 sm:py-12 lg:py-16 space-y-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          data-delay="100"
        >
          {/* <!-- heading --> */}
          <div
            className="flex gap-2 items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
            data-delay="200"
          >
            <h2 className="text-4xl text-[#828282] mb-4 leading-tight">
              Solutions
            </h2>
            <img src="/assets/updated/line.svg" className="pt-3" />
          </div>

          <h1
            className="text-4xl text-[#055CC0] mb-4 leading-tight  md:px-0 font-extrabold text-radiant opacity-0 translate-y-10 transition-all duration-700 ease-out"
            data-delay="300"
          >
            AI Frameworks That Power Transformation
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-[50px] lg:px-[70px]">
          <div className="flex flex-col justify-start text-white space-y-2">
            {cards &&
              cards.map((card) => {
                return (
                  <>
                    <div>
                      <Link to={card.pageLink}>
                        <div
                          id={card.id}
                          className="solution-item hover:font-semibold group p-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                          data-delay="400"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="rotate-[-45deg]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                >
                                  <path
                                    fill="#FFFFFF"
                                    d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                                  />
                                </svg>
                              </div>
                              <h3 className="text-xl">{card.productName}</h3>
                            </div>
                            <div className="self-end rotate-[90deg] hidden group-hover:block">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="#FFFFFF"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12.013 21L12 3.211m7 6.777L12 3L5 9.988"
                                  stroke-width="1"
                                />
                              </svg>
                            </div>
                          </div>
                          <hr className="mt-6" />
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
          </div>

          {/* <!-- Right side: Image + text --> */}
          <div
            className="relative hidden md:flex items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
            data-delay="400"
          >
            <div className="relative flex items-start pt-12">
              <img
                id="solution-image"
                src="/assets/mathOps.png"
                className="w-[550px] h-auto transition-opacity duration-700 z-10"
              />
              <div
                className="absolute right-[-30px] top-[70px] w-[450px] md:h-[300px] lg:h-[380px] xl:h-[450px] 
                bg-[url('/assets/dottedBg.png')] bg-contain bg-no-repeat bg-right"
              ></div>
            </div>

            {/* <!-- TEXT CARD BELOW IMAGE --> */}
            <div
              className="absolute md:top-[380px] lg:top-[480px] left-[10px] w-[90%] max-w-[440px] p-6 text-xl text-white z-20"
              id="solution-text"
            >
              MathOps is a next-gen analytics and monitoring platform built to
              optimize IT.
            </div>
          </div>
        </div>
      </section>
      <style>
        {`<style>
    .opacity-100 {
      opacity: 1;
    }

    .translate-y-0 { 
      transform: translateY(0);
    }`}{" "}
      </style>
    </>
  );
}

export default Solutions;

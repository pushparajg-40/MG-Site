import { useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowNarrowRightIcon from "../ui/ArrowNarrowRightIcon";
import SquareChevronRight from "../ui/SquareChevronRight";

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
    id: "SmartSustain",
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
  // {
  //   pageLink: "optiSaas",
  //   id: "SaaSBeamAI",
  //   productName: "OptiSaas.AI",
  // },
  {
    pageLink: "patient360",
    id: "Patient360",
    productName: "Patient360.AI",
  },
  {
    pageLink: "autodocx",
    id: "AutoDocX",
    productName: "AutoDocX.AI",
  },
  {
    pageLink: "salesforce",
    id: "Salesforce",
    productName: "Salesforce",
  },
  {
    pageLink: "regology",
    id: "Regology",
    productName: "Regology",
  },
];

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
    image: "/assets/customerDlensDashboardPageImage.png",
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
    selector: "#AutoDocX",
    image: "/assets/autoDocxImage.png",
    text: "Revolutionize the Way You Handle Documents with AI.",
  },
  {
    selector: "#Salesforce",
    image: "/assets/salesforce.png",
    text: "Smart Customer Engagement.",
  },
  {
    selector: "#Regology",
    image: "/assets/regulatory-intelligence.png",
    text: "Regulatory Intelligence at Scale.",
  },
];

function Solutions() {
  useEffect(() => {
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
      { threshold: 0.2 },
    );

    const animatedElements = document.querySelectorAll(
      "#solutions-section [data-delay]",
    );

    animatedElements.forEach((el) => observer1.observe(el));

    // ---- IMAGE + TEXT CHANGE LOGIC ----
    const solutionImage = document.getElementById(
      "solution-image",
    ) as HTMLImageElement;
    const solutionText = document.getElementById("solution-text");

    if (!solutionImage || !solutionText) return;

    // const defaultImage = "/assets/mathOps.png";
    // const defaultText =
    //   "MathOps is a next-gen analytics and monitoring platform built to optimize IT.";

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
      const onLeave = () => fadeSolutionImageChange(image, text);

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
        className="bg-white dark:bg-[#000000] pt-[100px] pb-[100px]"
      >
        <div
          className="2xl-plus:max-w-9xl 2xl-plus:mx-auto px-10 md:px-[50px] lg:px-20 py-8 sm:py-12 lg:py-16 space-y-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          data-delay="100"
        >
          {/* Heading */}
          <div
            className="flex gap-2 items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
            data-delay="200"
          >
            <h2 className="text-4xl text-[#1783F7] dark:text-[#828282] mb-4 leading-tight">
              Enterprise Solution
            </h2>
            <img src="/assets/updated/line.svg" className="pt-3" />
          </div>

          <h1
            className="text-4xl mb-4 leading-tight md:px-0 font-extrabold
          opacity-0 translate-y-10 transition-all duration-700 ease-out
          bg-clip-text text-transparent
          bg-gradient-to-r from-[#687DA9] to-[#1783F7]
          dark:text-gradient dark:bg-none dark:text-[#055CC0] dark:[background-clip:unset]"
            data-delay="300"
          >
            AI Framework & Partners Products
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-[50px] lg:px-[70px] 2xl-plus:max-w-9xl 2xl-plus:mx-auto">
          {/* Left: Solution list */}
          <div className="flex flex-col justify-start text-[#1F3F68] dark:text-white space-y-2">
            {cards &&
              cards.map((card) => (
                <div key={card.id}>
                  <Link to={card.pageLink}>
                    <div
                      id={card.id}
                      className="solution-item group p-2
                    opacity-0 translate-y-10 transition-all duration-700 ease-out
                    hover:font-semibold
                    hover:bg-gradient-to-r hover:from-[#EAF9FD] hover:to-[#DEF8FF]
                    dark:hover:bg-none dark:hover:from-transparent dark:hover:to-transparent
                    rounded-lg dark:rounded-none"
                      data-delay="400"
                    >
                      <div className="flex items-center justify-between gap-4 px-2">
                        <div className="flex items-center gap-4">
                          <SquareChevronRight className="text-[#1783F7] dark:text-white" />
                          <h3 className="text-xl text-[#1F3F68] dark:text-white">
                            {card.productName}
                          </h3>
                        </div>
                        <div
                          className="hidden group-hover:flex group-hover:items-center group-hover:gap-1
                      text-[#1783F7] dark:text-white"
                        >
                          <span className="text-xs font-light">Read More</span>
                          <ArrowNarrowRightIcon className="w-6 h-6" />
                        </div>
                      </div>
                      <hr className="mt-6 border-[#1783F7]/15 dark:border-white/20" />
                    </div>
                  </Link>
                </div>
              ))}
          </div>

          {/* Right: Image + text */}
          <div
            className="relative hidden md:flex items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
            data-delay="400"
          >
            <div className="relative flex items-start my-auto">
              <img
                id="solution-image"
                src="/assets/mathOps.png"
                className="w-[500px] h-auto transition-opacity duration-700 z-10"
              />
              <div
                className="absolute right-[-30px] top-[70px] w-[450px] md:h-[250px] lg:h-[320px] xl:h-[350px]
              bg-[url('/assets/dottedBg.png')] bg-contain bg-no-repeat bg-right
              opacity-40 dark:opacity-100"
              ></div>
            </div>

            {/* Text card below image */}
            <div
              className="absolute md:top-[550px] lg:top-[600px] left-[10px] w-[90%] max-w-[440px] p-6 text-xl z-20
            text-[#667085] dark:text-white
            bg-white/80 dark:bg-transparent
            backdrop-blur-sm dark:backdrop-blur-none
            rounded-xl dark:rounded-none
            border border-[#1783F7]/10 dark:border-transparent"
              id="solution-text"
            >
              MathOps is a next-gen analytics and monitoring platform built to
              optimize IT.
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
      .opacity-100 {
        opacity: 1;
      }
      .translate-y-0 {
        transform: translateY(0);
      }
    `}
      </style>
    </>
  );
}

export default Solutions;

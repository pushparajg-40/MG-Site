import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  gridColumn?: string;
}

interface WhyChooseItem {
  text: string;
}

interface IdealForItem {
  text: string;
}

const whyChooseData: WhyChooseItem[] = [
  {
    text: "Unified ESG Dashboards – All your data in one place, clearly visualized",
  },
  { text: "Global Standards Compliance – GRI, ISSB, and more" },
  {
    text: "Customizable & Scalable – Fits diverse industries and regulatory needs",
  },
  {
    text: "AI Insights for Action – Identify, analyze, and act on key sustainability drivers",
  },
  {
    text: "Empowers ESG Teams – Built for compliance officers, CSR leads, and sustainability strategists",
  },
];

const idealForData: IdealForItem[] = [
  { text: "Sustainability & ESG Managers" },
  { text: "Compliance Teams" },
  { text: "CSR and Impact Reporting Teams" },
  { text: "Corporate Strategy Leaders" },
  { text: "Investors & Stakeholder Relations" },
];

const keyFeaturesData: Feature[] = [
  {
    title: "Scope 1, 2, and 3 Emissions Dashboards",
    description:
      "Visualize and manage your direct and indirect emissions data in real time",
  },
  {
    title: "Waste & Water Management",
    description:
      "Track resource usage, monitor disposal trends, and implement conservation strategies",
  },
  {
    title: "Maturity Assessment",
    description:
      "Evaluate your organization's ESG readiness across key sustainability dimensions",
  },
  {
    title: "Peer Benchmarking",
    description:
      "Compare ESG performance with industry peers to identify gaps and opportunities",
  },
  {
    title: "Target Setting",
    description:
      "Define clear sustainability objectives and track progress against them",
  },
  {
    title: "GRI Framework",
    description:
      "Align reporting with the Global Reporting Initiative standards for transparency",
  },
  {
    title: "ISSB Gap Assessment",
    description:
      "Identify reporting gaps and align with ISSB sustainability disclosure standards",
    gridColumn: "col-start-2",
  },
];

export function SmartSustain() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  });



  return (
    <div className="bg-white dark:bg-black transition-all duration-500 ease-in">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row transition-all duration-500 ease-in">
        <div className="flex flex-col justify-center pl-[20px] md:pl-[50px] pr-[3px] md:pr-[180px] md:w-[50%] mt-[70px] md:mt-0">
          <div>
            <img
              src={ 
                isDark
                  ? "assets/updated/smartSustainLogoDark.svg"
                  : "assets/smartSustainLogo.svg"
              }
              alt="SmartSustain Logo"
              className="h-[35px] max-w-lg md:max-w-full md:items-start"
            />
          </div>

          <div>
            <p className="text-[#1783F7] dark:text-white text-[35px] md:text-5xl mt-4 font-semibold">
              AI-Powered ESG Platform for a Greener Tomorrow
            </p>
            <p className="text-[#667085] dark:text-white md:text-lg mt-4">
              Track, assess, and improve your sustainability performance with
              real-time ESG dashboards, intelligent assessments, and global
              reporting standards—all in one powerful platform.
            </p>
          </div>

          <button className="mt-6 w-[240px] text-white dark:text-black font-semibold py-3 px-8 rounded-full flex items-center bg-[linear-gradient(141deg,rgba(139,139,139,1)_0%,rgba(23,131,247,1)_100%)] hover:bg-[linear-gradient(141deg,#787878_0%,#0653A7_100%)] dark:bg-white dark:hover:bg-gray-100 transition-all">
            Talk to Our Experts
            <img
              src={
                isDark
                  ? "assets/updated/crossArrow.svg"
                  : "assets/getInArrow.svg"
              }
              alt="Arrow"
              className="ml-2 h-3"
            />
          </button>
        </div>
        <div className="mt-[50px] md:mt-0">
          <img
            src="assets/smartAIDashboard.png"
            alt="Smart AI Dashboard"
            className="md:h-[900px] object-cover object-left"
          />
        </div>
      </div>

      {/* What is SmartSustain Section */}
      <div className="pt-[100px] md:px-[40px] flex flex-col justify-center items-center xl:px-[370px] lg:px-[150px] px-[20px] dark:bg-[#181818] md:pb-[50px] transition-all duration-500 ease-in">
        <h2 className="text-[#1783F7] dark:text-white font-bold text-2xl">
          What is SmartSustain.AI?
        </h2>
        <p className="text-[#687DA9] dark:text-white text-center text-5xl mt-4">
          Designed for Responsible Growth
        </p>
        <p className="text-[#667085] dark:text-white text-center mt-4">
          SmartSustain.AI is an advanced ESG management platform designed to
          help organizations measure, report, and improve their environmental
          and social impact. With category-specific dashboards and intelligent
          tools, businesses can align with global standards, assess readiness,
          and set actionable sustainability goals.
        </p>
      </div>

      {/* Why Choose & Ideal For Section */}
      <div className="grid md:grid-cols-2 px-[20px] md:px-[40px] pt-[80px]">
        <div className="lg:pr-[80px]">
          <h2 className="text-[#687DA9] dark:text-white text-3xl font-bold">
            Why Choose SmartSustain.AI?
          </h2>
          <ul className="text-[#666666] dark:text-white mt-4 pl-[20px] space-y-2">
            {whyChooseData.map((item, idx) => (
              <li key={idx} style={{ listStyle: "disc" }}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pr-[80px] mt-[50px] md:mt-0">
          <h2 className="text-[#687DA9] dark:text-white text-3xl font-bold">
            Ideal For
          </h2>
          <ul className="text-[#666666] dark:text-white mt-4 pl-[20px] space-y-2">
            {idealForData.map((item, idx) => (
              <li key={idx} style={{ listStyle: "disc" }}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dashboard Image */}
      <div className="flex justify-center">
        <img src="assets/smart.png" alt="Dashboard" />
      </div>

      {/* Key Features Section */}
      <div className="mt-[100px] mx-[10px] md:mx-[0px] bg-[#F6FAFF] dark:bg-[#181818] pt-[30px] pb-[50px] transition-all duration-500 ease-in">
        <div className="flex flex-col justify-center items-center lg:px-[400px]">
          <h2 className="text-[#1783F7] dark:text-white text-2xl">
            Key Features
          </h2>
          <p className="text-[#687DA9] dark:text-white text-center text-5xl mt-4">
            Smarter ESG Decisions, Backed by Real-Time Data and AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 px-[20px] md:px-[50px] mt-[80px] gap-y-[40px]">
          {keyFeaturesData.map((feature, idx) => (
            <div
              key={idx}
              className={`lg:pr-[80px] ${feature.gridColumn || ""}`}
            >
              <h3 className="text-[#687DA9] dark:text-white text-3xl font-bold">
                {feature.title}
              </h3>
              <p className="text-[#667085] dark:text-white mt-6 md:mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ISSB Gap Image */}
      <div className="flex justify-center dark:bg-[#181818] md:pb-[20px] transition-all duration-500 ease-in">
        <img src="assets/issbGap.png" alt="ISSB Gap Assessment" />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

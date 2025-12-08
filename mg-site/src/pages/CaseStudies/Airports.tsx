import AtAGlance from "../../components/casestudies/AtGlance";
import Challenge from "../../components/casestudies/Challenge";
import Solution from "../../components/casestudies/Solution";
import TechnologiesUsed from "../../components/casestudies/TechnologyUsed";
import OutcomesAndBenefits from "../../components/casestudies/OutcomesAndBenefits";
import OtherCaseStudies from "../../components/casestudies/OtherCaseStudies";
import Header from "../../components/casestudies/Header";

const headerProps = {
  title: "Airports",
  subtitle: "End-to-End Airport Data Platform & AI Forecasting Engine",
  desc: "A major international airport operator sought to modernize its analytics ecosystem and optimize airport operations through data unification and predictive intelligence.",
  bannerImage: "/assets/updated/Airports.png",
};

const glanceProps = {
  arrowLight: "/assets/arrow.svg",
  arrowDark: "/assets/updated/crossArrowWhite.svg",
  items: [
    {
      title: "Industry",
      value: "Aviation & Airport Operations",
    },
    {
      title: "What We Delivered",
      value: "Unified data platform, AI forecasting engine",
    },
    {
      title: "Solution",
      value: "Enterprise Data Warehouse + AI Passenger Forecasting",
    },
    {
      title: "Impact",
      value:
        "Faster analytics delivery, reduced costs, ESG-aligned operational efficiency",
    },
    {
      title: "Key Challenges",
      value: "Data silos, inaccurate predictions, operational inefficiencies",
    },
  ],
};

const challengeProps = {
  title: "The Challenge",
  desc: "Airport data existed in silos across multiple departments—Passenger,Baggage, Airlines, Cargo, Engineering, Operations, Finance—causing:",
  challenges: [
    "Lack of unified situational awareness",
    "Slow analytics turnaround time",
    "Inaccurate forecasting and resource wastage",
    "No predictive operations capability for future passenger volume",
  ],
};

const items = [
  {
    id: 1,
    title: "Enterprise Data Warehouse",
    content: [
      "Unified 10+ airport domains into a single high-quality BigQuery repository",
      "Standardized schemas and golden-record management",
    ],
  },
  {
    id: 2,
    title: "Technology & Data",
    content: [
      "Unified 10+ airport domains into a single high-quality BigQuery repository",
      "Standardized schemas and golden-record management",
    ],
  },
];

const outcomes = [
  "Single source of truth for all analytical needs",
  "55% faster dashboard & model delivery cycles",
  "Operational cost savings through optimized staffing & energy usage",
  "Reduced airport carbon footprint—aligned with ESG goals",
  "Higher data adoption across airport business units",
];

export default function Airports() {
  return (
    <div className="dark:bg-black">
      <Header {...headerProps} />
      <AtAGlance {...glanceProps} />
      <Challenge {...challengeProps} />
      <Solution items={items} desc="" />
      <TechnologiesUsed />
      <OutcomesAndBenefits items={outcomes} />
      <OtherCaseStudies />
    </div>
  );
}

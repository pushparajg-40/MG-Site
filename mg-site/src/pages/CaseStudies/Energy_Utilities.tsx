import React from "react";
import Header from "../../components/casestudies/Header";
import AtAGlance from "../../components/casestudies/AtGlance";
import Challenge from "../../components/casestudies/Challenge";
import OtherCaseStudies from "../../components/casestudies/OtherCaseStudies";
import OutcomesAndBenefits from "../../components/casestudies/OutcomesAndBenefits";
import Solution from "../../components/casestudies/Solution";
import TechnologiesUsed from "../../components/casestudies/TechnologyUsed";
import TechUsed from "../../components/casestudies/TechUsed";
import SolutionList from "../../components/casestudies/SolutionList";

const headerProps = {
  title: "Energy & Utilities",
  subtitle: "AI-Driven ESG Platform for Sustainable Infrastructure Projects",
  desc: "A leading Singapore-based consulting firm specializing in infrastructure, energy, and sustainable development engaged Mindgraph to build a comprehensive ESG (Environmental, Social, Governance) digital platform to support investor decision-making, sustainability visibility, and project evaluation.",
  bannerImage: "/assets/kpmg_overview.png",
};

const glanceProps = {
  arrowLight: "/assets/arrow.svg",
  arrowDark: "/assets/updated/crossArrowWhite.svg",
  items: [
    {
      title: "Industry",
      value: "Energy, Utilities & Infrastructure",
    },
    {
      title: "What We Delivered",
      value: "Multi-role ESG portal, AI chatbot, analytics dashboards",
    },
    {
      title: "Solution",
      value: "AI-driven ESG Insights & Investment Platform",
    },
    {
      title: "Impact",
      value:
        "360° ESG visibility, transparent reporting, improved investor engagement",
    },
    {
      title: "Key Challenges",
      value: "Fragmented ESG data, manual reporting, low investor visibility",
    },
  ],
};

const challengeProps = {
  title: "The Challenge",
  desc: "The firm managed several large-scale infrastructure projects that required transparent ESG reporting, investor-ready dashboards, and a single digital hub for showcasing sustainability initiatives. They faced challenges such as:",
  challenges: [
    "Lack of a unified portal to present ESG initiatives",
    "Difficulty engaging investors with real-time data",
    "Manual processes for ESG documentation and evaluation",
    " Limited ability to scale ESG frameworks across projects",
  ],
};


const outcomes = [
  "360° visibility into ESG initiatives across energy and infrastructure",
  "Improved investor confidence through transparent sustainability reporting",
  "Faster and data-driven decision-making",
  "Strengthened brand positioning as a sustainability-first organization",
  "A scalable platform supporting future ESG expansion",
];

const technologies = [
  "Web Portals & Microservices",
  "AI/Chatbot for Knowledge Hub",
  "Cloud-native deployment (platformfusion.com.sg)",
  "Advanced analytics & insight visualization",
];

const solutionListProps = {
  subtitle:
    " Mindgraph designed and built a modern ESG Insights & Investment Platform, integrating:",
  items: [
    "A multi-role web portal for Developers, Investors, and Project Partners",
    "AI-powered chatbot for ESG knowledge discovery",
    "Rich UI dashboards showcasing carbon emissions, governance metrics, and environmental impact",
    "Secure publishing of sustainability case studies and investment opportunities",
    "Centralized repository for all ESG offerings",
  ],
};

function Energy_Utilities() {
  return (
    <div className="dark:bg-black">
      <Header {...headerProps} />
      <AtAGlance {...glanceProps} />
      <Challenge {...challengeProps} />
      <SolutionList {...solutionListProps} />
      <TechUsed items={technologies} />
      <OutcomesAndBenefits items={outcomes} />
      <OtherCaseStudies />
    </div>
  );
}

export default Energy_Utilities;

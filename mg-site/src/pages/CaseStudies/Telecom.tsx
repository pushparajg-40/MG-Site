import AtAGlance from "../../components/casestudies/AtGlance";
import Challenge from "../../components/casestudies/Challenge";
import Solution from "../../components/casestudies/Solution";
import TechnologiesUsed from "../../components/casestudies/TechnologyUsed";
import OutcomesAndBenefits from "../../components/casestudies/OutcomesAndBenefits";
import OtherCaseStudies from "../../components/casestudies/OtherCaseStudies";
import Header from "../../components/casestudies/Header";

const headerProps = {
  title: "Telecom",
  subtitle:
    "Enhance telecom networks with smart monitoring, automation, and secure communication",
  desc: "A leading Southeast Asian telecommunications provider engaged Mindgraph to modernize its enterprise data ecosystem and accelerate analytics adoption across commercial, network, and digital business units. With millions of subscribers and rapidly expanding digital services, the organization required a scalable, high-performance data foundation to support real-time insights and improved customer experience.",
  bannerImage: "/assets/updated/telecom.png",
};

const glanceProps = {
  arrowLight: "/assets/arrow.svg",
  arrowDark: "/assets/updated/crossArrowWhite.svg",
  items: [
    {
      title: "Industry",
      value: "Telecommunications",
    },
    {
      title: "What We Delivered",
      value: "Big data pipelines, customer 360, O/BSS integrations, DataOps",
    },
    {
      title: "Solution",
      value: "Enterprise Data Modernization & Analytics Enablement",
    },
    {
      title: "Impact",
      value:
        "Faster insights, better segmentation, reliable reporting, AI-ready ecosystem",
    },
    {
      title: "Key Challenges",
      value: "Data fragmentation, slow insights, limited customer intelligence",
    },
  ],
};

const challengeProps = {
  title: "The Challenge",
  desc: "The telecom operator faced several critical data and operational challenges:",
  challenges: [
    "Data spread across multiple systems—network, CRM, billing, digital channels",
    "Slow turnaround time for analytics due to manual and fragmented data pipelines",
    "Limited visibility into customer behavior, churn patterns, and network performance",
    "Need for scalable DataOps frameworks to handle high-volume telecom datasets",
    "Pressure to support new digital services and next-gen analytics use cases",
  ],
};

const items = [
  {
    id: 1,
    title: "Big Data Engineering & Modern Pipelines",
    content: [
      "Developed and optimized large-volume ingestion pipelines for customer, network, and usage data, ensuring timely and accurate insights.",
    ],
  },
  {
    id: 2,
    title: "Customer 360 & Analytics Enablement",
    content: [
      "Developed and optimized large-volume ingestion pipelines for customer, network, and usage data, ensuring timely and accurate insights.",
    ],
  },
  {
    id: 3,
    title: "System Integration Across O/BSS",
    content: [
      "Developed and optimized large-volume ingestion pipelines for customer, network, and usage data, ensuring timely and accurate insights.",
    ],
  },
  {
    id: 4,
    title: "Data Quality, Metadata & Governance",
    content: [
      "Developed and optimized large-volume ingestion pipelines for customer, network, and usage data, ensuring timely and accurate insights.",
    ],
  },
  {
    id: 5,
    title: "DataOps & Reusable Engineering Frameworks",
    content: [
      "Developed and optimized large-volume ingestion pipelines for customer, network, and usage data, ensuring timely and accurate insights.",
    ],
  },
];

const outcomes = [
  "The telecom operator now operates with a unified, scalable, and future-ready data ecosystem—enabling richer customer insights, faster decision-making, and stronger digital capabilities.",
];

export default function Telecom() {
  return (
    <div className="dark:bg-black">
      <Header {...headerProps} />
      <AtAGlance {...glanceProps} />
      <Challenge {...challengeProps} />
      <Solution
        items={items}
        desc={
          "Mindgraph implemented a comprehensive data modernization program focused on engineering excellence and enterprise-scale analytics enablement:"
        }
      />
      <TechnologiesUsed />
      <OutcomesAndBenefits items={outcomes} />
      <OtherCaseStudies />
    </div>
  );
}

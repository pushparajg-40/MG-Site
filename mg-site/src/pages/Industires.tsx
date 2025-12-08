import IndustriesHero from "../components/IndustriesHero";
import IndustrySection from "../components/IndustrySection";


const INDUSTRIES_DATA = [
  {
    id: "energy",
    title: "Energy & Utilities",
    image: "assets/energyUtilites.jpg",
    overview:
      "We help energy providers and utility companies transition into intelligent, sustainable enterprises. Our AI-powered platforms and IoT integrations offer real-time insights into energy flow, asset performance, and ESG metrics.",
    solutions: [
      "Smart grid optimization and energy distribution modeling",
      "Predictive maintenance for transmission and distribution infrastructure",
      "IoT-based smart meter data aggregation and real-time analytics",
      "Carbon emissions tracking and ESG reporting dashboards",
      "Outage management and disaster recovery automation",
    ],
    impacts: [
      "Reduced energy loss and improved load balancing",
      "Faster fault detection and resolution",
      "Enhanced regulatory compliance and sustainability reporting",
      "Proactive asset lifecycle management",
    ],
    caseStudyTitle:
      "AI-Driven ESG Platform for Sustainable Infrastructure Projects",
    caseStudyLink: "Energy_Utilities",
    caseStudyImage: "assets/updated/energyUtilitesCaseStudy.png",
    bgColor: "bg-white dark:bg-black",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    image: "assets/healthcareIndustry.jpg",
    overview:
      "Mindgraph enables healthcare providers to modernize operations and improve patient outcomes through AI, secure data platforms, and predictive diagnostics. We support clinical decision-making and operational efficiency.",
    solutions: [
      "Predictive analytics for early diagnosis and patient risk scoring",
      "AI-driven triage, treatment planning, and workflow automation",
      "Secure patient data integration across HIS, EHR, and wearable devices",
      "Medical image analysis using computer vision models",
      "HIPAA-compliant infrastructure and access controls",
    ],
    impacts: [
      "Reduced diagnosis time and improved treatment accuracy",
      "Streamlined patient journeys and reduced administrative overhead",
      "Improved care personalization and preventive healthcare delivery",
      "Stronger data security and regulatory alignment",
    ],
    caseStudyTitle:
      "Integrated Mobile Platform for National Employment & Upskilling",
    caseStudyLink: "casestudies/Healthcare",
    caseStudyImage: "assets/updated/healthCareCaseStudy.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
  },
  {
    id: "airports",
    title: "Airports",
    image: "assets/airportIndustry.jpg",
    overview:
      "From landside to airside, we help airports digitize their infrastructure, optimize resource allocation, and enhance the passenger experience. Our intelligent solutions support operational visibility and real-time responsiveness.",
    solutions: [
      "Passenger flow analysis and queue prediction",
      "Predictive maintenance for runway and terminal equipment",
      "AI-powered baggage handling and lost item tracking",
      "Smart terminal energy management and surveillance systems",
      "Integrated dashboards for turnaround and staff scheduling",
    ],
    impacts: [
      "Reduced passenger wait times and operational delays",
      "Real-time situational awareness across airport systems",
      "Optimized use of resources and reduced operating costs",
      "Enhanced passenger safety, comfort, and satisfaction",
    ],
    caseStudyTitle: "End-to-End Airport Data Platform & AI Forecasting Engine",
    caseStudyLink: "airports",
    caseStudyImage: "assets/updated/airportsCaseStudy.png",
    bgColor: "bg-white dark:bg-black",
  },
  {
    id: "bfsi",
    title: "Banking, Financial Services & Insurance (BFSI)",
    image: "assets/bankingIndustry.jpg",
    overview:
      "Mindgraph empowers financial institutions with AI-first digital solutions to reduce risk, detect fraud, enhance customer journeys, and meet regulatory demands.",
    solutions: [
      "Real-time fraud detection and transaction scoring using ML",
      "Credit risk modeling and financial forecasting",
      "Personalized banking experiences and customer 360 profiling",
      "RegTech compliance automation and audit trails",
      "Chatbots and virtual agents for service efficiency",
    ],
    impacts: [
      "Lower financial risk and reduced fraud-related losses",
      "Improved underwriting accuracy and faster approvals",
      "Increased customer retention and engagement",
      "Streamlined compliance reporting and risk governance",
    ],
    caseStudyTitle: "AI-Driven Loan Origination & Collection Optimization",
    caseStudyLink: "/casestudies/BFSI",
    caseStudyImage: "assets/updated/bfsiCaseStudy.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
  },
  {
    id: "telecom",
    title: "Telecom",
    image: "assets/telecomIndustry.jpg",
    overview:
      "We support telecom operators in improving service quality, customer retention, and network intelligence with scalable AI and real-time data analytics.",
    solutions: [
      "Network performance monitoring and anomaly detection",
      "Churn prediction and subscriber behavior analytics",
      "Automated ticketing and self-healing workflows",
      "5G resource orchestration and smart planning",
      "Customer sentiment and SLA tracking with NLP",
    ],
    impacts: [
      "Enhanced service availability and customer satisfaction",
      "Data-driven customer retention strategies",
      "Optimized network investment and resource utilization",
      "Reduced manual intervention in support operations",
    ],
    caseStudyTitle:
      "Enhance telecom networks with smart monitoring, automation, and secure communication",
    caseStudyLink: "/casestudies/Telecom",
    caseStudyImage: "assets/updated/telecomCaseStudy.png",
    bgColor: "bg-white dark:bg-black",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    image: "assets/manufacturingIndus.jpg",
    overview:
      "We help manufacturers digitize plant operations, optimize supply chains, and improve product quality using AI and IoT-enabled solutions.",
    solutions: [
      "Predictive maintenance for production machinery",
      "Quality inspection using computer vision",
      "AI-based production scheduling and capacity planning",
      "Connected factory insights via IoT data integration",
      "Supply chain risk analysis and automation",
    ],
    impacts: [
      "Reduced unplanned downtime and maintenance costs",
      "Improved defect detection and product consistency",
      "Optimized throughput and on-time delivery",
      "Real-time visibility into production and logistics",
    ],
    caseStudyTitle:
      "AI-Driven Jewelry Design Innovation – GenAI Design Smith Platform",
    caseStudyLink: "casestudies/Manufacturing",
    caseStudyImage: "assets/updated/manufacturingCaseStudy.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
  },
];

export default function Industries() {
  return (
    <div className="dark:bg-black">
      <IndustriesHero />
      {INDUSTRIES_DATA.map((industry) => (
        <IndustrySection key={industry.id} {...industry} />
      ))}
    </div>
  );
}

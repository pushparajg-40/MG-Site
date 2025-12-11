import ServiceSection from "./ServicesSection";
import HeroBanner from "../components/HeroBanner";
import PageTransition from "../components/PageTransition";

const servicesData = [
  {
    title: "AI & Data Intelligence Services",
    description:
      "Unlock the power of data and AI to automate decisions, predict outcomes, and drive business growth. We handle everything from strategy and pipelines to real-time analytics and model deployment.",
    image: "assets/aiServiceUpdated.png",
    bgColor: "bg-white dark:bg-black",
    buttonLink: "/AI&DI_Services",
    whatWeOffer: [
      { text: "AI strategy development and roadmap planning" },
      { text: "Data engineering and pipeline automation" },
      {
        text: "Advanced analytics and machine learning model deployment",
      },
      { text: "Real-time dashboards and decision intelligence platforms" },
      { text: "MLOps and model lifecycle management" },
    ],
    whyChooseUs: [
      { text: "AI-first approach tailored to business goals" },
      { text: "Proven frameworks for scalable data and ML operations" },
      { text: "Domain-specific use case accelerators" },
      { text: "Expertise in cloud-native AI and governance" },
      { text: "End-to-end service from strategy to insight delivery" },
    ],
  },
  {
    title: "Application & Development Services",
    description:
      "Design, build, and support powerful business applications with a focus on performance, scalability, and user experience. From custom development to lifecycle management, we ensure your apps evolve with your business.",
    image: "assets/appService.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
    buttonLink: "/AppDevServices",
    whatWeOffer: [
      { text: "Custom application development (web, mobile, enterprise)" },
      { text: "Application modernization and migration" },
      { text: "End-to-end product lifecycle management" },
      { text: "API integration and microservices architecture" },
      { text: "Performance tuning and ongoing enhancements" },
    ],
    whyChooseUs: [
      { text: "User-first design with enterprise-grade development" },
      { text: "Agile delivery and DevOps-driven processes" },
      { text: "Cross-platform expertise for seamless UX" },
      { text: "Rapid MVP to production pipeline" },
      { text: "Strong focus on scalability and security" },
    ],
  },
  {
    title: "SAP Enterprise Services",
    description:
      "Keep your SAP systems running smoothly with expert support across application performance, cloud hosting, upgrades, and business continuity planning.",
    image: "assets/sapService.png",
    bgColor: "bg-white dark:bg-[#000000]",
    buttonLink: "/SapEnterpriseServices",
    whatWeOffer: [
      { text: "SAP BASIS and application management" },
      { text: "SAP on Cloud hosting and optimization" },
      { text: "SAP S/4HANA migration readiness and support" },
      { text: "Business continuity and disaster recovery planning" },
      { text: "Performance and version upgrades" },
    ],
    whyChooseUs: [
      { text: "Certified SAP professionals with multi-industry experience" },
      { text: "Cloud-native SAP deployment expertise" },
      { text: "End-to-end operational support with SLAs" },
      { text: "Risk-free migration strategy and governance" },
      { text: "Optimized for performance and business alignment" },
    ],
  },
  {
    title: "CRM & ERP Solutions",
    description:
      "Connect customer engagement and business operations with smart, scalable CRM and ERP platforms tailored to your needs.",
    image: "assets/crmService.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
    buttonLink: "/CRM&ERPServices",
    whatWeOffer: [
      { text: "Salesforce, Zoho, and Microsoft Dynamics CRM implementation" },
      { text: "SAP, Oracle, and Microsoft Dynamics ERP support" },
      { text: "System integration and automation" },
      { text: "Custom workflows and reporting dashboards" },
      { text: "CRM and ERP security, compliance, and training" },
    ],
    whyChooseUs: [
      { text: "Expertise in both CRM and ERP ecosystems" },
      { text: "Tailored configurations aligned to business needs" },
      { text: "Focus on automation and user adoption" },
      { text: "Secure and compliant architecture" },
      { text: "Data-driven personalization and reporting" },
    ],
  },
  {
    title: "Cloud Infrastructure Services",
    description:
      "Deploy, scale, and manage your cloud environment (AWS, Azure, GCP) with ease—ensuring performance, security, and cost-efficiency every step of the way.",
    image: "assets/cloudService.png",
    bgColor: "bg-white dark:bg-black",
    buttonLink: "/CloudInfrastructureServices",
    whatWeOffer: [
      { text: "Cloud strategy and architecture design" },
      { text: "Cloud migration and modernization" },
      { text: "Infrastructure as code and automation" },
      { text: "Monitoring, optimization, and governance" },
      { text: "Security and compliance management" },
    ],
    whyChooseUs: [
      { text: "Cloud-agnostic approach across AWS, Azure, GCP" },
      { text: "Automated infrastructure and CI/CD pipelines" },
      { text: "Built-in security and performance monitoring" },
      { text: "Cost optimization and resource planning" },
      { text: "Seamless integration with enterprise systems" },
    ],
  },
  {
    title: "Consulting & Advisory Services",
    description:
      "Drive innovation and digital maturity with strategic guidance across business and technology domains—focused on sectors like energy, defence, BFSI, healthcare, and logistics.",
    image: "assets/consultingServiceUpdated.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
    buttonLink: "/Consulting&AdvisoryServices",
    whatWeOffer: [
      { text: "Industry-specific digital transformation consulting" },
      { text: "AI and data strategy development" },
      { text: "Technology architecture and innovation planning" },
      { text: "Process modernization and change management" },
      { text: "Regulatory and compliance consulting" },
    ],
    whyChooseUs: [
      { text: "Deep domain expertise in complex industries" },
      { text: "End-to-end alignment of business and tech goals" },
      { text: "Strategic and execution-ready recommendations" },
      { text: "Flexible engagement models for advisory and execution" },
      {
        text: "Trusted by leading enterprises and public sector clients",
      },
    ],
  },
];
function Service() {
  return (
    <>
      <PageTransition>
        <HeroBanner
          title="Services"
          image="assets/servicesBanner.png"
          type="parent"
        />

        {servicesData.map((service, idx) => (
          <ServiceSection
            key={idx}
            title={service.title}
            description={service.description}
            image={service.image}
            bgColor={service.bgColor}
            buttonLink={service.buttonLink}
            whatWeOffer={service.whatWeOffer}
            whyChooseUs={service.whyChooseUs}
          />
        ))}
      </PageTransition>
    </>
  );
}

export default Service;

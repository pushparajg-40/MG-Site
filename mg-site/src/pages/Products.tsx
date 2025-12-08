import HeroBanner from "../components/HeroBanner";
import ProductCard from "./ProductsCard";

const productsData = [
  {
    title: "CustomerDLens.ai",
    subtitle: "Transforming Data into Decisions",
    description:
      "Unlock a 360° customer view with our AI-powered data platform. From ingestion to advanced analytics, CustomerDLens.ai turns complex data into business intelligence.",
    image: "assets/customerDlenAI.png",
    bgColor: "bg-white dark:bg-black",
    imagePosition: "left" as const,
    buttonLink: "customerDlens.html",
    capabilities: [
      {
        text: "No-code data ingestion from diverse sources (APIs, Databricks, files, etc.)",
      },
      { text: "Real-time pipeline monitoring with cleansing & validation" },
      { text: "360° customer view via unified Customer Data Fabric" },
      { text: "Dynamic segmentation using Slice & Dice Algorithm" },
      { text: "AI-powered recommendations through GEN-AI" },
      {
        text: "Anomaly detection and historical tracking via Data Quality Dashboard",
      },
    ],
  },
  {
    title: "OptiSaas.AI",
    subtitle: "The Future of SaaS & Cloud Management",
    description:
      "Gain complete control over your SaaS ecosystem with OptiSaas.AI designed to reduce costs, prevent shadow IT, and align SaaS investments with business goals.",
    image: "assets/optiSaas.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
    imagePosition: "right" as const,
    buttonLink: "optiSaas.html",
    capabilities: [
      { text: "Unified dashboard for SaaS and cloud spend visibility" },
      { text: "AI-driven SaaS Advisor for usage optimization" },
      { text: "Multicloud monitoring with budget threshold alerts" },
      { text: "Centralized SaaS marketplace with reviews and insights" },
      { text: "Automated contract lifecycle and renewal tracking" },
      { text: "Portfolio management across departments and teams" },
    ],
  },
  {
    title: "SmartSustain.AI",
    subtitle: "Data-Driven Sustainability for Future-Ready Organizations",
    description:
      "Streamline ESG reporting with a fully customizable platform that supports compliance with global standards like GRI and ISSB.",
    image: "assets/smartsustainImage.png",
    bgColor: "bg-white dark:bg-black",
    imagePosition: "left" as const,
    buttonLink: "smartSustain.html",
    capabilities: [
      {
        text: "ESG modules: Environmental, Social, Governance, and Compliance",
      },
      { text: "Scope 1, 2, and 3 emissions tracking with supplier inputs" },
      { text: "Bulk data upload for efficient reporting" },
      { text: "ESG Maturity Assessment and Peer Benchmarking" },
      { text: "ISSB & GRI gap assessments for standard compliance" },
      {
        text: "Role-based access for decentralized data collection and review",
      },
    ],
  },
  {
    title: "Patient360.ai",
    subtitle: "Revolutionizing Healthcare with a Comprehensive Data Platform",
    description:
      "A healthcare-specific CDP offering seamless doctor-patient engagement, appointment scheduling, and real-time data-driven decisions.",
    image: "assets/patient360Image.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
    imagePosition: "right" as const,
    buttonLink: "patient360.html",
    capabilities: [
      { text: "Appointment scheduling with automated SMS/Email reminders" },
      {
        text: "Secure doctor-patient messaging with chatbot and video consults",
      },
      { text: "Real-time health tracking and patient risk scoring" },
      {
        text: "Multi-channel alerts for critical test results and prescriptions",
      },
      { text: "Unified patient profiles with EMR/EHR integration" },
      { text: "HIPAA-compliant data encryption and role-based access" },
    ],
  },
  {
    title: "OpsBeat",
    subtitle: "Revolutionizing IT Operations Management",
    description:
      "A powerful AI-driven IT service management tool designed to streamline workflows and enhance system performance.",
    image: "assets/opsBeatImage.png",
    bgColor: "bg-white dark:bg-black",
    imagePosition: "left" as const,
    buttonLink: "opsbeat.html",
    capabilities: [
      { text: "Low-code/no-code workflow builder" },
      { text: "Centralized dashboard for IT service insights" },
      { text: "Multichannel support via WhatsApp, SMS, Email" },
      { text: "Aggregate APIs for cross-system metric calculation" },
      { text: "AI-powered sentiment analysis and predictive alerts" },
      { text: "Extensible workflow engine for custom automation" },
    ],
  },
  {
    title: "MathOps",
    subtitle: "Empowering IT Operations with AI-Driven Analytics",
    description:
      "Move from reactive to proactive IT management with real-time monitoring, predictive insights, and unified dashboards.",
    image: "assets/mathopsImage.png",
    bgColor: "bg-[#F7FBFF] dark:bg-[#181818]",
    imagePosition: "right" as const,
    buttonLink: "mathops.html",
    capabilities: [
      { text: "Real-time infrastructure and app performance monitoring" },
      { text: "Predictive analytics for anomaly detection and root cause" },
      { text: "Customizable dashboards with 360° entity views" },
      { text: "Automated ticket generation and multichannel alerts" },
      { text: "Seamless integration with ticketing and notification tools" },
    ],
  },
];

function Products() {
  return (
    <div className="dark:bg-black">
      <HeroBanner title="Products" image="assets/background.png" type="parent" />

      <div className="py-[30px] md:py-[100px] dark:bg-[#000000] transition-all duration-500 ease-in">
        <p className="text-[#687da9] dark:text-white text-4xl md:text-5xl text-center font-extrabold">
          Empowering Innovation with AI-Driven Solutions
        </p>
        <p className="text-[#666666] dark:text-white text-base text-center tracking-[0.08px] leading-5 mt-[20px] mx-[20px] md:mx-auto md:max-w-4xl lg:max-w-5xl">
          At Mindgraph, we build intelligent platforms that empower
          organizations to make smarter decisions, automate operations, and
          unlock data-driven insights. Explore our product suite built to
          transform diverse domains—from customer experience to IT operations,
          healthcare, ESG compliance, and document management.
        </p>
      </div>

      {productsData.map((product, idx) => (
        <ProductCard
          key={idx}
          title={product.title}
          subtitle={product.subtitle}
          description={product.description}
          image={product.image}
          bgColor={product.bgColor}
          imagePosition={product.imagePosition}
          buttonLink={product.buttonLink}
          capabilities={product.capabilities}
        />
      ))}
    </div>
  );
}

export default Products;

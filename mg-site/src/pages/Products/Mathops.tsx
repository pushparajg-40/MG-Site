import {
  HeroSection,
  type HeroSectionProps,
} from "../../components/product/HeroSection";
import {
  AboutSection,
  type AboutProps,
  type ChildProps,
} from "../../components/product/AboutSection";
import { FeaturesSection } from "../../components/product/FeaturesSection";
import AboutImageSection from "../../components/product/AboutImageSection";

const aboutSectionData: AboutProps = {
  title: "What is Mathops?",
  subtitle: "Transform Your IT Ecosystem with AI-Driven Intelligence",
  desc: "MathOps is an advanced AI-powered IT operations (AIOps) platform that simplifies complex infrastructures through intelligent automation, live system tracking, and actionable insights. It helps organizations move from reactive incident management to a proactive, data-led operations model.",
  childs: [],
};

const aboutImageData: AboutProps = {
  title: "Who Uses Mathops?",
  subtitle: "A Tool Built for Every Role in the IT Chain",
  desc: "",
  childs: [
    {
      title: "IT Managers",
      point:
        "Track KPIs, system health, and resource utilization to ensure consistent performance and cost control.",
    },
    {
      title: "IT Admin",
      point:
        "Get a bird’s-eye view of infrastructure with real-time alerts and root cause visibility for rapid resolution.",
    },
    {
      title: "Response Team",
      point:
        "Respond to critical events with real-time notifications and automated ticketing through multiple channels.",
    },
    {
      title: "Data Analysts",
      point:
        "Gain meaningful trends and insights for smarter capacity planning and long-term performance tuning.",
    },
  ],
};

const features: ChildProps[] = [
  {
    title: "Real-Time Monitoring",
    point:
      "Keep track of application and infrastructure performance through dynamic dashboards that display live metrics, thresholds, and alerts enabling instant diagnosis.",
  },
  {
    title: "Predictive Analytics",
    point:
      "Use machine learning models to anticipate system failures, abnormal spikes, and performance degradation giving your team time to act before downtime happens.",
  },
  {
    title: "Dashboards",
    point:
      "Tailor dashboard views by team, function, or data type. Highlight what's most important for your stakeholders, with drag-and-drop widgets and filters.",
  },
  {
    title: "Incident Management",
    point:
      "Automate alerting and ticket creation through built-in integrations with email, SMS, WhatsApp, and common ITSM tools ensuring no issue goes unnoticed.",
  },
  {
    title: "360-Degree Entity View",
    point:
      "Gain complete visibility into all components from server health and network performance to app responsiveness in a unified, central interface.",
  },
];

const featureSectionData = {
  title: "Key Features",
  subtitle:
    "Smart Tools for Proactive, Predictive, and Reliable IT Operations.",
  features: features,
};

const heroSectionProps: HeroSectionProps = {
  title: "AI-Powered IT Operations Made Smarter",
  subtitle:
    "MathOps is a next-gen analytics and monitoring platform built to optimize IT operations with real-time visibility, intelligent automation, and predictive insights. Whether you're managing a small team or a large infrastructure, MathOps equips you with the tools to stay ahead of incidents, reduce downtime, and improve performance.",
  logoDark: "assets/updated/MathopsLogoDark.svg",
  logoLight: "assets/mathops/mathops-logo.png",
  bannerImage: "assets/mathops/mathops-banner.png",
  arrowIconLight: "assets/getInArrow.svg",
  arrowIconDark: "assets/updated/crossArrow.svg",
};

function Mathops() {
  return (
    <>
      <div className="bg-white dark:bg-black transition-all duration-500 ease-in">
        <HeroSection {...heroSectionProps} />
        <AboutSection
          title={aboutSectionData.title}
          subtitle={aboutSectionData.subtitle}
          desc={aboutSectionData.desc}
          childs={aboutSectionData.childs}
        />
        <AboutImageSection {...aboutImageData}></AboutImageSection>
        <FeaturesSection
          title={featureSectionData.title}
          subtitle={featureSectionData.subtitle}
          features={featureSectionData.features}
        />
        {/* <DashboardSection imageSrc={"assets/customerDash.png"} /> */}
      </div>
    </>
  );
}

export default Mathops;

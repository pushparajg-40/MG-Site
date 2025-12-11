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
import { Helmet } from "react-helmet";

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
  image: "assets/mathops/mathops-image.png",
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
  type: "start",
  desc: "MathOps combines AI-driven monitoring, predictive analytics, and intelligent automation to help IT teams detect issues early, optimize performance, and ensure system reliability—before problems arise.",
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

const whyChooseData: AboutProps = {
  title: "Why Choose Mathops?",
  subtitle: "Smarter Operations. Stronger Systems.",
  desc: "",
  image: "assets/mathops/mathops-image-2.png",
  childs: [
    {
      title: "IT Management",
      point:
        "Shift from reactive firefighting to intelligent foresight with predictive alerting and continuous optimization.",
    },
    {
      title: "Seamless Integrations",
      point:
        "Plug into your existing ecosystem with support for ITSM, cloud tools, messaging platforms, and third-party APIs.",
    },
    {
      title: "AI-Powered Intelligence",
      point:
        "Use AI and machine learning to uncover hidden patterns and make informed decisions faster.",
    },
    {
      title: "Adaptability",
      point:
        "Whether you're in finance, healthcare, e-commerce, or logistics, MathOps flexes to fit your unique operational needs.",
    },
    {
      title: "Unified Collaboration",
      point:
        "Enable better cross-team coordination with shared dashboards, unified alerts, and collaborative workflows.",
    },
    {
      title: "Full-Stack Visibility",
      point:
        "Ensure uptime, detect issues early, and manage all IT assets in one place — from apps to infrastructure.",
    },
  ],
};

function Mathops() {
  return (
    <>
      <Helmet>
        <title>MathOps – AI-Powered AIOps Platform for IT Operations</title>
        <meta
          name="description"
          content="MathOps is an AI-powered AIOps platform offering real-time monitoring, predictive analytics, and intelligent automation to reduce downtime and optimize IT operations"
        />
      </Helmet>
      <div className="bg-white dark:bg-black transition-all duration-500 ease-in">
        <HeroSection {...heroSectionProps} />
        <AboutSection {...aboutSectionData} />
        <AboutImageSection {...aboutImageData} />
        <FeaturesSection {...featureSectionData} />
        <AboutImageSection {...whyChooseData} />
      </div>
    </>
  );
}

export default Mathops;

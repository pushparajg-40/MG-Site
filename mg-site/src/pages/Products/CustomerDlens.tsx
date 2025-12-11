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
import { DashboardSection } from "../../components/product/DashboardSection";
import { Helmet } from "react-helmet";

const aboutSectionData: AboutProps = {
  title: "What is CustomerDLens?",
  subtitle: "Transform Customer Data into Smart Decisions",
  desc: " CustomerDLens is an intelligent customer analytics platform that unifies, cleanses, and interprets customer data from multiple sources. It helps businesses understand behaviors, preferences, and lifecycle journeys through a 360-degree view, enabling hyper-personalized marketing and smarter decision-making.",
  childs: [
    {
      title: "Why Choose CustomerDLens?",
      points: [
        "Unified 360-Degree Customer View – See the full picture of every customer",
        "Real-Time Intelligence – Act instantly on new interactions and behaviors",
        "AI-Powered Personalization – Tailored experiences that truly convert",
        "Seamless Integrations – Easily connect your existing tech stack",
        "Built for Marketers, Analysts & CX Teams – No deep technical skills required",
      ],
    },
    {
      title: " Ideal For",
      points: [
        "Marketing Teams – Design targeted campaigns using intelligent",
        "CX Leaders – Improve retention with timely, personalized experiences",
        "Data Analysts – Discover patterns, trends, and actionable insights",
        "CRM Managers – Sync and maintain data consistency across tools",
        "E-commerce & B2C Brands – Enhance product recommendations and customer journeys",
      ],
    },
  ],
};

const features: ChildProps[] = [
  {
    title: "Unified Customer View",
    points: [
      "Consolidate customer data from CRM, ERP, email tools, and social media",
      "Get a single, comprehensive profile for every customer",
      "Understand the full customer lifecycle and interaction history",
    ],
  },
  {
    title: "Data Integration",
    points: [
      "100+ pre-built connectors for every data system",
      "Integrates with internal platforms, cloud tools, and third-party sources",
      "Low-code/no-code frameworks to reduce dependency on developers",
    ],
  },
  {
    title: "Data Cleansing",
    points: [
      "Remove duplicates, inconsistencies, and improve data quality",
      "Standardize customer data for reliability across systems",
      "Ensure high accuracy for analytics and personalization",
    ],
  },
  {
    title: "Segmentation & Targeting",
    points: [
      "Segment customers based on demographics, behavior, purchase history, etc.",
      "Use AI to identify lookalike audiences and high-value segments",
      "Create dynamic lists for targeted campaigns and outreach",
    ],
  },
  {
    title: "Personalized Marketing",
    points: [
      "AI-driven recommendations for content, product offers, and communication",
      "Real-time personalization across email, web, and in-app experiences",
      "Boost engagement, loyalty, and conversions with relevant messaging",
    ],
  },
  {
    title: "Real Time Data Processing",
    points: [
      "Instant analysis of user behavior and system events",
      "Switch to customer actions as they happen",
      "Stay agile with always-up-to-date customer insights",
    ],
  },
];

const featureSectionData = {
  title: "Key Features",
  subtitle:
    " Powerful Features That Turn Customer Data into Actionable Intelligence.",
  features: features,
};

const heroSectionProps: HeroSectionProps = {
  title: "360° Customer Intelligence for Personalization & Growth",
  subtitle:
    "Gain deeper insights, unify data, and deliver personalized experiences that boost engagement and loyalty — all powered by AI and real-time analytics.",
  logoDark: "assets/updated/customerDLensLogoDark.svg",
  logoLight: "assets/customerDlensLogo.svg",
  bannerImage: "assets/customerDlensDashboardPageImage.png",
  arrowIconLight: "assets/getInArrow.svg",
  arrowIconDark: "assets/updated/crossArrow.svg",
};

function CustomerDlens() {
  return (
    <>
      <Helmet>
        <title>CustomerDLens – AI Customer Data Platform (CDP)</title>
        <meta
          name="description"
          content="CustomerDLens is an AI-powered Customer Data Platform that unifies data and delivers real-time insights for segmentation, personalization, and customer growth."
        />
      </Helmet>
      <div className="bg-white dark:bg-black transition-all duration-500 ease-in">
        <HeroSection {...heroSectionProps} />
        <AboutSection
          title={aboutSectionData.title}
          subtitle={aboutSectionData.subtitle}
          desc={aboutSectionData.desc}
          childs={aboutSectionData.childs}
        />
        <FeaturesSection
          title={featureSectionData.title}
          subtitle={featureSectionData.subtitle}
          features={featureSectionData.features}
          type={"normal"}
        />
        <DashboardSection imageSrc={"assets/customerDash.png"} />
      </div>
    </>
  );
}

export default CustomerDlens;

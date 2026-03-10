import Header from "../../components/casestudies/Header";
import AtAGlance from "../../components/casestudies/AtGlance";
import Challenge from "../../components/casestudies/Challenge";
import OtherCaseStudies from "../../components/casestudies/OtherCaseStudies";
import OutcomesAndBenefits from "../../components/casestudies/OutcomesAndBenefits";
import TechUsed from "../../components/casestudies/TechUsed";
import SolutionList from "../../components/casestudies/SolutionList";
import PageTransition from "../../components/PageTransition";

const headerProps = {
  title: "Healthcare",
  subtitle:
    "Unified Patient Profile Platform for Smarter Clinical Decisions.",
  desc: "A leading healthcare ecosystem in Malaysia partnered with Mindgraph to build a Unified Patient 360 Platform that consolidates patient data across hospitals, clinics, wearable devices, and third-party systems. The goal was to enable real-time clinical insights, improve care coordination, and support data-driven treatment decisions.",
  bannerImage: "/assets/updated/HealthCare.png",
};

const glanceProps = {
  arrowLight: "/assets/arrow.svg",
  arrowDark: "/assets/updated/crossArrowWhite.svg",
  items: [
    {
      title: "Industry",
      value: "Healthcare & Life Sciences.",
    },
    {
      title: "What We Delivered",
      value: "Unified Patient 360 platform, AI risk scoring, real-time vitals integration, doctor dashboards.",
    },
    {
      title: "Solution",
      value: "AI-powered Unified Patient Profile & Clinical Intelligence Platform.",
    },
    {
      title: "Impact",
      value:
        "360° patient visibility, faster clinical decisions, improved preventive care.",
    },
    {
      title: "Key Challenges",
      value: "Fragmented patient data, inconsistent identity mapping, delayed insights.",
    },
  ],
};

const challengeProps = {
  title: "The Challenge",
  desc: "The healthcare ecosystem managed patient data across multiple facilities and digital sources, resulting in siloed information and inefficient care delivery. They faced challenges such as:",
  challenges: [
    "Patient data scattered across EMR, lab, pharmacy, and billing systems.",
    "No real-time integration of wearable device vitals.",
    "Inconsistent patient identity mapping across hospitals and clinics.",
    "Limited personalization in patient engagement.",
    "Manual reporting leading to delayed clinical insights."
  ],
  imageSrc: "/assets/health-care-challenge.png"
};

const outcomes = [
  "360° unified patient view across hospitals and clinics.",
  "30–40% reduction in duplicate diagnostics and tests.",
  "Faster clinical decision-making with real-time patient vitals.",
  "Improved preventive care and chronic disease management.",
  "Enhanced patient engagement through digital communication channels.",
  "A scalable platform enabling connected and intelligent care delivery."
];

const technologies = [
  "Cloud-based interoperable architecture.",
  "API-driven data ingestion & integration layer.",
  "Real-time data processing engine.",
  "AI analytics for predictive health insights.",
  "Role-based access control (Super Admin, Admin, Member).",
  "Secure healthcare data governance framework."
];

const solutionListProps = {
  subtitle:
    "Mindgraph designed and implemented a Unified Patient 360 Platform that delivers a single, real-time, intelligent view of each patient by integrating multiple healthcare systems and data streams.",
  items: [
    "Unified patient identity resolution across facilities.",
    "Integration with EMR, PMS, labs, pharmacy, and billing systems.",
    "Wearable device data integration for real-time vitals monitoring.",
    "AI-driven risk scoring and automated health alerts.",
    "Doctor dashboards with longitudinal patient health view.",
    "WhatsApp-based notifications and appointment reminders.",
    "Consent management and privacy governance framework."
  ],
};

function HealthCare() {
  return (
    <PageTransition>
      <div className="dark:bg-black">
        <div className="2xl-plus:max-w-9xl 2xl-plus:mx-auto">
          <Header {...headerProps} />
          <AtAGlance {...glanceProps} />
          <Challenge {...challengeProps} />
          <SolutionList {...solutionListProps} />
          <TechUsed items={technologies} />
          <OutcomesAndBenefits items={outcomes} />
          <OtherCaseStudies />
        </div>
      </div>
    </PageTransition>
  );
}

export default HealthCare;

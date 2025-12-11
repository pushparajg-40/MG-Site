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
    "Integrated Mobile Platform for National Employment & Upskilling—Enhancing Healthcare Workforce Access",
  desc: "Malaysia's national employment agency partnered with Mindgraph to build the MyFutureJobs Mobile App, aimed at improving job accessibility for all Malaysians—including healthcare professionals seeking placements, training, and upskilling.",
  bannerImage: "/assets/updated/HealthCare.png",
};

const glanceProps = {
  arrowLight: "/assets/arrow.svg",
  arrowDark: "/assets/updated/crossArrowWhite.svg",
  items: [
    {
      title: "Industry",
      value: "Healthcare Workforce & Public Services",
    },
    {
      title: "What We Delivered",
      value: "Real-time job matching, scalable mobile app, secure integrations",
    },
    {
      title: "Solution",
      value: "Mobile-first employment & upskilling platform",
    },
    {
      title: "Impact",
      value:
        "50,000+ downloads, 0.7M+ daily notifications, improved access for healthcare workers",
    },
    {
      title: "Key Challenges",
      value: "Fragmented job ecosystem, difficulty matching healthcare talent",
    },
  ],
};

const challengeProps = {
  title: "The Challenge",
  desc: "",
  challenges: [
    "Fragmented job search ecosystem",
    "Difficulty in matching healthcare workers to relevant roles",
    "Large-scale government systems not optimized for mobile-first users",
    "Needed secure and scalable architecture to support national rollout",
  ],
};

const outcomes = [
  "Empowered thousands of healthcare workers to access opportunities",
  "Real-time career guidance and upskilling pathways",
  "Nationwide adoption with stability under heavy loads",
  "Foundation for AI-driven healthcare talent matching in next phase",
];

const technologies = [
  "Native & hybrid mobile frameworks",
  "Secure authentication protocols",
  "API integration with national systems",
  "Cloud-based scalable backend",
];

const solutionListProps = {
  subtitle:
    "Mindgraph delivered a mobile-first digital employment platform with:",
  items: [
    "Real-time job matching & personalized recommendations",
    "Seamless integration with PERKESO backend systems",
    "High-throughput notification engine delivering 0.7M+ daily alerts",
    "Secure access and identity management",
    "Architecture designed for scale (over 50,000 downloads within six weeks)",
  ],
};

function HealthCare() {
  return (
    <PageTransition>
      <div className="dark:bg-black">
        <Header {...headerProps} />
        <AtAGlance {...glanceProps} />
        <Challenge {...challengeProps} />
        <SolutionList {...solutionListProps} />
        <TechUsed items={technologies} />
        <OutcomesAndBenefits items={outcomes} />
        <OtherCaseStudies />
      </div>
    </PageTransition>
  );
}

export default HealthCare;

import AtAGlance from "../../components/casestudies/AtGlance";
import Challenge from "../../components/casestudies/Challenge";
import Solution from "../../components/casestudies/Solution";
import TechnologiesUsed from "../../components/casestudies/TechnologyUsed";
import OutcomesAndBenefits from "../../components/casestudies/OutcomesAndBenefits";
import OtherCaseStudies from "../../components/casestudies/OtherCaseStudies";
import Header from "../../components/casestudies/Header";
import PageTransition from "../../components/PageTransition";

const headerProps = {
  title: "BFSI (Banking & Financial Services)",
  subtitle: "AI-Driven Loan Origination & Collection Optimization",
  desc: "A fast-growing lender needed intelligent models to improve loan conversion and reduce collection losses across their retail and SME loan portfolio.",
  bannerImage: "/assets/updated/BFSI.png",
};

const glanceProps = {
  arrowLight: "/assets/arrow.svg",
  arrowDark: "/assets/updated/crossArrowWhite.svg",
  items: [
    {
      title: "Industry",
      value: "Banking, Lending, Risk Management",
    },
    {
      title: "What We Delivered",
      value: "Relevancy scoring model, DPD prediction model",
    },
    {
      title: "Solution",
      value: "AI-powered Loan Origination & Collection Models",
    },
    {
      title: "Impact",
      value:
        "Higher conversions, 5% loss reduction, improved portfolio quality",
    },
    {
      title: "Key Challenges",
      value: "FIFO underwriting, missed high-value customers, rising DPD risk",
    },
  ],
};

const challengeProps = {
  title: "The Challenge",
  desc: "",
  challenges: [
    "Underwriters processed loan applications in FIFO mode",
    "High-value applications were getting delayed, leading to lost customers",
    "Collections teams lacked early warnings before loans went into high DPD brackets",
    "Needed ML-driven strategy to reduce NPA risk",
  ],
};

const items = [
  {
    id: 1,
    title: "Loan Origination – Relevancy Score Model",
    content: [
      "ML model that ranks all loan applications by portfolio fit",
      "Underwriters prioritize high-value customers",
      "Integrates with AWS Redshift & PowerBI dashboards",
    ],
  },
  {
    id: 2,
    title: "Loan Collection – DPD Movement Prediction Model",
    content: [
      "ML model that ranks all loan applications by portfolio fit",
      "Underwriters prioritize high-value customers",
      "Integrates with AWS Redshift & PowerBI dashboards",
    ],
  },
];

const outcomes = [
  " Higher loan conversion from targeted origination",
  "Early collection action reducing losses by ~5%",
  "Greater operational efficiency for underwriters and collections",
  "Improved portfolio health and reduced credit risk",
];

export default function BankingServices() {
  return (
    <PageTransition>
      <div className="dark:bg-black">
        <Header {...headerProps} />
        <AtAGlance {...glanceProps} />
        <Challenge {...challengeProps} />
        <Solution items={items} desc="" />
        <TechnologiesUsed />
        <OutcomesAndBenefits items={outcomes} />
        <OtherCaseStudies />
      </div>
    </PageTransition>
  );
}

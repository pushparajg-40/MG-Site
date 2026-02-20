import OutcomesAndBenefits from "../../components/casestudies/OutcomesAndBenefits";
import TechUsed from "../../components/casestudies/TechUsed";
import SolutionList from "../../components/casestudies/SolutionList";
import PageTransition from "../../components/PageTransition";
import type { OurRoleProps } from "../../components/product/OurRole";
import OurRole from "../../components/product/OurRole";
import Header from "../../components/product/Header";
import HeaderHeroSection from "../../components/product/HeaderHeroSection";

const headerProps = {
  title: "Regology",
  subtitle: "Regulatory Intelligence at Scale",
  subcaption: "Overview",
  desc: "Regology is a global leader in regulatory intelligence, helping organizations stay ahead in a complex and rapidly evolving compliance landscape. As a trusted marketing and implementation partner, Mindgraph helps enterprises fully leverage Regology’s AI-powered regulatory content and insights platform.",
  bannerImage: "/assets/regulatory-intelligence.png",
};

const headerHeroSection = {
  bannerTitle: "Our Strategic Partnerships",
  bannerImage: "/assets/strategic-partnerships.png",
  sectionTitle: "Powering Scalable, Intelligent, and Compliant Digital Solutions",
  description: "At Mindgraph, our partnerships with leading technology and domain experts enable us to deliver high-impact, future-ready solutions. From regulatory intelligence and CRM transformation to AI, cloud, and enterprise modernization—our partner ecosystem strengthens our ability to drive innovation, performance, and compliance across industries.",
};

const ourRoleProps: OurRoleProps = {
  title: "Our Role",
  value:
    "We drive adoption and value realization for Regology customers across industries by offering:",
  items: [
    "Strategic positioning and GTM enablement.",
    "Solution marketing and implementation support.",
    "Industry-specific regulatory transformation roadmaps.",
  ],
};

const businessUseCases = [
  "Regulatory change management.",
  "Risk and compliance monitoring.",
  "ESG and sustainability reporting.",
  "Cybersecurity and data privacy compliance.",
  "Enterprise governance and audit readiness.",
];

const valueProposition = [
  "Solution marketing for BFSI, ESG, Cybersecurity, and Data Privacy.",
  "Integration with enterprise systems (GRC, CRM, data platforms).",
  "Custom dashboards, analytics, and compliance workflows.",
  "Strategic advisory for enterprise compliance transformation.",
];

const solutionListProps = {
  title: "Key Capabilities",
  subtitle: "",
  items: [
    "Global regulatory change intelligence.",
    "AI-driven identification of regulatory obligations.",
    "Real-time compliance alerts.",
    "Structured, audit-ready regulatory content.",
    "End-to-end traceability and reporting.",
  ],
};

function Regology() {
  return (
    <PageTransition>
      <div className="dark:bg-black ">
        <div className="2xl-plus:max-w-9xl 2xl-plus:mx-auto">
          <HeaderHeroSection {...headerHeroSection} />
          <Header {...headerProps} />
          <OurRole {...ourRoleProps} />
          <SolutionList {...solutionListProps} />
          <TechUsed
            title="Mindgraph Value Proposition"
            items={valueProposition}
          />
          <OutcomesAndBenefits
            title="Business Use Cases"
            items={businessUseCases}
          />
        </div>
      </div>
    </PageTransition>
  );
}

export default Regology;

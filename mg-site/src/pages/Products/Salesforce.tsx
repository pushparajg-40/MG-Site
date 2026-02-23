import OutcomesAndBenefits from "../../components/casestudies/OutcomesAndBenefits";
import TechUsed from "../../components/casestudies/TechUsed";
import SolutionList from "../../components/casestudies/SolutionList";
import PageTransition from "../../components/PageTransition";
import type { OurRoleProps } from "../../components/product/OurRole";
import OurRole from "../../components/product/OurRole";
import Header from "../../components/product/Header";
import HeaderHeroSection from "../../components/product/HeaderHeroSection";

const headerProps = {
  title: "Salesforce",
  subtitle: "Smart Customer Engagement.",
  subcaption: "Overview",
  desc: "Salesforce is the world’s #1 CRM platform, empowering organizations to accelerate growth through intelligent automation and personalized engagement. As a Salesforce solution and marketing partner, Mindgraph enables organizations to unlock the full business value of Salesforce Cloud platforms.",
  bannerImage: "/assets/salesforce.png",
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
    "We align Salesforce capabilities with strategic business goals through:",
  items: [
    "Storytelling, use case-driven solutioning.",
    "Value-focused GTM and sales enablement.",
    "Industry-specific Salesforce positioning.",
  ],
};

const businessUseCases = [
  "Sales pipeline optimization and revenue growth.",
  "Customer acquisition and lifecycle engagement.",
  "Marketing automation and hyper-personalization.",
  "Customer service modernization.",
  "Enterprise CRM transformation.",
];

const valueProposition = [
  "Industry-specific solution narratives and accelerators.",
  "AI and GenAI extensions on Salesforce.",
  "Integration with CDPs, data platforms, and enterprise apps.",
  "Strategy-to-execution support for CRM success.",
];

const solutionListProps = {
  title: "Key Capabilities",
  subtitle: "",
  items: [
    "Sales Cloud, Service Cloud, and Marketing Cloud enablement.",
    "Customer 360 for unified experience management.",
    "AI-driven insights via Salesforce Einstein.",
    "Scalable, compliant CRM architecture.",
  ],
};

function Salesforce() {
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

export default Salesforce;

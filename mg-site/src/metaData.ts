export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
}

export type SeoMetaMap = Record<string, SeoMeta>;

export const SEO_METADATA: SeoMetaMap = {
  "/": {
    title: "AI Enterprises Company | Innovate with Mind Graph",
    description:
      "Empower your business with a top AI enterprises company. Mind Graph delivers cutting-edge IT solutions to accelerate your growth. Get started today!",
    keywords: "AI Enterprises company",
  },
  "/artificial": {
    title: "Artificial Intelligence Solutions | Mind Graph AI",
    description:
      "Unlock innovation with advanced artificial intelligence solutions from Mind Graph. Boost efficiency, automate processes, and scale your business today!",
    keywords: "artificial intelligence solutions",
  },
  "/digitalization": {
    title: "Digital Transformation Services | Mind Graph",
    description:
      "Accelerate growth with expert digital transformation services from Mind Graph. Optimize operations, innovate faster, and lead your industry—start today!",
    keywords: "digital transformation services",
  },
  "/automation": {
    title: "Business Process Automation Solutions | Mind Graph",
    description:
      "Streamline operations with powerful business process automation solutions from Mind Graph. Boost productivity and reduce costs—automate your success today!",
    keywords: "business process automation solutions",
  },
  "/enterprises": {
    title: "Enterprise AI Services | Transform with Mind Graph",
    description:
      "Empower your business with advanced enterprise AI services from Mind Graph. Drive innovation, efficiency, and growth—start your AI transformation today!",
    keywords: "enterprise ai services",
  },
  "/aboutUs": {
    title: "Mind-Graph | Leading AI Solution Company",
    description:
      "Learn about Mind-Graph, a top AI solution company driving innovation with AI, machine learning, and data intelligence to empower smarter business decisions.",
    keywords: "AI Solution company",
  },
  "/customerDlens": {
    title: "CustomerDLens – AI Customer Data Platform (CDP)",
    description:
      "CustomerDLens is an AI-powered Customer Data Platform that unifies data and delivers real-time insights for segmentation, personalization, and customer growth.",
    keywords: "Customer Data Platform",
  },
  "/mathops": {
    title: "MathOps – AI-Powered AIOps Platform for IT Operations",
    description:
      "MathOps is an AI-powered AIOps platform offering real-time monitoring, predictive analytics, and intelligent automation to reduce downtime and optimize IT operations.",
    keywords: "AIOps Platform",
  },
  "/opsbeat": {
    title: "OpsBeat – AI-Powered IT Service Management (ITSM) Platform",
    description:
      "OpsBeat is an AI-powered ITSM platform offering low-code workflows, smart automation, multichannel support, and real-time dashboards to streamline IT service operations.",
    keywords: "IT Service Management",
  },
  "/optiSaas": {
    title: "OptiSaaSAI – AI-Powered SaaS Management Platform",
    description:
      "OptiSaaSAI is an AI-powered SaaS management platform offering analytics, automation, integrations, and insights to streamline workflows and reduce business costs.",
    keywords: "SaaS Management Platform",
  },
  "/smartSustain": {
    title: "SmartSustain.AI – AI-Powered ESG Management Platform",
    description:
      "SmartSustain.AI is an AI-powered ESG management platform that tracks emissions, benchmarks performance, and aligns reporting with GRI and ISSB standards in real time.",
    keywords: "ESG Platform",
  },
};

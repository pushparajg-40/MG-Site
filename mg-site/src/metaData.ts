export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
}

export type SeoMetaMap = Record<string, SeoMeta>;

export const SEO_METADATA: SeoMetaMap = {
  // Home
  "/": {
    title: "AI Enterprises Company | Innovate with Mind Graph",
    description:
      "Empower your business with a top AI enterprises company. Mind Graph delivers cutting-edge IT solutions to accelerate your growth. Get started today!",
    keywords: "AI Enterprises company",
  },

  // About us
  "/aboutUs": {
    title: "Mind-Graph | Leading AI Solution Company",
    description:
      "Learn about Mind-Graph, a top AI solution company driving innovation with AI, machine learning, and data intelligence to empower smarter business decisions.",
    keywords: "AI Solution company",
  },

  // Services
  "/AI&DI_Services": {
    title: "AI & Data Intelligence Services | Mindgraph",
    description:
      "Unlock the power of data with AI, ML, analytics, and cloud-native solutions. Mindgraph helps enterprises drive smarter decisions and digital growth.",
    keywords: "AI & Data Intelligence Services",
  },
  "/AppDevServices": {
    title: "Application Development Services | Mindgraph",
    description:
      "Custom web, mobile, and enterprise app development with agile delivery, UI/UX design, and cloud-native architecture to accelerate digital growth.",
    keywords: "Application Development Services",
  },
  "/CloudInfrastructureServices": {
    title: "Cloud Infrastructure Services | Mindgraph",
    description:
      "Secure, scalable cloud solutions across AWS, Azure & GCP. Mindgraph delivers migration, automation, monitoring, and cost optimization services.",
    keywords: "Cloud Infrastructure Services",
  },
  "/Consulting&AdvisoryServices": {
    title: "Consulting & Advisory Services | Mindgraph",
    description:
      "Digital transformation, AI strategy, risk management & ESG consulting. Mindgraph helps enterprises align technology with business goals.",
    keywords: "Consulting & Advisory Services",
  },
  "/CRM&ERPServices": {
    title: "CRM & ERP Implementation Services | Mindgraph",
    description:
      "Implement Salesforce, SAP, Oracle & Dynamics CRM/ERP solutions with automation, integration, and analytics to improve efficiency and growth.",
    keywords: "CRM & ERP Implementation Services",
  },
  "/SapEnterpriseServices": {
    title: "SAP Enterprise Services | Mindgraph",
    description:
      "SAP S/4HANA migration, AMS support, BASIS, cloud hosting & optimization. Mindgraph delivers secure, scalable SAP enterprise solutions.",
    keywords: "SAP Enterprise Services",
  },

  // Enterprise Solutions
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
  "/smartSustain": {
    title: "SmartSustain.AI – AI-Powered ESG Management Platform",
    description:
      "SmartSustain.AI is an AI-powered ESG management platform that tracks emissions, benchmarks performance, and aligns reporting with GRI and ISSB standards in real time.",
    keywords: "ESG Platform",
  },
  "/optiSaas": {
    title: "OptiSaaSAI – AI-Powered SaaS Management Platform",
    description:
      "OptiSaaSAI is an AI-powered SaaS management platform offering analytics, automation, integrations, and insights to streamline workflows and reduce business costs.",
    keywords: "SaaS Management Platform",
  },

  // Industries
  "/Energy_Utilities": {
    title: "Energy & Utilities ESG Platform | Mindgraph",
    description:
      "AI-driven ESG platform for energy & infrastructure projects, enabling transparent reporting, investor dashboards, and scalable sustainability insights.",
    keywords: "Energy & Utilities ESG Platform",
  },
  "/Aviation_Transports": {
    title: "Airport Data & AI Forecasting Solutions | Mindgraph",
    description:
      "Unified airport data platform with AI passenger forecasting to improve analytics, reduce costs, and enhance ESG-aligned operational efficiency.",
    keywords: "Airport Data & AI Forecasting Solutions",
  },
  "/telecom": {
    title: "Telecom Data & Analytics Solutions | Mindgraph",
    description:
      "Retrieving data. Wait a few seconds and try to cut or copy again.",
    keywords: "Telecom Data & Analytics Solutions",
  },
  "/Healthcare": {
    title: "Healthcare Workforce Platform | Mindgraph",
    description:
      "Mobile-first employment platform enabling real-time job matching, secure integrations, and scalable access for healthcare workforce nationwide.",
    keywords: "Healthcare Workforce Platform",
  },
  "/BFSI": {
    title: "AI Loan Origination & Collection | Mindgraph",
    description:
      "AI-powered loan origination and DPD prediction models to boost conversions, reduce losses, and improve portfolio quality in banking & lending.",
    keywords: "AI Loan Origination & Collection",
  },
  "/Manufacturing": {
    title: "AI Jewelry Design Platform | Mindgraph",
    description:
      "GenAI-powered jewelry design platform accelerating creativity, reducing ideation time, and enabling AI-driven innovation in manufacturing.",
    keywords: "AI Jewelry Design Platform",
  },
};

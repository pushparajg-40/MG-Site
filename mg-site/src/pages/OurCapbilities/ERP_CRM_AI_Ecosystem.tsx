import OfferCard from "../../components/OfferCard";
import StrengthCard from "../../components/StrengthCard";

const offerCardsData = [
  {
    number: "01",
    title: "Salesforce, Zoho, and Microsoft Dynamics CRM Integration",
    description:
      "Custom configuration and end-to-end CRM integration for marketing, sales, and customer support.",
    image: "assets/erpOffer1.png",
  },
  {
    number: "02",
    title: "SAP, Oracle, and Microsoft Dynamics ERP Implementation & Upgrades",
    description:
      "Full-cycle ERP services including design, data migration, custom modules, and cloud/hybrid upgrades.",
    image: "assets/erpOffer2.png",
  },
  {
    number: "03",
    title: "AI-Enabled Dashboards & Process Automation",
    description:
      "Smart dashboards, predictive insights, and AI workflows to automate approvals, forecasting, and exceptions.",
    image: "assets/erpOffer3.png",
  },
  {
    number: "04",
    title: "Workflow Design, Data Synchronization & Reporting Intelligence",
    description:
      "Cross-platform workflows, real-time ERP-CRM data sync, and unified reporting with actionable insights.",
    image: "assets/erpOffer4.png",
  },
  {
    number: "05",
    title: "User Training, Change Management & SLA-Based Support",
    description:
      "Enablement programs to onboard teams, drive adoption, and ensure ongoing performance under SLAs.",
    image: "assets/erpOffer5.png",
  },
];

const strengthCardsData = [
  {
    title: "Deep Expertise in ERP–CRM–AI Integration",
    description:
      "Proven ability to connect enterprise platforms with minimal disruption, ensuring seamless data flow and operational harmony.",
    image: "assets/erpKey1.png",
  },
  {
    title: "Industry-Specific Prebuilt Workflows",
    description:
      "Accelerators tailored for industries such as BFSI, healthcare, manufacturing, and retail to reduce implementation time and enhance value realization.",
    image: "assets/erpKey2.png",
  },
  {
    title: "Customer 360 & Operational Visibility Solutions",
    description:
      "Unified views of customer journeys, financial performance, and supply chain operations for better planning and responsiveness.",
    image: "assets/erpKey3.png",
  },
  {
    title: "End-to-End Ownership from Setup to Optimization",
    description:
      "We take full responsibility from planning and deployment to continuous improvement, ensuring your enterprise ecosystem evolves with your business needs.",
    image: "assets/erpKey4.png",
  },
];

function ERP_CRM_AI_Ecosystem() {
  return (
    <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
      <section className="relative bg-white pt-16 pb-12 md:pb-32 dark:bg-[#000000] transition-all duration-500 ease-in">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10">
            <h1 className="md:text-5xl text-4xl font-bold text-[#1783F7] dark:text-white mb-4 px-4">
              ERP, CRM & AI Ecosystem
            </h1>
            <div className="md:hidden">
              <img
                src="assets/erpOverview.png"
                alt="AI chip"
                className="w-full h-auto object-cover max-h-[400px] lg:max-h-none"
              />
            </div>
            <h2 className="md:text-lg text-3xl font-semibold text-[#1783F7] dark:text-white mb-2 px-4 mt-6 md:mt-0">
              Overview
            </h2>

            <p className="text-[#667085] dark:text-white leading-relaxed text-sm sm:text-base px-4">
              In today’s fast-paced digital economy, organizations require more
              than just standalone systems — they need a connected ecosystem
              that seamlessly unifies operations, customer engagement, and data
              intelligence. Mindgraph specializes in building integrated
              enterprise platforms by aligning ERP and CRM systems with
              intelligent automation and AI-driven insights. From implementation
              to continuous optimization, we help businesses unlock the full
              potential of their enterprise technology stack — enabling
              data-driven decisions, streamlined operations, and personalized
              customer experiences across all touchpoints.{" "}
            </p>
          </div>

          <div className="relative lg:absolute top-10 right-0 w-full lg:w-[48%] z-0 hidden md:block">
            <img
              src="assets/erpOverview.png"
              alt="AI chip"
              className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[400px] lg:max-h-none xl:h-[31rem]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EFFBFF] dark:bg-[#181818] py-6 md:py-20 md:px-6 transition-all duration-500 ease-in">
        <div className="max-w-7xl mx-auto">
          <div className="px-6">
            <h3 className="text-2xl font-semibold text-[#1783F7] dark:text-white mb-2">
              What We Offer
            </h3>
            <p className="text-[#667085] dark:text-white mb-10">
              We provide a wide range of AI-driven services and solutions
              tailored to meet the unique challenges of modern enterprises
            </p>
          </div>
          <div className="px-4 md:px-4 lg:px-16">
            <div className="space-y-0 divide-y divide-[#C8C7CC] border-t border-[#C8C7CC]">
              {offerCardsData.map((card, idx) => (
                <OfferCard
                  key={idx}
                  number={card.number}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-[200px] px-4 md:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center md:justify-start">
            <h2 className="text-2xl font-semibold text-[#1783F7] dark:text-white mb-10">
              Key Strengths
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {strengthCardsData.map((card, idx) => (
              <StrengthCard
                key={idx}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>

          <div className="border-t border-[#C8C7CC] mt-16 dark:border-[#FFFFFF] dark:opacity-[40%]"></div>
        </div>
      </section>
    </div>
  );
}
export default ERP_CRM_AI_Ecosystem;

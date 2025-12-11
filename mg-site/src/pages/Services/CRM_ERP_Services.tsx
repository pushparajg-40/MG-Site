import ChildHeroBanner from "../../components/ChildsHeroBanner";
import PageTransition from "../../components/PageTransition";
import ServiceSection from "../../components/ServiceSection";
import WhyChooseUsCard from "../../components/WhyChooseUsCard";

const serviceSectionDescription =
  "Our service portfolio covers the entire lifecycle of CRM and ERP systems—from planning and deployment to customization and ongoing enhancement";
const serviceFeatures = [
  {
    title: "CRM Implementation (Salesforce, Zoho, Microsoft Dynamics)",
    description:
      "Configure and deploy customer relationship platforms to enhance sales productivity, streamline service delivery, and personalize marketing.",
    icon: "/assets/crmIcon1.svg",
    iconDark: "/assets/updated/crmIcon1Dark.svg",
  },
  {
    title: "ERP Deployment (SAP, Oracle, Microsoft Dynamics)",
    description:
      "Set up and customize robust ERP systems for finance, HR, procurement, and supply chain—aligned with your industry-specific processes.",
    icon: "/assets/crmIcon2.svg",
    iconDark: "/assets/updated/crmIcon2Dark.svg",
  },
  {
    title: "Custom Module Development & Process Automation",
    description:
      "Tailor CRM/ERP systems with business-specific modules and automation workflows that reduce manual effort and increase accuracy.",
    icon: "/assets/crmIcon3.svg",
    iconDark: "/assets/updated/crmIcon3Dark.svg",
  },
  {
    title: "Data Integration & Workflow Optimization",
    description:
      "Connect siloed systems, automate repetitive tasks, and design efficient workflows that drive data consistency and cross-functional collaboration.",
    icon: "/assets/crmIcon4.svg",
    iconDark: "/assets/updated/crmIcon4Dark.svg",
  },
  {
    title: "User Training, System Migration & Post-Launch Support",
    description:
      "Deliver structured user onboarding, seamless data migration, and long-term support to ensure adoption, performance, and system continuity.",
    icon: "/assets/crmIcon5.svg",
    iconDark: "/assets/updated/crmIcon5Dark.svg",
  },
];

const capabilityItems = [
  {
    title: "Sales, Service & Marketing Automation",
    description:
      "Design and implement end-to-end customer journeys—from lead capture to deal closure and after-sales support—backed by intelligent automation.",
    icon: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "End-to-End Enterprise Function Transformation",
    description:
      "Reimagine core functions like finance, human resources, procurement, inventory, and supply chain with integrated ERP workflows and reporting.",
    icon: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Real-Time Dashboards & Business Analytics",
    description:
      "Build interactive dashboards and KPI tracking tools for real-time decision-making across departments and leadership.",
    icon: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "API Integration & Cross-Platform Data Sync",
    description:
      "Enable smooth data flow between CRM, ERP, BI tools, customer portals, and external applications using modern APIs and integration platforms.",
    icon: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
];

const whyChooseUsCards = [
  {
    number: 1,
    title: "End-to-End CRM & ERP Delivery Expertise",
    description:
      "From discovery and roadmap planning to go-live and optimization, we provide a full lifecycle service with dedicated domain specialists.",
    image: "/assets/crm1.png",
  },
  {
    number: 2,
    title: "Tailored Workflows Aligned with Business Needs",
    description:
      "No one-size-fits-all. Our solutions are designed around your unique processes, team structures, and growth goals.",
    image: "/assets/crm2.png",
  },
  {
    number: 3,
    title: "Seamless Integration with Cloud, Data & AI Ecosystems",
    description:
      "We connect your CRM and ERP systems with modern cloud platforms and analytics tools to enable data-driven operations.",
    image: "/assets/crm3.png",
  },
  {
    number: 4,
    title: "SLA-Backed Support & Continuous Optimization",
    description:
      "We stay with you post-deployment—offering performance monitoring, change management, upgrades, and SLA-based technical support.",
    image: "/assets/crm4.png",
  },
];

// capabilitiesCrm

function CRM_ERP_Services() {
  return (
    <PageTransition>
      <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
        <ChildHeroBanner
          title="CRM & ERP"
          image="/assets/crmServicebanner.png"
          type="service"
        />

        <section className="relative bg-white dark:bg-black pb-12 px-4 sm:px-8 lg:px-16 transition-all duration-500 ease-in">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
              <h2 className="text-blue-600 dark:text-white text-xl font-semibold mb-4">
                Overview
              </h2>
              <p className="text-[#667085] dark:text-white text-base leading-relaxed">
                At Mindgraph, we empower organizations to bridge the gap between
                customer experience and operational efficiency with seamlessly
                integrated CRM and ERP solutions. By unifying front-office
                engagement and back-office processes, we help businesses unlock
                greater visibility, efficiency, and agility across their
                operations. From implementation to long-term optimization, we
                provide full-spectrum support across industry-leading platforms
                like Salesforce, Zoho, Microsoft Dynamics, SAP, and Oracle.
              </p>
            </div>

            <div className="md:w-1/2 mt-0 md:-mt-20 z-20 order-1 md:order-2">
              <img
                src="/assets/crmOverview.png"
                alt="AI Illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>

        <ServiceSection
          features={serviceFeatures}
          serviceSectionDescription={serviceSectionDescription}
        />

        <section className="py-16 px-4 sm:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1783F7] dark:text-white mb-2">
              Key Capabilities
            </h2>
            <p className="text-[#667085] dark:text-white text-base sm:text-lg xl:pr-[400px]">
              Our domain expertise and technical flexibility enable us to
              deliver CRM and ERP solutions that are scalable, secure, and
              results-oriented
            </p>

            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:-mt-20 z-10 md:hidden">
              <div className="max-w-sm lg:max-w-md overflow-hidden bg-white px-[20px] mt-[10px]">
                <img
                  src="/assets/capabilitiesCrmUpdated.png"
                  alt="AI Hand"
                  className="md:w-full md:h-auto object-cover aspect-square"
                />
              </div>
            </div>

            <div className="relative max-w-7xl mx-auto bg-[#F8FBFE] dark:bg-[#181818] transition-all duration-500 ease-in p-6 sm:p-10 flex flex-col lg:flex-row items-start gap-10 mt-[20px]">
              <div className="w-full lg:w-2/3 space-y-8 lg:pr-[50px]">
                {capabilityItems.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <img
                      src="assets/arrow.svg"
                      className="mt-1 theme-image"
                      data-light="assets/arrow.svg"
                      data-dark="assets/updated/crossArrowWhite.svg"
                      alt=""
                    />
                    <div className="ml-2">
                      <h3 className="text-lg font-semibold text-[#687DA9] dark:text-white flex items-center gap-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#667085] dark:text-white mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:-mt-20 z-10 hidden md:flex">
                <div className="max-w-sm lg:max-w-md overflow-hidden bg-white">
                  <img
                    src="/assets/capabilitiesCrmUpdated.png"
                    alt="AI Hand"
                    className="md:w-full md:h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-8 lg:px-20 text-center">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1783F7] dark:text-white mb-2">
              Why Choose Us
            </h2>
            <p className="text-gray-600 dark:text-white text-base sm:text-lg">
              Mindgraph is your trusted partner for digital operations
              transformation—backed by technical excellence and a deep
              understanding of business processes:
            </p>
          </div>
          <div
            className="relative overflow-x-auto scroll-smooth lg:grid lg:grid-cols-4 gap-12 lg:gap-4 px-4 py-4 z-10 flex"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="absolute top-[236px] left-0 right-0 h-0.5 bg-[#C8C7CC] opacity-40 z-0 mx-[55px] lg:mx-[30px] pointer-events-none"></div>

            {whyChooseUsCards.map((card) => (
              <WhyChooseUsCard
                key={card.number}
                number={card.number}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
          <div className="border-t mt-16 mb-6 max-w-7xl mx-auto bg-[#C8C7CC]"></div>
          <div className="mt-12">
            <p className="text-[#687DA9] dark:text-white text-3xl mb-2 md:px-[150px]">
              Modernize how you engage customers and manage operations
            </p>
            <p className="text-[#1783F7] dark:text-white font-semibold text-2xl md:px-[150px]">
              Partner with MindGraph to implement CRM and ERP solutions that
              scale with your business and evolve with your needs.
            </p>
          </div>
          <div className="border-t mt-12 mb-6 max-w-7xl mx-auto"></div>
        </section>
      </div>
    </PageTransition>
  );
}

export default CRM_ERP_Services;

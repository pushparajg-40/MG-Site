import ChildHeroBanner from "../../components/ChildsHeroBanner";
import ServiceSection from "../../components/ServiceSection";
import WhyChooseUsCard from "../../components/WhyChooseUsCard";

const serviceSectionDescription =
  "Our comprehensive SAP services are tailored to meet the unique demands of both mid-sized enterprises and global corporations";

const serviceFeatures = [
  {
    title: "SAP Application Management Services (AMS)",
    description:
      "End-to-end support and maintenance of SAP systems with dedicated teams ensuring continuous operations, issue resolution, and enhancement delivery.",
    icon: "/assets/sapIcon1.svg",
    iconDark: "/assets/updated/sap1Dark.svg",
  },
  {
    title: "SAP BASIS & HANA DB Administration",
    description:
      "Expert administration of SAP BASIS components and HANA database to maintain system stability, ensure data integrity, and optimize performance.",
    icon: "/assets/sapIcon2.svg",
    iconDark: "/assets/updated/sap2Dark.svg",
  },
  {
    title: "SAP S/4HANA Migration & Readiness Consulting",
    description:
      "Strategic assessment, planning, and execution for migrating from ECC to S/4HANA, including system conversion, greenfield, or brownfield approaches.",
    icon: "/assets/sapIcon3.svg",
    iconDark: "/assets/updated/sap3Dark.svg",
  },
  {
    title: "Cloud Hosting & Infrastructure Optimization",
    description:
      "Design and deployment of SAP environments on AWS, Azure, or private cloud platforms—ensuring high availability, scalability, and cost efficiency.",
    icon: "/assets/sapIcon4.svg",
    iconDark: "/assets/updated/sap4Dark.svg",
  },
  {
    title: "User Enablement, Performance Tuning & Enhancements",
    description:
      "Comprehensive user training, proactive system performance tuning, and the development of custom enhancements to align SAP with evolving business needs.",
    icon: "/assets/sapIcon5.svg",
    iconDark: "/assets/updated/sap5Dark.svg",
  },
];

const capabilityItems = [
  {
    title: "Full-Suite SAP Module Expertise",
    description:
      "Functional and technical support across core SAP modules such as FICO (Finance & Controlling), MM (Materials Management), SD (Sales & Distribution), HR, and SuccessFactors.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Cloud-Native SAP Deployments",
    description:
      "SAP architecture planning, deployment, and lifecycle management on cloud platforms like AWS and Azure, with automated scaling and backup strategies",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Compliance & Regulatory-Ready Configurations",
    description:
      "Implementation of best practices to ensure your SAP systems adhere to industry regulations (e.g., GDPR, HIPAA, SOX) and audit readiness",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "AI-Enhanced SAP Analytics",
    description:
      "Integration of artificial intelligence and predictive analytics into SAP dashboards and Fiori apps to enable smarter decision-making and business visibility",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
];

const whyChooseUsCards = [
  {
    number: 1,
    image: "/assets/sap1.png",
    title: "Certified SAP Experts Across Industries",
    description:
      "SAP-certified consultants with experience in manufacturing, retail, healthcare, and finance.",
  },
  {
    number: 2,
    image: "/assets/sap2.png",
    title: "Cloud-Native SAP Operations & 24/7 Support",
    description:
      "Always-on monitoring, DevOps-enabled management, and real-time SAP maintenance.",
  },
  {
    number: 3,
    image: "/assets/sap3.png",
    title: "Optimized System Landscapes",
    description:
      "High-performance SAP environments with failover and disaster recovery strategies.",
  },
  {
    number: 4,
    image: "/assets/sap4.png",
    title: "Predictable SLAs & Proactive Management",
    description:
      "Defined SLAs, automated ticketing, and proactive incident resolution strategies.",
  },
];

function SapService() {
  return (
    <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
      <ChildHeroBanner
        title="SAP Enterprise"
        image="/assets/sapSericeBanner.png"
        type="service"
      />

      <section className="relative bg-white dark:bg-black pb-12 px-4 sm:px-8 lg:px-16 transition-all duration-500 ease-in">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
            <h2 className="text-blue-600 dark:text-white text-xl font-semibold mb-4">
              Overview
            </h2>
            <p className="text-[#667085] dark:text-white text-base leading-relaxed">
              At Mindgraph, we specialize in delivering robust SAP enterprise
              solutions that drive operational efficiency, business agility, and
              digital innovation. Our SAP services portfolio spans consulting,
              implementation, upgrades, and managed support—ensuring that your
              SAP landscape remains optimized, secure, and future-ready. Whether
              you're embarking on an SAP S/4HANA transformation, enhancing your
              existing modules, or migrating to the cloud, we provide the
              expertise and frameworks needed for seamless execution and
              long-term success.
            </p>
          </div>

          <div className="md:w-1/2 mt-0 md:-mt-20 z-20 order-1 md:order-2">
            <img
              src="/assets/sapOverview.png"
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
            We combine technical depth and industry-specific insights to deliver
            value across the SAP ecosystem
          </p>

          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:-mt-20 z-10 md:hidden">
            <div className="max-w-sm lg:max-w-md overflow-hidden bg-white px-[20px] mt-[10px]">
              <img
                src="/assets/capabilitesSap.png"
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
                  src="/assets/capabilitesSap.png"
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
            Mindgraph brings together deep SAP expertise, proven delivery
            models, and a customer-first mindset
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
          <p className="text-[#687DA9] dark:text-white text-3xl mb-2 md:px-[100px]">
            Future-proof your SAP investments with Mindgraph’s expert-led
            services.
          </p>
          <p className="text-[#1783F7] dark:text-white font-semibold text-2xl md:px-[150px]">
            From strategic transformation to continuous support—we help you
            harness the full potential of SAP
          </p>
        </div>
        <div className="border-t mt-12 mb-6 max-w-7xl mx-auto"></div>
      </section>
    </div>
  );
}

export default SapService;

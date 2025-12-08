import ChildHeroBanner from "../../components/ChildsHeroBanner";
import ServiceSection from "../../components/ServiceSection";
import WhyChooseUsCard from "../../components/WhyChooseUsCard";

const serviceSectionDescription =
  "Our consulting services are designed to empower organizations with the clarity, direction, and tools needed to succeed in a dynamic digital world";

const serviceFeatures = [
  {
    title: "Digital Transformation Consulting",
    description:
      "End-to-end advisory for digital reinvention—covering business process optimization, operating model shifts, and organizational agility.",
    icon: "/assets/consultancyIcon1.svg",
    iconDark: "/assets/updated/consultancy3Dark.svg",
  },
  {
    title: "AI & Data Strategy Development",
    description:
      "Define the vision, governance, and roadmap to turn data into a strategic asset and drive competitive advantage through AI adoption.",
    icon: "/assets/consultancyIcon2.svg",
    iconDark: "/assets/updated/consultancy2Dark.svg",
  },
  {
    title: "Industry-Specific Roadmap Design",
    description:
      "Custom transformation blueprints for key sectors including energy, banking & financial services (BFSI), healthcare, and logistics, aligned with regulatory and market trends.",
    icon: "/assets/consultancyIcon3.svg",
    iconDark: "/assets/updated/consultancy3Dark.svg",
  },
  {
    title: "Technology Architecture & Risk Management",
    description:
      "Strategic guidance on enterprise architecture, platform selection, technical debt reduction, and risk mitigation across your IT ecosystem.",
    icon: "/assets/consultancyIcon4.svg",
    iconDark: "/assets/updated/consultancy4Dark.svg",
  },
  {
    title: "Change Management & Innovation Governance",
    description:
      "Structured programs to support organizational change, stakeholder alignment, and governance of innovation portfolios.",
    icon: "/assets/consultancyIcon5.svg",
    iconDark: "/assets/updated/consultancy5Dark.svg",
  },
];

const capabilityItems = [
  {
    title: "Business Model Alignment with Tech Strategy",
    description:
      "Ensure your business goals are fully supported by the right technology stack, innovation priorities, and digital investments",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Regulatory & ESG Consulting",
    description:
      "Advisory on compliance with evolving regulatory frameworks and ESG (Environmental, Social, and Governance) requirements, ensuring resilience and ethical alignment.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Future-Readiness Assessments & Gap Analysis",
    description:
      "Evaluate digital maturity, benchmark against industry leaders, and identify capability gaps that need to be addressed for scalable transformation.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Cross-Domain Digital Maturity Modeling",
    description:
      "Assess digital capability across business functions (e.g., supply chain, finance, HR) and build prioritized roadmaps for transformation.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
];

const whyChooseUsCards = [
  {
    number: 1,
    image: "/assets/consultancy1.png",
    title: "Deep Industry Knowledge & Technical Leadership",
    description:
      "Our consultants bring decades of experience across industries, backed by specialized knowledge in enterprise technology, AI, and cloud.",
  },
  {
    number: 2,
    image: "/assets/consultancy2.png",
    title: "Execution-Ready Frameworks & Delivery Accelerators",
    description:
      "Leverage our proprietary toolkits, templates, and accelerators that fast-track planning and reduce time to implementation.",
  },
  {
    number: 3,
    image: "/assets/consultancy3.png",
    title: "Flexible Engagement Models: From Audit to Action",
    description:
      "Whether you need a one-time strategic review or long-term transformation partnership, we tailor our involvement to your needs.",
  },
  {
    number: 4,
    image: "/assets/consultancy4.png",
    title: "Proven Track Record with Enterprise Clients",
    description:
      "Trusted by Fortune 500 companies and high-growth enterprises to deliver actionable insights, reduce transformation risk, and unlock value.",
  },
];

function Consulting_AdvisoryServices() {
  return (
    <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
      <ChildHeroBanner
        title="Consulting & Advisory"
        image="/assets/consultancyBanner.png"
        type="service"
      />

      <section className="relative bg-white dark:bg-black pb-12 px-4 sm:px-8 lg:px-16 transition-all duration-500 ease-in">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
            <h2 className="text-blue-600 dark:text-white text-xl font-semibold mb-4">
              Overview
            </h2>
            <p className="text-[#667085] dark:text-white text-base leading-relaxed">
              At Mindgraph, we deliver high-impact Consulting & Advisory
              Services that bridge the gap between strategy and execution. With
              a focus on transformation, innovation, and future-readiness, we
              partner with enterprises to navigate complex business challenges
              and rapidly evolving technologies. Our industry-aligned approach
              ensures that digital investments are purpose-driven, scalable, and
              aligned with measurable outcomes. Whether you’re reimagining
              operations, adopting AI, or building digital resilience, we
              provide the insight and structure to guide your journey.
            </p>
          </div>

          <div className="md:w-1/2 mt-0 md:-mt-20 z-20 order-1 md:order-2">
            <img
              src="/assets/consultancyOver.png"
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
            Our cross-functional teams and proven methodologies bring both
            breadth and depth to every engagement
          </p>

          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:-mt-20 z-10 md:hidden">
            <div className="max-w-sm lg:max-w-md overflow-hidden bg-white px-[20px] mt-[10px]">
              <img
                src="/assets/capabilitiesConsultancy.png"
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
            Mindgraph stands out for its ability to combine strategic vision
            with technical depth and executional excellence
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
          <p className="text-[#1783F7] dark:text-white font-semibold text-2xl mb-2 md:px-[100px]">
            Strategize with confidence. Transform with clarity. Execute with
            impact.
          </p>
          <p className=" text-[#687DA9] dark:text-white  text-3xl md:px-[150px]">
            Partner with Mindgraph to shape a digitally resilient, future-ready
            enterprise.
          </p>
        </div>
        <div className="border-t mt-12 mb-6 max-w-7xl mx-auto"></div>
      </section>
    </div>
  );
}

export default Consulting_AdvisoryServices;

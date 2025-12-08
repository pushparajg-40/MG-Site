import ServiceSection from "../../components/ServiceSection";
import WhyChooseUsCard from "../../components/WhyChooseUsCard";
import ChildHeroBanner from "../../components/ChildsHeroBanner";

const serviceSectionDescription =
  "We deliver a comprehensive suite of offerings tailored to meet the evolving data and AI needs of modern enterprises";

const serviceFeatures = [
  {
    title: "AI Strategy Workshops & Maturity Assessments",
    description:
      "Collaborative sessions to define an AI roadmap aligned with business goals, along with evaluations to assess current data and AI readiness.",
    icon: "/assets/aiStrategyIcon.svg",
    iconDark: "/assets/updated/aiStrategyIconDark.svg",
  },
  {
    title: "Data Lake & Data Warehouse Architecture Setup",
    description:
      "Scalable and secure data architecture design using cloud-native technologies to centralize and streamline data storage.",
    icon: "/assets/dataLakeIcon.svg",
    iconDark: "/assets/updated/dataLakeIconDark.svg",
  },
  {
    title: "ETL/ELT Pipelines & Real-Time Data Processing",
    description:
      "Robust data integration pipelines that support batch and streaming data for timely and accurate insights.",
    icon: "/assets/etlIcon.svg",
    iconDark: "/assets/updated/etlIconDark.svg",
  },
  {
    title: "Supervised & Unsupervised Machine Learning Models",
    description:
      "Development and deployment of advanced ML algorithms for tasks like classification, clustering, forecasting, and anomaly detection.",
    icon: "/assets/supervisedMLIcon.svg",
    iconDark: "/assets/updated/supervisedMLIconDark.svg",
  },
  {
    title: "Computer Vision, NLP & Generative AI Applications",
    description:
      "Intelligent systems that leverage image recognition, natural language understanding, and next-gen AI models for content creation and automation.",
    icon: "/assets/computerVisionIcon.svg",
    iconDark: "/assets/updated/computerVisionIconDark.svg",
  },
  {
    title: "Model Validation, Drift Detection & MLOps Pipelines",
    description:
      "Continuous monitoring, testing, and deployment frameworks that ensure model performance, reliability, and compliance over time.",
    icon: "/assets/modelValidationIcon.svg",
    iconDark: "/assets/updated/modelValidationIconDark.svg",
  },
];

const capabilityItems = [
  {
    title: "Custom AI Solutions for Key Industries",
    description:
      "Tailored AI use cases for sectors such as finance (fraud detection, credit scoring), healthcare (diagnostics, patient analytics), and retail (personalization, inventory forecasting).",
  },
  {
    title: "Embedded Analytics",
    description:
      "Seamless integration of real-time analytics into enterprise systems like CRM, ERP, and customer portals to enhance decision-making.",
  },
  {
    title: "Predictive Insights",
    description:
      "Powerful models that anticipate customer churn, detect fraud patterns, forecast demand, and optimize resources.",
  },
  {
    title: "AI Governance & Responsible AI",
    description:
      "Frameworks that ensure ethical AI use, regulatory compliance, fairness, and transparency in AI development and operations.",
  },
];

const whyChooseUsCards = [
  {
    number: 1,
    title: "AI-First, Cloud-Native Approach",
    description:
      "Future-ready, scalable architecture optimized for AI workloads, adaptable to diverse industries.",
    image: "/assets/aiFirst.png",
  },
  {
    number: 2,
    title: "End-to-End Delivery Model",
    description:
      "Covers data ingestion, AI deployment, and model monitoring—ensuring full AI adoption lifecycle.",
    image: "/assets/aiSecond.png",
  },
  {
    number: 3,
    title: "Modular & Scalable Architecture",
    description:
      "Grow at your own pace—modular systems enable expansion and seamless integrations.",
    image: "/assets/aiThird.png",
  },
  {
    number: 4,
    title: "Built-in Security & Compliance",
    description:
      "Security-first design with encryption, access control, and industry-standard compliance baked in.",
    image: "/assets/aiFour.png",
  },
  {
    number: 5,
    title: "Accelerated Time to Value",
    description:
      "Reusable AI tools and frameworks slash development time and boost decision-making speed.",
    image: "/assets/aiFive.png",
  },
];

function AI_DI_Services() {
  return (
    <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
      <ChildHeroBanner
        title="AI & Data Intelligence"
        image="/assets/aiService.png"
        type="service"
      />

      <section className="relative bg-white dark:bg-black pb-12 px-4 sm:px-8 lg:px-16 transition-all duration-500 ease-in">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
            <h2 className="text-blue-600 dark:text-white text-xl font-semibold mb-4">
              Overview
            </h2>
            <p className="text-[#667085] dark:text-white text-base leading-relaxed">
              At Mindgraph, our AI & Data Intelligence Services are designed to
              help organizations unlock the true potential of their data. We
              enable businesses to convert raw, scattered, and complex data into
              meaningful insights and actionable intelligence. Our services span
              the entire data lifecycle—from foundational data engineering to
              advanced AI and machine learning (ML) deployment. By leveraging
              cutting-edge technologies, we empower our clients to make
              data-driven decisions, improve operational efficiency, and
              accelerate digital transformation.
            </p>
          </div>

          <div className="md:w-1/2 mt-0 md:-mt-20 z-20 order-1 md:order-2">
            <img
              src="/assets/aiServiceOverview.png"
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
            We bring domain expertise and technical depth across multiple
            industries:
          </p>

          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:-mt-20 z-10 md:hidden">
            <div className="max-w-sm lg:max-w-md overflow-hidden bg-white px-[20px] mt-[10px]">
              <img
                src="/assets/keyCapabilitiesAi.png"
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
                  src="/assets/keyCapabilitiesAi.png"
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
            Mindgraph stands apart with a blend of innovation, agility, and
            reliability
          </p>
        </div>

        <div
          className="relative overflow-x-auto scroll-smooth lg:grid lg:grid-cols-5 gap-12 lg:gap-4 px-4 py-4 z-10 flex"
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
          <p className="text-[#687DA9] dark:text-white text-3xl mb-2 md:px-[250px]">
            Let us help you turn data into a strategic asset and AI into a
            business driver.
          </p>
          <p className="text-[#1783F7] dark:text-white font-semibold text-2xl">
            Partner with MindGraph to lead with Intelligence{" "}
          </p>
        </div>
        <div className="border-t mt-12 mb-6 max-w-7xl mx-auto"></div>
      </section>
    </div>
  );
}

export default AI_DI_Services;

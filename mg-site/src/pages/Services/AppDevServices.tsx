import ChildHeroBanner from "../../components/ChildsHeroBanner";
import PageTransition from "../../components/PageTransition";
import ServiceSection from "../../components/ServiceSection";
import WhyChooseUsCard from "../../components/WhyChooseUsCard";

const serviceSectionDescription =
  "Our comprehensive application development services are tailored to deliver robust, scalable, and future-ready solutions";

const serviceFeatures = [
  {
    title: "Custom Web, Mobile, and Enterprise App Development",
    description:
      "Full-stack development of responsive, cross-platform applications that meet your business goals and technical requirements.",
    icon: "/assets/apiServiceIcon1.svg",
    iconDark: "/assets/updated/apiServiceIcon1Dark.svg",
  },
  {
    title: "User Interface and Experience (UI/UX) Design",
    description:
      "Human-centered design strategies focused on usability, accessibility, and aesthetic appeal to elevate customer satisfaction and brand consistency.",
    icon: "/assets/apiServiceIcon2.svg",
    iconDark: "/assets/updated/apiServiceIcon2Dark.svg",
  },
  {
    title: "Platform Modernization",
    description:
      "Migration of legacy systems to cloud-native, microservices-based architectures to enhance performance, maintainability, and agility.",
    icon: "/assets/apiServiceIcon3.svg",
    iconDark: "/assets/updated/apiServiceIcon3Dark.svg",
  },
  {
    title: "API Development and Third-Party Integration",
    description:
      "Development of secure APIs and seamless integration with enterprise systems, payment gateways, CRMs, and external data services.",
    icon: "/assets/apiServiceIcon4.svg",
    iconDark: "/assets/updated/apiServiceIcon4Dark.svg",
  },
  {
    title: "Agile Product Lifecycle and DevSecOps",
    description:
      "Iterative development frameworks and secure CI/CD pipelines that ensure faster time to market, continuous improvement, and embedded security.",
    icon: "/assets/apiServiceIcon5.svg",
    iconDark: "/assets/updated/apiServiceIcon5Dark.svg",
  },
];

const capabilityItems = [
  {
    title: "Cross-Platform Mobile App Development",
    description:
      "Unified codebase applications built using React Native, Flutter, or Kotlin Multiplatform for efficient development and consistent user experiences",
  },
  {
    title: "Enterprise Portals & Dashboards",
    description:
      "Scalable web platforms tailored for internal and external stakeholders—whether for customer self-service, employee productivity, or partner collaboration",
  },
  {
    title: "Low-Code/No-Code Prototyping & MVP Validation",
    description:
      "Rapid development using platforms like OutSystems, Mendix, or PowerApps to build, test, and iterate MVPs with minimal development overhead",
  },
  {
    title: "In-App Analytics & Engagement Tools",
    description:
      "Integration of real-time analytics, A/B testing, user behavior tracking, and personalization engines to optimize product performance",
  },
];

const whyChooseUsCards = [
  {
    number: 1,
    title: "Agile Delivery with Rapid MVP-to-Product Evolution",
    description:
      "Accelerate your go-to-market journey with agile sprints, lean methodologies, and quick iterations from prototype to production.",
    image: "/assets/api1.png",
  },
  {
    number: 2,
    title: "User-Centric Design with Business Impact",
    description:
      "Every application we build prioritizes user needs, resulting in higher adoption rates, improved usability scores, and tangible ROI.",
    image: "/assets/api2.png",
  },
  {
    number: 3,
    title: "Performance, Scalability & Security by Design",
    description:
      "Our applications are built to handle scale, ensure data security, and maintain peak performance even under high load.",
    image: "/assets/api3.png",
  },
  {
    number: 4,
    title: "Integrated Ecosystem Ready",
    description:
      "Seamless alignment with modern cloud infrastructures (AWS, Azure, GCP), AI capabilities, and enterprise systems like Salesforce, SAP, and Microsoft Dynamics.",
    image: "/assets/api4.png",
  },
];

function AppDevServices() {
  return (
        <PageTransition>
    <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
      <ChildHeroBanner
        title="Application & Development"
        image="/assets/apiServiceBanner.png"
        type="service"
      />

      <section className="relative bg-white dark:bg-black pb-12 px-4 sm:px-8 lg:px-16 transition-all duration-500 ease-in">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
            <h2 className="text-blue-600 dark:text-white text-xl font-semibold mb-4">
              Overview
            </h2>
            <p className="text-[#667085] dark:text-white text-base leading-relaxed">
              At Mindgraph, we specialize in building next-generation digital
              applications that fuel business transformation and customer
              engagement. Whether you're launching a new product, modernizing a
              legacy system, or enhancing user experiences, our end-to-end
              development services cover the full application lifecycle. From
              intuitive UX/UI design to backend architecture, agile delivery,
              and post-deployment support, we help organizations turn ideas into
              impactful digital solutions.
            </p>
          </div>

          <div className="md:w-1/2 mt-0 md:-mt-20 z-20 order-1 md:order-2">
            <img
              src="/assets/apiServiceOverview.png"
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
            Our technical expertise and domain experience enable us to build
            solutions that are both innovative and enterprise-grade
          </p>

          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:-mt-20 z-10 md:hidden">
            <div className="max-w-sm lg:max-w-md overflow-hidden bg-white px-[20px] mt-[10px]">
              <img
                src="/assets/capabilityAPIServiceUpdated.png"
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
                  src="/assets/capabilityAPIServiceUpdated.png"
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
            Mindgraph is the trusted development partner for companies looking
            to innovate fast, scale smart, and stay secure
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
          <p className="text-[#687DA9] dark:text-white text-3xl mb-2 md:px-[250px]">
            Let Mindgraph be your partner in creating intelligent, scalable, and
            delightful digital experiences
          </p>
          <p className="text-[#1783F7] dark:text-white font-semibold text-2xl">
            Build faster. Launch smarter. Grow stronger
          </p>
        </div>
        <div className="border-t mt-12 mb-6 max-w-7xl mx-auto"></div>
      </section>
    </div>
        </PageTransition>

  );
}

export default AppDevServices;

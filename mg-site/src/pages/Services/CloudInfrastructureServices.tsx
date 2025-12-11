import ChildHeroBanner from "../../components/ChildsHeroBanner";
import PageTransition from "../../components/PageTransition";
import ServiceSection from "../../components/ServiceSection";
import WhyChooseUsCard from "../../components/WhyChooseUsCard";

const serviceSectionDescription =
  "Our offerings cover every phase of cloud adoption, enabling you to accelerate transformation while maintaining control and compliance";
const serviceFeatures = [
  {
    title: "Cloud Readiness Assessment & Architecture Design",
    description:
      "Evaluate your current infrastructure, define a cloud adoption roadmap, and design scalable, secure architectures tailored to business needs.",
    icon: "/assets/cloudIcon1.svg",
    iconDark: "/assets/updated/cloudIcon1Dark.svg",
  },
  {
    title: "Cloud Migration & Hybrid Cloud Enablement",
    description:
      "Execute smooth and secure migrations of workloads, applications, and databases with minimal downtime. Enable hybrid models for flexibility and continuity.",
    icon: "/assets/cloudIcon2.svg",
    iconDark: "/assets/updated/cloudIcon2Dark.svg",
  },
  {
    title: "Infrastructure as Code (IaC) & DevOps Automation",
    description:
      "Automate infrastructure provisioning and management using tools like Terraform, Ansible, and CloudFormation—aligned with CI/CD practices.",
    icon: "/assets/cloudIcon3.svg",
    iconDark: "/assets/updated/cloudIcon3Dark.svg",
  },
  {
    title: "Cloud Monitoring, Security & Governance",
    description:
      "Implement real-time monitoring, automated threat detection, and cloud-native security controls for visibility, compliance, and risk mitigation.",
    icon: "/assets/cloudIcon4.svg",
    iconDark: "/assets/updated/cloudIcon4Dark.svg",
  },
  {
    title: "Cost Control & Performance Optimization",
    description:
      "Optimize cloud resources, eliminate waste, and right-size infrastructure to align with usage patterns and budget goals.",
    icon: "/assets/cloudIcon5.svg",
    iconDark: "/assets/updated/cloudIcon5Dark.svg",
  },
];

const capabilityItems = [
  {
    title: "Multi-Cloud Expertise (AWS, Azure, GCP)",
    description:
      "Proven delivery across all major public cloud providers with hybrid and multi-cloud strategy support.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Automated Pipelines & Backup Strategies",
    description:
      "Set up fully automated deployment pipelines, disaster recovery setups, and backup systems to ensure business continuity.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Security, Compliance & Access Control",
    description:
      "Design robust role-based access controls (RBAC), encryption protocols, identity management, and regulatory compliance frameworks (e.g., HIPAA, GDPR, SOC 2).",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Real-Time Monitoring & Auto-Scaling",
    description:
      "Enable intelligent scaling and real-time resource usage insights to maintain application performance and avoid over-provisioning.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
];

const whyChooseUsCards = [
  {
    number: 1,
    image: "/assets/cloud1.png",
    title: "Cloud-Agnostic Expertise with Certified Engineers",
    description:
      "Our architects and engineers hold certifications across AWS, Azure, and GCP—ensuring best-fit, vendor-neutral solutions.",
  },
  {
    number: 2,
    image: "/assets/cloud2.png",
    title: "Accelerated Migration with Zero Data Loss",
    description:
      "Streamlined, secure migrations backed by proven frameworks and rigorous testing to ensure no business disruption.",
  },
  {
    number: 3,
    image: "/assets/crm3.png",
    title: "Automation-Driven, DevOps-First Approach",
    description:
      "Embrace infrastructure agility and speed with CI/CD pipelines, IaC, and container orchestration (Docker, Kubernetes).",
  },
  {
    number: 4,
    image: "/assets/crm4.png",
    title: "24/7 Monitoring & Continuous Optimization",
    description:
      "Proactive support models with always-on monitoring, incident response, and continuous tuning for performance and cost efficiency.",
  },
];

function CloudInfrastructureServices() {
  return (
    <PageTransition>
      <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
        <ChildHeroBanner
          title="Cloud Infrastructure"
          image="/assets/cloudBanner.jpg"
          type="service"
        />

        <section className="relative bg-white dark:bg-black pb-12 px-4 sm:px-8 lg:px-16 transition-all duration-500 ease-in">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
              <h2 className="text-blue-600 dark:text-white text-xl font-semibold mb-4">
                Overview
              </h2>
              <p className="text-[#667085] dark:text-white text-base leading-relaxed">
                At Mindgraph, we help organizations build, scale, and secure
                cloud environments that drive agility, resilience, and cost
                efficiency. Our Cloud Infrastructure Services are designed to
                modernize traditional IT operations and support business
                transformation. Whether you're operating in AWS, Azure, Google
                Cloud Platform (GCP), or a hybrid environment, we provide
                end-to-end cloud lifecycle support—from strategy and migration
                to automation, governance, and continuous performance tuning.
              </p>
            </div>

            <div className="md:w-1/2 mt-0 md:-mt-20 z-20 order-1 md:order-2">
              <img
                src="/assets/cloudOverview.png"
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
              We bring deep cloud engineering expertise and automation-first
              practices to every engagement
            </p>

            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:-mt-20 z-10 md:hidden">
              <div className="max-w-sm lg:max-w-md overflow-hidden bg-white px-[20px] mt-[10px]">
                <img
                  src="/assets/capabilitiesCloud.png"
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
                    src="/assets/capabilitiesCloud.png"
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
              Mindgraph delivers cloud success with the right mix of expertise,
              automation, and proactive support
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
              Build a cloud infrastructure that scales with your vision.
            </p>
            <p className="text-[#1783F7] dark:text-white font-semibold text-2xl md:px-[150px]">
              Partner with Mindgraph to transform your IT operations—securely,
              efficiently, and intelligently.
            </p>
          </div>
          <div className="border-t mt-12 mb-6 max-w-7xl mx-auto"></div>
        </section>
      </div>
    </PageTransition>
  );
}

export default CloudInfrastructureServices;

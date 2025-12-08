import OfferCard from "../../components/OfferCard";
import StrengthCard from "../../components/StrengthCard";

const offerCardsData = [
  {
    number: "01",
    title: "Cloud Migration & Readiness Assessments",
    description:
      "Evaluate and plan seamless on-prem to cloud migration with minimal disruption.",
    image: "assets/cloudOffer1.png",
  },
  {
    number: "02",
    title: "DevOps Implementation & Automation Pipelines",
    description:
      "Set up CI/CD pipelines, container orchestration, and integrated tooling for faster, secure delivery.",
    image: "assets/cloudOffer2.png",
  },
  {
    number: "03",
    title: "Infrastructure as Code (IaC) & Provisioning",
    description:
      "Automate provisioning using Terraform, CloudFormation, and Ansible for consistent deployments.",
    image: "assets/cloudOffer3.png",
  },
  {
    number: "04",
    title: "Performance Optimization & Observability",
    description:
      "Enable end-to-end visibility with real-time monitoring and log analytics to improve uptime.",
    image: "assets/cloudOffer4.png",
  },
  {
    number: "05",
    title: "Disaster Recovery & Business Continuity Planning",
    description:
      "Design high-availability setups with automated failover, backups, and distributed recovery.",
    image: "assets/cloudOffer5.png",
  },
];

const strengthCardsData = [
  {
    title: "Multi-Cloud & Hybrid Cloud Expertise",
    description:
      "Proven experience in architecting and managing distributed environments that span across AWS, Azure, GCP, and on-prem data centers.",
    image: "assets/cloudKeyOne.png",
  },
  {
    title: "Cloud Cost Optimization & Governance",
    description:
      "Rightsizing workloads, implementing budgets and policies, and leveraging FinOps practices to control and reduce cloud spend.",
    image: "assets/cloudKey2.png",
  },
  {
    title: "Security-First Cloud Deployments",
    description:
      "Built-in identity management, encryption, network hardening, and compliance with cloud-native security practices.",
    image: "assets/cloudKey3.png",
  },
  {
    title: "24/7 Infrastructure Monitoring & Support",
    description:
      "Proactive support services with real-time alerts, incident response, and SLA-backed operations to ensure system reliability and continuity.",
    image: "assets/cloudKey4.png",
  },
];

function Cloud_Infrastructure() {
  return (
    <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
      <section className="relative bg-white pt-16 pb-12 md:pb-32 dark:bg-[#000000] transition-all duration-500 ease-in">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10">
            <h1 className="md:text-5xl text-5xl font-bold text-[#1783F7] dark:text-white mb-4 px-4">
              Cloud & Infrastructure Services
            </h1>
            <div className="md:hidden">
              <img
                src="assets/aiOverview.png"
                alt="AI chip"
                className="w-full h-auto object-cover max-h-[400px] lg:max-h-none"
              />
            </div>
            <h2 className="md:text-lg text-3xl font-semibold text-[#1783F7] dark:text-white mb-2 px-4 mt-6 md:mt-0">
              Overview
            </h2>

            <p className="text-[#667085] dark:text-white leading-relaxed text-sm sm:text-base px-4">
              In an era driven by digital agility and scalability, Mindgraph
              empowers enterprises to modernize their infrastructure and unlock
              the full potential of the cloud. Our Cloud & Infrastructure
              Services are designed to accelerate transformation through robust
              cloud-native architectures, seamless automation, and optimized
              performance across public, private, and hybrid environments. We
              work closely with organizations to assess, design, implement, and
              manage cloud strategies tailored to their business goals — whether
              it's scaling rapidly, reducing costs, or improving resilience. Our
              certified expertise spans all major cloud platforms including
              Amazon Web Services (AWS), Microsoft Azure, and Google Cloud
              Platform (GCP).
            </p>
          </div>

          <div className="relative lg:absolute top-10 right-0 w-full lg:w-[48%] z-0 hidden md:block">
            <img
              src="assets/cOverview.png"
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

export default Cloud_Infrastructure;

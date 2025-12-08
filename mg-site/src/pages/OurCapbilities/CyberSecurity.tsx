import OfferCard from "../../components/OfferCard";
import StrengthCard from "../../components/StrengthCard";

const offerCardsData = [
  {
    number: "01",
    title: "Security Operations Center (SOC) as a Service",
    description:
      "24/7 monitoring, threat detection, and incident response powered by advanced analytics and automation.",
    image: "assets/cyberOffer1.png",
  },
  {
    number: "02",
    title: "Threat Intelligence, SIEM, and Real-Time Monitoring",
    description:
      "Unified SIEM with contextual threat intelligence for dynamic, real-time visibility and rapid response.",
    image: "assets/cyberOffer2.png",
  },
  {
    number: "03",
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description:
      "Regular scanning and ethical hacking to detect, validate, and mitigate vulnerabilities across systems.",
    image: "assets/cyberOffer3.png",
  },
  {
    number: "04",
    title: "Cloud and Infrastructure Security",
    description:
      "Secure cloud and on-prem environments with hardened configurations, encryption, and continuous compliance.",
    image: "assets/cyberOffer4.png",
  },
  {
    number: "05",
    title: "Regulatory Compliance and Governance",
    description:
      "Support for ISO 27001, NIST CSF, HIPAA, and GDPR to keep your business audit-ready and compliant.",
    image: "assets/cyberOffer5.png",
  },
];

const strengthCardsData = [
  {
    title: "Zero Trust Architecture Enablement",
    description:
      "Design and implementation of Zero Trust models to ensure strict access control and trust verification across users, devices, and networks.",
    image: "assets/cyberKey1.png",
  },
  {
    title: "AI-Powered Threat Detection and Automated Response",
    description:
      "Leverage machine learning and behavioral analytics for early threat identification and rapid, automated incident containment.",
    image: "assets/cyberKey2.png",
  },
  {
    title: "Operational Technology (OT) Security",
    description:
      "Specialized protection for critical infrastructure and industrial environments, minimizing risk to SCADA, PLCs, and other control systems.",
    image: "assets/cyberKey3.png",
  },
  {
    title: "Proactive Incident Handling and Forensics",
    description:
      "End-to-end incident response capabilities including root cause analysis, threat containment, and digital forensics to support recovery and legal proceedings.",
    image: "assets/cyberKey4.png",
  },
];

function CyberSecurity() {
  return (
    <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
      <section className="relative bg-white pt-16 pb-12 md:pb-32 dark:bg-[#000000] transition-all duration-500 ease-in">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10">
            <h1 className="text-5xl md:text-5xl  font-bold text-[#1783F7] dark:text-white mb-4 px-4">
              Cybersecurity
            </h1>
            <div className="md:hidden">
              <img
                src="assets/aiOverview.png"
                alt="AI chip"
                className="w-full h-auto object-cover max-h-[400px] lg:max-h-none"
              />
            </div>
            <h2 className="md:text-2xl text-3xl font-semibold text-[#1783F7] dark:text-white mb-2 px-4 mt-6 md:mt-0">
              Overview
            </h2>

            <p className="text-[#667085] dark:text-white leading-relaxed text-sm sm:text-base px-4">
              In today’s hyper-connected world, cybersecurity is more than just
              a technical requirement — it’s a strategic imperative. At
              Mindgraph, we deliver comprehensive cybersecurity services that
              help organizations stay ahead of evolving threats across both
              Information Technology (IT) and Operational Technology (OT)
              landscapes. Our approach combines real-time threat intelligence,
              automated defense mechanisms, and compliance readiness to ensure
              resilient and secure digital environments. Whether you're
              protecting cloud-native applications, securing industrial control
              systems, or navigating complex regulatory landscapes, we provide
              end-to-end solutions tailored to your risk profile.
            </p>
          </div>

          <div className="relative lg:absolute top-10 right-0 w-full lg:w-[48%] z-0 hidden md:block">
            <img
              src="assets/cyberOverview.png"
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

export default CyberSecurity;

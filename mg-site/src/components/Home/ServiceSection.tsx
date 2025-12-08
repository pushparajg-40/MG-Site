import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "AI & Data Intelligence Services",
    description:
      "Unlock the power of data and AI to automate decisions, predict outcomes, and drive business growth. We handle everything from strategy and pipelines to real-time analytics and model deployment",
    image: "assets/updated/Ai&data.svg",
    link: "AI&DI_Services",
  },
  {
    id: 2,
    title: "Application & Development Services",
    description:
      "Design, build, and support powerful business applications with a focus on performance, scalability, and user experience. From custom development to lifecycle management, we ensure your apps evolve with your business",
    image: "assets/updated/Appl&dev.svg",
    link: "AppDevServices",
  },
  {
    id: 3,
    title: "SAP Enterprise Services",
    description:
      "Keep your SAP systems running smoothly with expert support across application performance, cloud hosting, upgrades, and business continuity planning.",
    image: "assets/updated/SAP-enterprise.svg",
    link: "SapEnterpriseServices",
  },
  {
    id: 4,
    title: "CRM & ERP Solutions",
    description:
      "Connect customer engagement and business operations with smart, scalable CRM and ERP platforms tailored to your needs.",
    image: "assets/updated/CRM.svg",
    link: "CRM&ERPServices",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Services",
    description:
      "Deploy, scale, and manage your cloud environment (AWS, Azure, GCP) with ease—ensuring performance, security, and cost-efficiency every step of the way.",
    image: "assets/updated/Cloud-infra.svg",
    link: "CloudInfrastructureServices",
  },
  {
    id: 6,
    title: "Consulting & Advisory Services",
    description:
      "Drive innovation and digital maturity with strategic guidance across business and technology domains—focused on sectors like energy, defence, BFSI, healthcare, and logistics.",
    image: "assets/updated/Consulting.svg",
    link: "Consulting&AdvisoryServices",
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-10",
              "rotate-[-5deg]"
            );
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "rotate-0"
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    const headings = containerRef.current.querySelectorAll("[data-delay]");
    const cards = containerRef.current.querySelectorAll(".service-card");

    headings.forEach((el) => observer.observe(el));
    cards.forEach((el) => observer.observe(el));

    return () => {
      headings.forEach((el) => observer.unobserve(el));
      cards.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="bg-[#000000]">
      <div
        className="px-6 md:px-[50px] lg:px-[120px] py-8 sm:py-12 lg:py-16"
        ref={containerRef}
      >
        {/* Heading */}
        <div className="flex flex-col justify-center mb-12 mt-8">
          <div
            className="flex gap-2 items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
            data-delay="100"
          >
            <h2 className="text-[#828282] text-3xl md:text-2xl mb-2">
              Services
            </h2>
            <img src="/assets/updated/line.svg" alt="line" />
          </div>

          <h1
            className="text-4xl md:text-4xl font-extrabold text-white opacity-0 translate-y-10 transition-all duration-700 ease-out"
            data-delay="200"
          >
            Transforming Ideas into Intelligent Realities
          </h1>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="h-full block group"
            >
              <div
                className="service-card flex flex-col items-start p-2 gap-0 md:gap-8 
              h-full opacity-0 translate-y-10 transition-all duration-700 hover:scale-105 
              hover:shadow-lg  p-6"
              >
                <img
                  src={service.image}
                  className="h-[11rem]"
                  alt={service.title}
                />
                <div className="flex flex-col justify-center gap-4 md:gap-8">
                  <h2 className="text-white text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-[#FFFFFF] leading-[25px] text-sm pr-[50px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .opacity-100 {
          opacity: 1;
        }

        .translate-y-0 {
          transform: translateY(0);
        }

        .rotate-0 {
          transform: rotate(0deg);
        }
      `}</style>
    </section>
  );
}

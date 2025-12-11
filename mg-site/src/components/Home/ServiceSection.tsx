import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";

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
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <section className="bg-[#000000]">
      <div className="px-6 md:px-[50px] lg:px-[120px] py-8 sm:py-12 lg:py-16">
        {/* Heading */}
        <motion.div
          className="flex flex-col justify-center mb-12 mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="flex gap-2 items-center mb-4"
            variants={headingVariants}
          >
            <h2 className="text-[#828282] text-3xl md:text-2xl mb-2">
              Services
            </h2>
            <img src="/assets/updated/line.svg" alt="line" />
          </motion.div>

          <motion.h1
            className="text-4xl text-radiant md:text-4xl font-extrabold text-white"
            variants={headingVariants}
          >
            Transforming Ideas into Intelligent Realities
          </motion.h1>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="h-full block group"
            >
              <motion.div
                className="service-card flex flex-col items-start gap-8 p-6 h-full hover:scale-105 hover:shadow-lg"
                variants={cardVariants}
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
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

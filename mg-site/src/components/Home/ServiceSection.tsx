import { easeOut, motion } from "framer-motion";
import RoundedArrowRightIcon from "../ui/RoundedArrowRightIcon";
import SvgIconComponent from "../ui/SvgIconComponent";
import LineIcon from "../../assets/line.svg?react";

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
      "Our AI & Data Intelligence Services are designed to help organizations unlock the true potential of their data.",
    image: "assets/updated/Ai&data.svg",
    link: "AI&DI_Services",
  },
  {
    id: 2,
    title: "Application & Development Services",
    description:
      "We specialize in building next-generation digital applications that fuel business transformation and customer engagement.",
    image: "assets/updated/Appl&dev.svg",
    link: "AppDevServices",
  },
  {
    id: 3,
    title: "SAP Enterprise Services",
    description:
      "We specialize in delivering robust SAP enterprise solutions that drive operational efficiency, business agility, and digital innovation.",
    image: "assets/updated/SAP-enterprise.svg",
    link: "SapEnterpriseServices",
  },
  {
    id: 4,
    title: "CRM & ERP Solutions",
    description:
      "We empower organizations to bridge the gap between customer experience and operational efficiency with seamlessly integrated CRM and ERP solutions.",
    image: "assets/updated/CRM.svg",
    link: "CRM&ERPServices",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Services",
    description:
      "We help organizations build, scale, and secure cloud environments that drive agility, resilience, and cost efficiency.",
    image: "assets/updated/Cloud-infra.svg",
    link: "CloudInfrastructureServices",
  },
  {
    id: 6,
    title: "Consulting & Advisory Services",
    description:
      "We deliver high-impact Consulting & Advisory Services that bridge the gap between strategy and execution.",
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
    <section className="bg-white dark:bg-black">
      <div className="px-4 sm:px-6 md:px-[50px] lg:px-[120px] py-8 sm:py-12 lg:py-16 2xl-plus:max-w-9xl 2xl-plus:mx-auto">
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
            <h2 className="text-xl md:text-2xl text-[#828282] mb-2">
              Services
            </h2>
            <SvgIconComponent
              icon={LineIcon}
              width="158"
              className="text-gray-600 dark:text-white"
            />
          </motion.div>

          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl text-radiant font-extrabold text-black dark:text-white"
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
            <div
              key={service.id}
              className="h-full block group hover:scale-105 transition-all duration-300 ease-out  "
            >
              <motion.div
                className="service-card flex flex-col items-start gap-8 p-6 h-full hover:shadow-lg border border-gray-100 dark:border-transparent shadow-sm dark:shadow-none"
                variants={cardVariants}
              >
                <img
                  src={service.image}
                  className="h-32 sm:h-36 md:h-[11rem] w-auto"
                  alt={service.title}
                />
                <div className="flex flex-col justify-center gap-4 md:gap-8">
                  <h2 className="text-[#1783F7] dark:text-white text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-[#FFFFFF] leading-[25px] text-sm pr-[50px]">
                    {service.description}
                  </p>
                </div>

                <div>
                  <a
                    href={`/${service.link}`}
                    className="dark:text-white font-semibold text-sm !text-decoration-underline text-gray-600 flex items-center gap-2"
                  >
                    Read More
                    <RoundedArrowRightIcon
                      className="w-5 h-5"
                      bgColor="#f9fafb"
                      arrowColor="#4b5563"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

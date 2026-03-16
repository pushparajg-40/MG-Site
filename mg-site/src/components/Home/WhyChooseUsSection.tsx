import { easeOut, motion } from "framer-motion";
import SvgIconComponent from "../ui/SvgIconComponent";
import Choose1Icon from "../../assets/choose1.svg?react";
import Choose2Icon from "../../assets/choose2.svg?react";
import Choose3Icon from "../../assets/choose3.svg?react";
import Choose4Icon from "../../assets/choose4.svg?react";
import Choose5Icon from "../../assets/choose5.svg?react";
import LineIcon from "../../assets/line.svg?react";

const cardContent = [
  {
    title: "AI-Driven Platforms Built for Performance",
    icon: Choose1Icon,
  },
  {
    title: "Complete Ownership — From Vision to Value",
    icon: Choose2Icon,
  },
  {
    title: "Accelerated Implementation, Measurable Results",
    icon: Choose3Icon,
  },
  {
    title: "Seamless Integration with Your Ecosystem",
    icon: Choose4Icon,
  },
  {
    title: "Enterprise-Grade Support. Always On. Always Aligned.",
    icon: Choose5Icon,
  },
];

function WhyChooseUsSection() {
  const wrapperVariants = {
    hide: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    show: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut, delay: custom },
    }),
  };

  return (
    <>
      <motion.section
        className="bg-white dark:bg-black pt-[40px] pb-[120px] transition-all duration-500 ease-in"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={wrapperVariants}
      >
        <motion.div
          className="px-4 sm:px-6 md:px-10 lg:px-20 py-2 sm:py-4 lg:py-6 2xl-plus:max-w-9xl 2xl-plus:mx-auto"
          variants={wrapperVariants}
        >
          {/* Heading */}
          <motion.div
            className="flex gap-2 md:items-start "
            variants={headingVariants}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#828282] mb-4 leading-tight">
              Why Choose Us?
            </h2>
            <SvgIconComponent
              icon={LineIcon}
              width="158"
              className="pt-3 mr-4 text-gray-600 dark:text-white"
            />
          </motion.div>
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight md:px-0 font-extrabold text-radiant"
            variants={headingVariants}
          >
            Shaping Purpose fit AI Innovation
          </motion.h1>

          <motion.p
            className="text-md text-gray-700 dark:text-[#FFFFFF] font-normal mb-4 leading-[26px] "
            variants={headingVariants}
          >
            We deliver more than services — we deliver outcomes. At Mindgraph,
            we fuse deep industry insight with intelligent technology to build
            future-ready enterprises. Our approach is bold, agile, and
            engineered for business impact—from rapid deployments to long-term
            transformation.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={wrapperVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-4 sm:px-6 md:px-10 lg:px-[40px] gap-4 md:gap-6 mt-8 2xl-plus:max-w-9xl 2xl-plus:mx-auto"
        >
          {/* Box 1 
          bg-gradient-to-r from-[#EAF9FD] to-[#DEF8FF] 
            dark:bg-none dark:*/}

          {cardContent.map((card, index) => {
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                custom={index * 0.2}
                viewport={{ once: true, amount: 0.2 }}
                className="
            bg-gradient-to-b from-white to-gray-100 dark:from-[#1C1C1C] dark:to-[#000000]
            grid p-6 pb-4 border border-gray-200 dark:border-gray-800 w-full min-h-[200px] md:h-[240px] 
            items-center-safe "
              >
                <SvgIconComponent
                  icon={card.icon}
                  size={48}
                  className="mb-4 stroke-[#1783F7] [&_path]:fill-[#1783F7] dark:stroke-white dark:[&_path]:fill-white"
                />
                <h3 className="text-black dark:text-white text-lg md:text-xl font-extrabold">
                  {card.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
    </>
  );
}

export default WhyChooseUsSection;

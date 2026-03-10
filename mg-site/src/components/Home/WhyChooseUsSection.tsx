import { easeOut, motion } from "framer-motion";

const cardContent = [
  {
    title: "AI-Driven Platforms Built for Performance",
    icon: "/assets/updated/choose1.svg",
  },
  {
    title: "Complete Ownership — From Vision to Value",
    icon: "/assets/updated/choose2.svg",
  },
  {
    title: "Accelerated Implementation, Measurable Results",
    icon: "/assets/updated/choose3.svg",
  },
  {
    title: "Seamless Integration with Your Ecosystem",
    icon: "/assets/updated/choose4.svg",
  },
  {
    title: "Enterprise-Grade Support. Always On. Always Aligned.",
    icon: "/assets/updated/choose5.svg",
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
        className="bg-white dark:bg-[#000000] pt-[40px] pb-[120px] transition-all duration-500 ease-in"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={wrapperVariants}
      >
        <motion.div
          className="px-10 lg:px-20 py-2 sm:py-4 lg:py-6 2xl-plus:max-w-9xl 2xl-plus:mx-auto"
          variants={wrapperVariants}
        >
          {/* Heading */}
          <motion.div
            className="flex gap-2 md:items-start"
            variants={headingVariants}
          >
            <h2 className="text-3xl md:text-4xl text-[#1783F7] dark:text-[#828282] mb-4 leading-tight">
              Why Choose Us?
            </h2>
            <img
              src="/assets/updated/line.svg"
              className="pt-3 mr-4"
              alt="Decorative Line"
            />
          </motion.div>

          <motion.h1
            className="text-4xl mb-4 leading-tight md:px-0 font-extrabold
          bg-clip-text text-transparent
          bg-gradient-to-r from-[#687DA9] to-[#1783F7]
          dark:text-radiant dark:bg-none dark:text-white dark:[background-clip:unset]"
            variants={headingVariants}
          >
            Shaping Purpose fit AI Innovation
          </motion.h1>

          <motion.p
            className="text-md text-[#667085] dark:text-[#FFFFFF] font-normal mb-4 leading-[26px]"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 overflow-x-auto px-[20px] md:px-[80px] gap-6 flex flex-wrap justify-start mt-8 2xl-plus:max-w-9xl 2xl-plus:mx-auto"
        >
          {cardContent.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              custom={index * 0.2}
              viewport={{ once: true, amount: 0.2 }}
              className="
            bg-gradient-to-br from-[#EAF9FD] to-[#DEF8FF]
            dark:bg-gradient-to-b dark:from-[#1C1C1C] dark:to-[#000000]
            grid p-6 pb-4
            border border-[#1783F7]/20 dark:border-white/10
            w-[250px] h-[240px]
            items-center-safe
            rounded-xl dark:rounded-none
            shadow-sm dark:shadow-none
            hover:shadow-md dark:hover:shadow-none
            transition-shadow duration-300"
            >
              <img
                src={card.icon}
                alt="AI Platform"
                className="mb-4"
                data-light="/assets/AINative.svg"
                data-dark="/assets/updated/choose1.svg"
              />
              <h3 className="text-[#1F3F68] dark:text-white text-lg md:text-xl font-extrabold">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default WhyChooseUsSection;

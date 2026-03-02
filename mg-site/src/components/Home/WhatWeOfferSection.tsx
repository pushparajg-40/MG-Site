import { easeOut, motion } from "framer-motion";
import RoundedArrowRightIcon from "../ui/RoundedArrowRightIcon";

interface OfferCards {
  title: string;
  number: string;
  pageLink: string;
  desc: string;
  bgImage: string;
}

interface whatWeOfferParams {
  title: string;
  subtitle: string;
  desc: string;
  cards: OfferCards[];
}

function WhatWeOfferSection({
  title,
  subtitle,
  desc,
  cards,
}: whatWeOfferParams) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut, delay: custom },
    }),
  };
  const containerVariants = {
    hidden: {},
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <>
      <motion.section
        className="bg-[#000000] pt-[100px] "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-start justify-center px-10 md:px-[50px] lg:px-[120px] space-y-6 2xl-plus:max-w-9xl 2xl-plus:mx-auto"
          variants={containerVariants}
        >
          <div className="flex gap-2 md:items-start  ">
            <motion.h2
              className="text-4xl text-[#828282] mb-4 leading-tight"
              variants={headingVariants}
            >
              {title}
            </motion.h2>
            <img src="/assets/updated/line.svg" className="pt-0 md:pt-3" />
          </div>

          <motion.h1
            className="text-4xl text-gradient mb-2 leading-tight md:px-0 font-extrabold"
            variants={headingVariants}
          >
            {subtitle}
          </motion.h1>

          <motion.p
            className="text-md text-[#FFFFFF] font-normal mb-4 leading-[26px]  "
            variants={headingVariants}
          >
            {desc}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-10 md:px-[40px] lg:px-[30px] gap-6 mt-12 2xl-plus:max-w-9xl 2xl-plus:mx-auto">
          {cards.map((card, idx) => (
            <div key={idx}>
              <motion.div
                className="text-white w-[264px] md:w-[300px]  "
                variants={cardVariants}
                custom={idx * 0.2}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative h-[300px] border p-6 overflow-hidden flex flex-col justify-between hover:scale-105 transition-all duration-200 ease-out">
                  <div
                    className={`${
                      idx == 3
                        ? "right-[-32px] bottom-[-61px]"
                        : "right-[-17px] bottom-[-17px]"
                    } absolute  h-full flex items-end justify-end pointer-events-none`}
                  >
                    <img
                      src={card.bgImage}
                      className="w-[180px] object-contain"
                    />
                  </div>

                  <p className="text-2xl mt-4 pr-16 font-semibold relative z-10">
                    {card.title}
                  </p>
                  <p className="text-4xl font-bold mt-20 relative z-10">
                    {card.number}
                  </p>
                </div>

                <p className="text-lg mt-6 leading-relaxed relative z-10 px-4 line-clamp-3">
                  {card.desc}
                </p>

                <div>
                  <a
                    href={`/${card.pageLink}`}
                    className="dark:text-white font-semibold text-sm px-4 py-4 !text-decoration-underline text-gray-600 flex items-center gap-2"
                  >
                    Read More
                    <RoundedArrowRightIcon className="w-5 h-5" bgColor="#f9fafb" arrowColor="#4b5563" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default WhatWeOfferSection;

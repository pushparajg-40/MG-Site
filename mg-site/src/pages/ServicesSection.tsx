import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ServiceItem {
  text: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  image: string;
  whatWeOffer: ServiceItem[];
  whyChooseUs: ServiceItem[];
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
}

export default function ServiceSection({
  title,
  description,
  image,
  whatWeOffer,
  whyChooseUs,
  buttonText = "Read More",
  buttonLink = "#",
  bgColor = "bg-white dark:bg-black",
}: ServiceSectionProps) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  // const textVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.7, ease: easeOut },
  //   },
  // };

  // const listItemVariants: Variants = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: (custom: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: easeOut, delay: custom },
  //   }),
  // };

  const navigate = useNavigate();

  return (
    <motion.section
      className={`py-16 px-4 md:pl-20 ${bgColor}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-10 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#687DA9] dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-[#666666] dark:text-white">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-auto md:h-[510px] object-cover aspect-square md:aspect-auto"
          />
        </div>

        <div className="flex flex-col gap-10 text-gray-800">
          <div>
            <h3 className="text-[#1783F7] dark:text-white text-base text-xl mb-4">
              What We Offer
            </h3>
            <ul className="space-y-2 text-[#666666] dark:text-white">
              {whatWeOffer.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>
                    <img
                      src="assets/arrow.svg"
                      data-light="assets/arrow.svg"
                      data-dark="assets/updated/crossArrowWhite.svg"
                      className="theme-image"
                      alt=""
                    />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#1783F7] dark:text-white text-base text-xl mb-4">
              Why Choose Us
            </h3>
            <ul className="space-y-2 text-[#666666] dark:text-white">
              {whyChooseUs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>
                    <img
                      src="assets/arrow.svg"
                      data-light="assets/arrow.svg"
                      data-dark="assets/updated/crossArrowWhite.svg"
                      className="theme-image"
                      alt=""
                    />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex md:block justify-center">
              <button
                onClick={() => {
                  navigate(buttonLink);
                }}
                className="font-semibold py-2 px-6 rounded-full flex items-center mt-5 bg-gradient-to-r from-[#8B8B8B] to-[#1783F7] hover:from-[#787878] hover:to-[#0653A7] text-white dark:from-white dark:to-white dark:hover:from-gray-200 dark:hover:to-gray-400 dark:text-black"
              >
                {buttonText}
                <img
                  src="assets/getInArrow.svg"
                  className="pl-2 theme-image"
                  data-light="assets/getInArrow.svg"
                  data-dark="assets/updated/crossArrow.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

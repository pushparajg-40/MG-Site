import OfferCard from "../../components/OfferCard";
import PageTransition from "../../components/PageTransition";
import StrengthCard from "../../components/StrengthCard";

const offerCardsData = [
  {
    number: "01",
    title: "Natural Language Processing (NLP)",
    description:
      "Build conversational agents (chatbots, virtual assistants), automate document processing, and perform sentiment and intent analysis using advanced language models.",
    image: "assets/aiOffer1.png",
  },
  {
    number: "02",
    title: "Computer Vision Applications",
    description:
      "Implement AI models that analyze images and videos for tasks such as object detection, facial recognition, defect detection, and real-time quality control in manufacturing.",
    image: "assets/aiOffer2.png",
  },
  {
    number: "03",
    title: "Predictive Analytics",
    description:
      "Use machine learning algorithms to forecast trends, identify customer churn, detect anomalies, and support proactive business planning across industries.",
    image: "assets/aiOffer3.png",
  },
  {
    number: "04",
    title: "Recommendation & Personalization Engines",
    description:
      "Deliver hyper-personalized user experiences with AI-powered recommendation systems for e-commerce, entertainment platforms, and digital content.",
    image: "assets/aiOffer4.png",
  },
  {
    number: "05",
    title: "Custom AI Model Development",
    description:
      "Design and deploy AI models tailored to specific industry domains such as healthcare (diagnostic support, medical imaging), BFSI (fraud detection, risk scoring), and manufacturing (predictive maintenance, process optimization).",
    image: "assets/aiOffer5.png",
  },
];

const strengthCardsData = [
  {
    title: "AI Accelerators for Rapid Deployment",
    description:
      "Pre-built models, reusable frameworks, and toolkits that reduce time-to-market and expedite AI integration into existing systems.",
    image: "assets/aiKey1.png",
  },
  {
    title: "Model Lifecycle Management with MLOps",
    description:
      "End-to-end machine learning operations (MLOps) to ensure scalable, reproducible, and continuous model development, testing, deployment, and monitoring.",
    image: "assets/aiKey2.png",
  },
  {
    title: "Ethical and Responsible AI",
    description:
      "We incorporate transparency, fairness, and accountability into our AI models, ensuring compliance with ethical standards and regulatory requirements.",
    image: "assets/aiKey3.png",
  },
  {
    title: "Cloud-Native AI Architectures",
    description:
      "Leverage cloud platforms (AWS, Azure, GCP) to deploy and scale AI solutions securely and cost-effectively, supporting hybrid and multi-cloud environments.",
    image: "assets/aiKey4.png",
  },
];

function AIMachineLearning() {
  return (
    <PageTransition>
      <div className="overflow-x-hidden dark:bg-black transition-all duration-500 ease-in">
        <section className="relative bg-white pt-16 pb-12 md:pb-32 dark:bg-[#000000] transition-all duration-500 ease-in">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
            <div className="z-10">
              <h1 className="md:text-4xl text-5xl font-bold text-[#1783F7] dark:text-white mb-4 px-4">
                AI & Machine Learning
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
                At Mindsight, we specialize in delivering bespoke Artificial
                Intelligence (AI) and Machine Learning (ML) solutions that drive
                intelligent automation, improve operational efficiency, and
                unlock transformative insights. Our team leverages cutting-edge
                techniques across deep learning, natural language processing
                (NLP), computer vision, and predictive modeling to empower
                enterprises with data-driven decision-making capabilities.
                Whether it's enhancing customer experiences, streamlining
                workflows, or building scalable AI systems, we help businesses
                realize tangible value from their data.
              </p>
            </div>

            <div className="relative lg:absolute top-10 right-0 w-full lg:w-[48%] z-0 hidden md:block">
              <img
                src="assets/aiOverview.png"
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
    </PageTransition>
  );
}

export default AIMachineLearning;

import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import RoundedArrowRightIcon from "../../components/ui/RoundedArrowRightIcon";

interface FeatureColumn {
  title: string;
  description: string;
  items: string[];
}

export default function AutoDocX() {
 const isDark = document.documentElement.classList.contains("dark");

  const keyFeatures: FeatureColumn[] = [
    {
      title: "Smart Document Organization",
      description:
        "Automatically categorize and tag files, reducing hours of manual sorting into a few seconds.",
      items: [
        "AI-based auto-tagging and classification.",
        "Document clustering by type, client, or case.",
        "Personalized document folders by project or team.",
      ],
    },

    {
      title: "Lightning-Fast Search",
      description:
        "Find exactly what you need with intelligent search that understands context, not just keywords.",
      items: [
        "Advanced semantic search algorithms.",
        "Search by content, tags, or file metadata.",
        "Instant suggestions and result previews.",
      ],
    },
    {
      title: "Multi-Format Support",
      description: "Manage diverse file formats without switching tools.",
      items: [
        "Upload and process PDFs, Word docs, TXT, and more.",
        "Extract content and context regardless of format.",
        "Auto-generate summaries for supported files.",
      ],
    },

    {
      title: "Secure & Compliant Storage",
      description:
        "Trust your documents are safe with enterprise-grade security.",
      items: [
        "End-to-end encryption for all files.",
        "Role-based access controls.",
        "Audit logs for compliance and tracking.",
      ],
    },
    {
      title: "AI-Powered Document Generation",
      description:
        "Cut down creation time with smart document drafting and auto-fill features.",
      items: [
        "Create contracts, reports, and proposals instantly.",
        "Populate with dynamic fields using saved templates.",
        "Reduce redundancy and human error.",
      ],
    },
    {
      title: "Session Share & Collaboration",
      description:
        "Enable real-time teamwork on shared documents—without email chaos.",
      items: [
        "Single session ID for shared editing.",
        "Collaborate in real-time on proposals and reports.",
        "Version tracking and auto-sync.",
      ],
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <PageTransition>
        <main className="transition-all duration-500 ease-in">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row justify-between items-center md:items-center bg-white dark:bg-black transition-all duration-500 ease-in">
            {/* Mobile adjustments */}
            <style>{`
          @media screen and (max-width: 769px) {
            .hero-section {
              height: 630px;
              padding-top: 30px;
            }
          }
          @media screen and (max-width: 426px) {
            .hero-section {
              flex-direction: column;
              height: auto;
            }
            .hero-description {
              padding-left: 20px !important;
              padding-right: 10px !important;
              width: 100% !important;
            }
          }
        `}</style>
            <div className="hero-section flex flex-col w-full md:w-1/2 justify-center items-start pl-12 pr-0 md:pr-[70px]">
              <div className="object-contain h-10 w-auto mb-5">
                <img
                  src={
                    isDark
                      ? "assets/autodox/auto-docx-hero-logo.svg"
                      : "assets/autodox/auto-docx-hero-logo.svg"
                  }
                  alt="auto-docx"
                  className="h-full"
                />
              </div>
              <p
                className="font-semibold md:font-medium text-[#1783F7] dark:text-white mb-5"
                style={{ fontSize: "40px", lineHeight: "1.2" }}
              >
                Revolutionize the <br /> Way You Handle <br /> Documents with AI
              </p>
              <p className="text-[#667085] dark:text-white text-base leading-relaxed mb-6">
                Unlock your document’s full potential with AI-powered
                organization, search, and collaboration—faster, smarter, and
                more secure
              </p>
              <button
                className="w-60 text-white dark:text-black font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all hover:opacity-90 
            bg-gradient-to-r from-[#8B8B8B] to-[#1783F7] 
            dark:from-white dark:to-white dark:bg-white 
            hover:from-[#787878] hover:to-[#0653A7] 
            dark:hover:from-gray-200 dark:hover:to-gray-400"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                Talk to Our Experts
                <RoundedArrowRightIcon className="w-5 h-5 mx-1" />
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end ">
              <img
                src="assets/autodox/auto-docx-hero-img.png"
                alt="autoDocx"
                className="w-auto h-auto max-w-full"
              />
            </div>
          </section>

          {/* key Features Header Section */}
          <section className="bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in pt-9 md:pt-16 pb-8">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[#2FC1FF] dark:text-white font-medium text-lg mb-6">
                key Features
              </p>
              <p className="text-[#687DA9] dark:text-white font-normal text-xl sm:text-3xl lg:text-5xl leading-tight mb-5 px-4">
                Let AI Take the Paperwork Off Your Plate
              </p>
              <p className="text-[#667085] dark:text-white font-normal text-base leading-6 max-w-3xl px-4">
                From individuals to teams, AutoDocX.AI streamlines your document
                workflows—sorting, tagging, retrieving, and managing files with
                zero hassle.
              </p>
            </div>
          </section>

          {/* Feature Columns Section */}
          <section className="bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in">
            <style>{`
          .section-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            padding: 30px;
            justify-items: center;
            align-items: start;
            padding-bottom: 40px;
          }
          @media screen and (max-width: 426px) {
            .section-3 {
              padding: 0 !important;
            }
          }
        `}</style>
            <div className="section-3">
              {[...keyFeatures].map((column, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-start items-start pl-5 md:pl-10 pr-2 md:pr-0"
                >
                  <p className="text-[#687DA9] dark:text-white font-semibold text-2xl md:text-3xl mb-5">
                    {column.title}
                  </p>
                  <p className="text-[#667085] dark:text-white font-normal text-base leading-6 mb-5">
                    {column.description}
                  </p>
                  <ul className="text-[#666666] dark:text-white font-normal text-base leading-6 list-disc ml-8">
                    {column.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Header Section */}
          <section className="bg-white dark:bg-black transition-all duration-500 ease-in pt-9 md:pt-16 pb-8">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[#687DA9] dark:text-white font-normal text-xl sm:text-3xl lg:text-5xl leading-tight mb-5 px-4">
                Experience the Smarter Way to Work
              </p>
              <p className="text-[#666666] dark:text-white font-normal text-base leading-6 max-w-3xl px-4">
                With advanced AI and strong encryption, AutoDocX.AI is your
                partner for effortless, secure, and <br/> future-ready document
                management. <br/> 
                <span className="font-bold text-lg">“Try AutoDocX.AI now and embrace the future of productivity.”</span>
              </p>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}

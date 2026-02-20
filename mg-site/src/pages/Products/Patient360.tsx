import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";

interface FeatureColumn {
  title: string;
  description: string;
  icon: string;
  iconDark: string;
}

const keyFeatures: FeatureColumn[] = [
  {
    title: "Intelligent Appointment Scheduling",
    description:
      "Enable seamless appointment booking with real-time calendar sync, automated SMS/email reminders, and self-service rescheduling—reducing no-shows and administrative overhead.",
    icon: "assets/patient360/intell-appointment.svg",
    iconDark: "assets/patient360/intell-appointment.svg",
  },
  {
    title: "Secure Doctor-Patient Communication",
    description:
      "Facilitate real-time, HIPAA-compliant messaging via chat, SMS, email, and in-app video consultations. Integrated chatbot support offers instant answers and triage, enhancing responsiveness and patient engagement.",
    icon: "assets/patient360/secure-doc-patient-comm.svg",
    iconDark: "assets/patient360/secure-doc-patient-comm.svg",
  },
  {
    title: "Advanced Healthcare Analytics & Insights",
    description:
      "Leverage real-time dashboards and patient health trends to identify risks, improve treatment planning, and make informed clinical decisions using actionable insights.",
    icon: "assets/patient360/advanced-health-analytics.svg",
    iconDark: "assets/patient360/advanced-health-analytics.svg",
  },
  {
    title: "Multi-Channel Notification Management",
    description:
      "Deliver critical alerts and updates through WhatsApp, SMS, and email. Notify patients about lab results, prescription updates, and appointment reminders—all in one place.",
    icon: "assets/patient360/multi-channel-notification.svg",
    iconDark: "assets/patient360/multi-channel-notification.svg",
  },
  {
    title: "Enterprise-Grade Compliance & Security",
    description: "",
    icon: "assets/patient360/enterprise-grade-icon.svg",
    iconDark: "assets/patient360/enterprise-grade-icon.svg",
  },
  {
    title: "Unified Patient Profiles",
    description:
      "Aggregate patient data across EMRs, prescriptions, lab results, wearable devices, and more—creating a single source of truth for every patient through real-time EHR integration.",
    icon: "assets/patient360/unified-patient-profile-icon.svg",
    iconDark: "assets/patient360/unified-patient-profile-icon.svg",
  },
];

const capabilityItems = [
  {
    title: "360-Degree Patient View",
    description:
      "Unify patient data from disparate systems to enable holistic, personalized care.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Real-Time Communication",
    description:
      "Engage with patients through secure, omnichannel messaging and consultations.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Streamlined Scheduling",
    description:
      "Reduce friction in appointment booking and minimize administrative load.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
  {
    title: "Scalable, Secure Infrastructure",
    description:
      "Powered by Microsoft Azure, Patient360 is built for compliance, reliability, and future scalability.",
    iconLight: "assets/arrow.svg",
    iconDark: "assets/updated/crossArrowWhite.svg",
  },
];

export default function Patient360() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
    }
  });

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
                      ? "assets/patient360/patient-360-hero-logo.svg"
                      : "assets/patient360/patient-360-hero-logo.svg"
                  }
                  alt="patient-360-logo"
                  className="h-full"
                />
              </div>
              <p
                className="font-semibold md:font-medium text-[#1783F7] dark:text-white mb-5"
                style={{ fontSize: "40px", lineHeight: "1.2" }}
              >
                Revolutionizing <br /> Healthcare with a Unified <br /> Data
                Platform
              </p>
              <p className="text-[#667085] dark:text-white text-sm leading-relaxed mb-6">
                Patient360.ai is a powerful, healthcare-specific Customer Data
                Platform (CDP) designed to deliver a 360-degree view of every
                patient. Built to streamline communication, enhance operational
                efficiency, and enable data-driven care, Patient360 empowers
                healthcare providers to deliver personalized, proactive
                treatment across every touchpoint.
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
                <img
                  src={
                    isDark
                      ? "assets/updated/crossArrow.svg"
                      : "assets/getInArrow.svg"
                  }
                  alt="Arrow"
                  className="ml-2 h-3"
                />
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end ">
              <img
                src="assets/patient360/patient-360-hero-img.png"
                alt="patient-360"
                className="w-auto h-auto max-w-full"
              />
            </div>
          </section>

          {/* Key Features */}
          <section className="w-full dark:bg-black py-9 md:py-16 bg-white">
            <div className="flex flex-col md:flex-row">
              <div className="sm:flex-col md:w-1/3 w-full px-6 py-12 lg:pl-[120px]">
                <h3 className="text-[#1783F7] dark:text-white text-2xl font-medium mb-3">
                  Key Features of Patient360.ai
                </h3>
                <div className="mt-20 lg:mt-48 mb-5 sm:mx-auto">
                  <img
                    src="assets/patient360/patient-360-med-delivery.png"
                    alt="patient-360-medicine-delivery"
                    className="w-64 lg:w-[475px] h-auto object-fit-contain"
                  />
                </div>
              </div>

              <div
                className="md:w-2/3 w-full px-6 py-12 md:rounded-tl-3xl md:rounded-bl-3xl md:pl-16 lg:pr-[80px] lg:ml-[100px]
                bg-[linear-gradient(to_bottom_right,_#E8F5FF,_#FBFFFA,_#E8F1EF,_#D3ECFF)] dark:bg-none dark:bg-[#181818] transition-all duration-500 ease-in"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 max-w-6xl mx-auto">
                  {keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-start gap-3">
                      <img
                        src={feature.icon}
                        data-light={feature.icon}
                        data-dark={feature.iconDark}
                        alt={feature.title}
                        className={`w-[55px] h-[55px] mt-1 theme-image ${isDark ? "text-white" : "text-[#1783F7]"}`}
                      />
                      <div>
                        <h4 className="font-semibold text-xl text-[#687DA9] dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="text-base text-[#667085] dark:text-white mt-4">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Transforming workflows */}
          <section className="bg-white dark:bg-black transition-all duration-500 ease-in">
            <style>{`
          .section-5 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            padding: 40px;
            justify-items: center;
            align-items: start;
          }
          @media screen and (max-width: 426px) {
            .section-5 {
              padding: 0 !important;
            }
          }
        `}</style>
            <h2 className="text-[#1783F7] dark:text-white text-center text-3xl font-medium mb-3">
              Transforming Workflows Across Healthcare Roles
            </h2>
            <div className="section-5 mt-5 md:mt-0">
              {/* For Clinicians */}
              <div className="flex flex-col justify-start items-start pl-5 md:pl-10 pr-2 md:pr-0">
                <h3 className="text-[#687DA9] dark:text-white font-normal text-lg md:text-xl mt-8 md:mt-0 mb-4">
                  For Clinicians
                </h3>
                <img
                  src="assets/patient360/clinical-img.png"
                  alt="For Clinicians"
                  className="mb-2"
                />
                <p className="text-[#667085] dark:text-white font-normal text-base leading-6 mb-5">
                  Gain instant access to comprehensive patient data, allowing
                  for quicker, evidence-based decisions. With ongoing health
                  tracking and proactive alerts, providers can intervene early
                  and improve patient outcomes.
                </p>
              </div>

              {/* For Healthcare Administrators */}
              <div className="flex flex-col justify-start items-start pl-5 md:pl-10 pr-2 md:pr-0">
                <h3 className="text-[#687DA9] dark:text-white font-normal text-lg md:text-xl mt-8 md:mt-0 mb-4">
                  For Healthcare Administrators
                </h3>
                <img
                  src="assets/patient360/health-administration-img.png"
                  alt="For Healthcare Administrators"
                  className="mb-2"
                />
                <p className="text-[#667085] dark:text-white font-normal text-base leading-6 mb-5">
                  Automate routine tasks like appointment reminders and patient
                  follow-ups. Optimize resource allocation with centralized
                  scheduling tools, reducing conflicts and increasing patient
                  throughput.
                </p>
              </div>
            </div>
          </section>

          {/* Why choose section */}
          <section className="py-16 px-4 sm:px-8 lg:px-20 dark:bg-black">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1783F7] dark:text-white mb-2">
                Why Choose Patient360?
              </h2>

              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:-mt-20 z-10 md:hidden">
                <div className="max-w-sm lg:max-w-md overflow-hidden bg-white px-[20px] mt-[10px]">
                  <img
                    src="assets/patient360/why-choose-patient-360-img.png"
                    alt="why choose patient 360"
                    className="md:w-full md:h-auto object-cover aspect-square"
                  />
                </div>
              </div>

              <div className="relative max-w-7xl mx-auto bg-[#F8FBFE] dark:bg-[#181818] transition-all duration-500 ease-in p-6 sm:p-10 flex flex-col lg:flex-row items-start gap-10 mt-[20px]">
                <div className="w-full lg:w-2/3 space-y-8 lg:pr-[50px]">
                  {capabilityItems.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <img
                        src="assets/arrow.svg"
                        className="mt-2 w-3 theme-image"
                        data-light="assets/arrow.svg"
                        data-dark="assets/updated/crossArrowWhite.svg"
                        alt=""
                      />
                      <div className="ml-2">
                        <h3 className="text-lg font-semibold text-[#687DA9] dark:text-white flex items-center gap-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#667085] dark:text-white mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full lg:w-1/3  justify-center lg:justify-end lg:-mt-20 z-10 hidden md:flex">
                  <div className="max-w-sm lg:max-w-md overflow-hidden bg-white">
                    <img
                      src="assets/patient360/why-choose-patient-360-img.png"
                      alt="why choose patient 360"
                      className="md:w-full md:h-auto object-cover aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Built for Today section */}
          <section className={`py-5 px-4 sm:px-8 lg:px-20 dark:bg-black`}>
            <div className="flex items-center justify-center border-t-2 py-6 border-b-2 border-gray-200 dark:border-gray-600">
              <div className="w-3/5 px-4">
                <p className="text-sm text-[#667085] dark:text-white mt-1">
                  Patient360 is not just a platform—it’s a strategic partner in
                  digital healthcare transformation. Whether you're modernizing
                  patient engagement, enhancing care coordination, or scaling
                  your health IT ecosystem, Patient360 is designed to evolve
                  with your organization's needs.
                </p>
              </div>
              <div className="w-2/5 px-4 border-l border-gray-200 dark:border-gray-600">
                <h2 className="text-black font-medium text-[30px] dark:text-white">
                  Built for Today. <br/> Ready for Tomorrow.
                </h2>
              </div>
            </div>
          </section>

          {/* Let's Transform Section */}
          <section className={`py-5 px-4 sm:px-8 lg:px-20 dark:bg-black`}>
            <div className="py-10 flex flex-col md:flex-row gap-6 border-b-2 border-gray-200 dark:border-gray-600">
              <div className="w-full md:w-1/2">
                <h2 className="text-black font-medium text-[35px] dark:text-white md:pr-[100px]">
                  Let’s Transform Healthcare, Together
                </h2>
                <p className="text-sm text-[#667085] dark:text-white mt-1">
                  Schedule a personalized demo and see how Patient360 can
                  elevate care delivery and operational efficiency for your
                  organization.
                </p>
                <a href={"/contactus"}>
                  <button className="mt-6 w-[240px] text-white dark:text-black font-semibold py-3 px-8 rounded-full flex items-center bg-[linear-gradient(141deg,rgba(139,139,139,1)_0%,rgba(23,131,247,1)_100%)] hover:bg-[linear-gradient(141deg,#787878_0%,#0653A7_100%)] dark:bg-white dark:bg-gradient-to-r dark:from-white dark:to-gray-100 dark:hover:from-gray-200 dark:hover:to-gray-400">
                    Schedule a Demo
                    <img
                      src="assets/getInArrow.svg"
                      data-light="assets/getInArrow.svg"
                      data-dark="assets/updated/crossArrow.svg"
                      alt="Arrow"
                      className="ml-2 h-3 theme-image"
                    />
                  </button>
                </a>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="assets/patient360/lets-transform-img.png"
                  alt="patient-360-lets-transform"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}

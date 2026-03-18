import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import RoundedArrowRightIcon from "../../components/ui/RoundedArrowRightIcon";
// import SquareChevronRight from "../../components/ui/SquareChevronRight";
import Patient360Logo from "../../../public/assets/patient360/patient-360-hero-logo.svg?react";
import SvgIconComponent from "../../components/ui/SvgIconComponent";

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
    description: "Patient360 is built on Microsoft Azure with role-based access control, strong data encryption, and full compliance with HIPAA and regional health regulations.",
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
  // const isDark = document.documentElement.classList.contains("dark");

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
              {/* <div className="object-contain h-10 w-auto mb-5">
                <img
                  src={
                    isDark
                      ? "assets/patient360/patient-360-hero-logo.svg"
                      : "assets/patient360/patient-360-hero-logo.svg"
                  }
                  alt="patient-360-logo"
                  className="h-full"
                />
              </div> */}
              <div>
                <SvgIconComponent icon={Patient360Logo} className="w-40 h-10"/>
              </div>
              <p
                className="font-semibold md:font-medium text-[#1783F7] dark:text-white mb-5"
                style={{ fontSize: "40px", lineHeight: "1.2" }}
              >
                Revolutionizing <br /> Healthcare with a Unified <br /> Data
                Platform
              </p>
              <p className="text-[#667085] dark:text-white text-sm leading-relaxed mb-6">
                Patient360.ai is a powerful, healthcare-specific Customer Data Platform (CDP)
                designed to deliver a 360-degree view of every patient.
                Built to streamline communication, enhance operational efficiency,
                and enable data-driven care, Patient360 empowers healthcare providers
                to deliver personalized, proactive treatment across every touchpoint.
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
                src="assets/patient360/patient-360-hero-img.png"
                alt="patient-360"
                className="w-auto h-auto max-w-full"
              />
            </div>
          </section>

          {/* Key Features */}
          <section className="w-full dark:bg-[#181818] py-16 px-4 sm:px-8 lg:px-10 bg-white">
            <div className="flex flex-col gap-6">
              <div className="sm:flex-col w-full text-center mb-6">
                <h3 className="text-gray-600 dark:text-white text-2xl font-medium mb-3">
                  Key Features
                </h3>
                <h2 className="text-[#1783F7] dark:text-white text-4xl font-semibold mb-3">
                  Patient360.ai
                </h2>
                <p className="text-[#667085] dark:text-white md:w-3/5 w-full mx-auto">
                  From individuals to teams, AutoDocX.AI streamlines
                  your document workflows—sorting, tagging, retrieving,
                  and managing files with zero hassle.
                </p>
              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 md:gap-6">
                {keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-3">
                    <h4 className="font-semibold text-xl text-[#687DA9] dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#667085] dark:text-white mt-4">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Transforming workflows */}
          <section className="bg-white dark:bg-black transition-all duration-500 ease-in py-16 px-4 sm:px-8 lg:px-10">
            <style>{`
          .section-5 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            justify-items: center;
            align-items: start;
          }
          @media screen and (max-width: 426px) {
            .section-5 {
              padding: 0 !important;
            }
          }
        `}</style>
            <h2 className="text-[#1783F7] dark:text-white text-center text-4xl font-medium mb-6">
              Transforming Workflows Across <br /> Healthcare Roles
            </h2>
            <div className="section-5 mt-5 md:mt-0">
              {/* For Clinicians */}
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-[#687DA9] font-medium dark:text-white text-lg md:text-xl mt-8 md:mt-0 mb-4">
                  For Clinicians
                </h3>
                {/* <img
                  src="assets/patient360/clinical-img.png"
                  alt="For Clinicians"
                  className="mb-2"
                /> */}
                <p className="text-[#667085] dark:text-white font-normal text-base leading-6 mb-5">
                  Gain instant access to comprehensive patient data, allowing
                  for quicker, evidence-based decisions. With ongoing health
                  tracking and proactive alerts, providers can intervene early
                  and improve patient outcomes.
                </p>
              </div>

              {/* For Healthcare Administrators */}
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-[#687DA9] font-medium dark:text-white text-lg md:text-xl mt-8 md:mt-0 mb-4">
                  For Healthcare Administrators
                </h3>
                {/* <img
                  src="assets/patient360/health-administration-img.png"
                  alt="For Healthcare Administrators"
                  className="mb-2"
                /> */}
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
          <section className="py-16 px-4 sm:px-8 lg:px-10 dark:bg-black flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl font-medium text-[#1783F7] dark:text-white mb-4">
              Why Choose Patient360?
            </h2>


            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10">
              {capabilityItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="ml-2">
                    <h3 className="text-xl font-medium text-[#687DA9] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#667085] dark:text-white mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full">
              <img
                src="assets/patient360/patient-360-why-choose-us.png"
                alt="why choose patient 360"
                className="object-cover"
              />
            </div>

          </section>

          {/* Built for Today section & Let's Transform Section*/}
          <section className={`py-16 px-4 sm:px-8 lg:px-10 dark:bg-black`}>
            <div className="border-t border-b border-gray-200 dark:border-gray-600 flex flex-col md:flex-row md:justify-center">
              <div className="px-6 py-6 w-full md:w-1/2">
                <h2 className="text-black font-medium text-2xl dark:text-white text-center">
                  Built for Today. <br /> Ready for Tomorrow.
                </h2>
                <p className="text-sm text-[#667085] dark:text-white mt-2 text-center">
                  Patient360 is not just a platform—it’s a strategic partner in
                  digital healthcare transformation. Whether you're modernizing
                  patient engagement, enhancing care coordination, or scaling
                  your health IT ecosystem, Patient360 is designed to evolve
                  with your organization's needs.
                </p>
              </div>
              <div className="px-6 py-6 w-full md:w-1/2">
                <h2 className="text-black font-medium text-2xl dark:text-white text-center">
                  Let’s Transform <br /> Healthcare, Together
                </h2>
                <p className="text-sm text-[#667085] dark:text-white mt-2 text-center">
                  Schedule a personalized demo and see how Patient360 can elevate
                  care delivery and operational efficiency for your organization.
                </p>
              </div>
            </div>

          </section>

          {/* Let's Transform Section */}
          {/* <section className={`py-5 px-4 sm:px-8 lg:px-20 dark:bg-black`}>
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
                    <RoundedArrowRightIcon className="w-5 h-5 mx-1" />
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
          </section> */}
        </main>
      </PageTransition>
    </>
  );
}

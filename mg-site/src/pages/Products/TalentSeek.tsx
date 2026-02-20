import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";

interface FeatureColumn {
  title: string;
  description: string;
  items: string[];
}

export default function TalentSeek() {
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

  const features: FeatureColumn[] = [
    {
      title: "Smart Dashboard",
      description:
        "Monitor workforce dynamics with real-time dashboards showing onboarding/offboarding trends, location-based distributions, and request activity all in one place.",
      items: [
        "View total employee stats: onboarded, offboarded, and active.",
        "Get real-time charts by location, role, and profile activity.",
        "Visual insights into onboarding/offboarding trends.",
      ],
    },

    {
      title: "Inventory Manager",
      description:
        "Easily configure organizational hierarchies by adding roles, designations, departments, and skill sets. Ensure structured growth with mandatory role mapping.",
      items: [
        "Add roles, designations, departments, and skills.",
        "Mandatory role selection for designation mapping.",
      ],
    },
    {
      title: "Employee Directory",
      description:
        "Access complete employee lists onboarded or offboarded with advanced search, filtering, and detailed profiles. Perform single or bulk onboarding with ease.",
      items: [
        "Searchable, filterable lists of onboarded/offboarded staff.",
        "Bulk and single onboarding options.",
        "Edit employee details, track offboarding status, and revoke with reasons.",
        "Ensure asset, ID, and dues clearance before final offboarding.",
      ],
    },

    {
      title: "Collaborate",
      description:
        "Explore team structures and profiles with smart filtering. Simplify internal communication by making people and their skills easily discoverable.",
      items: [
        "Discover and explore employee profiles in detail.",
        "Filter by team, department, or location.",
      ],
    },
    {
      title: "Project Management",
      description:
        "Onboard new projects, assign team members, and edit details all in one view. Stay on top of project performance, resources, and timelines.",
      items: [
        "Onboard new projects with ease.",
        "View project-level details, assign team members, and edit tasks.",
        "Centralized view of resources, timelines, and deliverables.",
      ],
    },
    {
      title: "Timesheet & Task Logs",
      description:
        "Log daily tasks, track working hours, and get approval from reporting managers. Includes smart validations, edit options, and custom reporting filters.",
      items: [
        "Auto-calculated hours.",
        "Backdated fill requests.",
        "Quick approvals & edits.",
        "Smart filtering by date range",
      ],
    },
  ];

  const onePlatform: Omit<FeatureColumn, "description">[] = [
    {
      title: "Super Admin",
      items: [
        "Full access to all modules.",
        "Manage employee lifecycles.",
        "Project control & task assignments.",
        "Track all types of user activity and data",
      ],
    },

    {
      title: "Human Resource",
      items: [
        "Onboard/offboard employees.",
        "Manage employee data and request approvals.",
        "Ensure compliance during exits.",
      ],
    },
    {
      title: "Manager",
      items: [
        "Timesheet approvals: pending, accepted, rejected.",
        "Assign and review project tasks.",
        "Grade completed tasks or reject with feedback.",
        "Track task submissions and project health.",
        "Manage certificates and reporting",
      ],
    },

    {
      title: "Employee",
      items: [
        "View hot skills, project involvement, and work locations.",
        "Fill, submit, and track timesheets.",
        "Request to edit past entries.",
        "Complete assigned tasks.",
        "Use calendar to view task status by date",
      ],
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <PageTransition>
        <main className="transition-all duration-500 ease-in">
          {/* Hero Section */}
          <section
            className="flex flex-col md:flex-row justify-between items-center md:items-center bg-white dark:bg-black transition-all duration-500 ease-in"
          >
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
                      ? "assets/talent-seak-hero-logo.svg"
                      : "assets/talent-seak-hero-logo.svg"
                  }
                  alt="talent-seak"
                  className="h-full"
                />
              </div>
              <p
                className="font-semibold md:font-medium text-[#1783F7] dark:text-white mb-5"
                style={{ fontSize: "40px", lineHeight: "1.2" }}
              >
                AI-Powered Talent <br/> Management <br/> System
              </p>
              <p className="text-[#667085] dark:text-white text-base leading-relaxed mb-6">
                Effortless onboarding, project allocation, performance tracking,
                and HR collaboration-all in one platform.
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
                src="assets/talent-seek-hero-img.png"
                alt="talentSeek"
                className="w-auto h-auto max-w-full"
              />
            </div>
          </section>

          {/* Key Modules Header Section */}
          <section className="bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in pt-9 md:pt-16 pb-8">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[#2FC1FF] dark:text-white font-medium text-lg mb-6">
                Key Modules
              </p>
              <p className="text-[#687DA9] dark:text-white font-normal text-xl sm:text-3xl lg:text-5xl leading-tight mb-5 px-4">
                Empowering Every Role to Work Smarter
              </p>
              <p className="text-[#667085] dark:text-white font-normal text-base leading-6 max-w-3xl px-4">
                From HR to managers to employees, TMS delivers tailored tools
                and insights that streamline workflows, automate tasks, and
                foster seamless collaboration—so every role performs at its
                best.
              </p>
            </div>
          </section>

          {/* Feature Columns Section */}
          <section className="bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in">
            <style>{`
          .section-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            padding: 40px;
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
              {[...features].map((column, idx) => (
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

          {/* Role Based Views Header Section */}
          <section className="bg-white dark:bg-black transition-all duration-500 ease-in pt-9 md:pt-16 pb-8">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[#2FC1FF] dark:text-white font-medium text-lg mb-6">
                Role Based Views
              </p>
              <p className="text-[#687DA9] dark:text-white font-normal text-xl sm:text-3xl lg:text-5xl leading-tight mb-5 px-4">
                One Platform. Tailored for Every Role.
              </p>
              <p className="text-[#666666] dark:text-white font-normal text-base leading-6 max-w-3xl px-4">
                From HR and managers to employees and admins, TMS offers
                role-specific dashboards, permissions, and workflows ensuring
                everyone gets exactly what they need to work efficiently and
                stay aligned.
              </p>
            </div>
          </section>

          {/* One Platform Column Section */}
          <section className="bg-white dark:bg-black transition-all duration-500 ease-in">
            <style>{`
          .section-4 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            padding: 0px 20px 40px 0px;
            justify-items: center;
            align-items: start;
          }
          @media screen and (max-width: 426px) {
            .section-4 {
              padding: 0 !important;
            }
          }
        `}</style>
            <div className="section-4">
              {[...onePlatform].map((column, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-start items-start pl-5 md:pl-10 pr-2 md:pr-0"
                >
                  <p className="text-[#687DA9] dark:text-white font-semibold text-2xl md:text-3xl mb-5">
                    {column.title}
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
        </main>
      </PageTransition>
    </>
  );
}

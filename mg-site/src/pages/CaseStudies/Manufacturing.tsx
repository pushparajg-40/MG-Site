import Header from "../../components/casestudies/Header";
import AtAGlance from "../../components/casestudies/AtGlance";
import Challenge from "../../components/casestudies/Challenge";
import OtherCaseStudies from "../../components/casestudies/OtherCaseStudies";
import OutcomesAndBenefits from "../../components/casestudies/OutcomesAndBenefits";
import SolutionList from "../../components/casestudies/SolutionList";
import PageTransition from "../../components/PageTransition";

const headerProps = {
  title: "Manufacturing",
  subtitle: "AI-Driven Jewelry Design Innovation – GenAI DesignSmith Platform",
  desc: "A global jewelry design company wanted to accelerate its design process, reduce manual workload for designers, and leverage global design inspirations.",
  bannerImage: "/assets/updated/manufacturing.png",
};

const glanceProps = {
  arrowLight: "/assets/arrow.svg",
  arrowDark: "/assets/updated/crossArrowWhite.svg",
  items: [
    {
      title: "Industry",
      value: "Manufacturing",
    },
    {
      title: "What We Delivered",
      value: "Big data pipelines, customer 360, O/BSS integrations, DataOps",
    },
    {
      title: "Solution",
      value: "Enterprise Data Modernization & Analytics Enablement",
    },
    {
      title: "Impact",
      value:
        "Faster insights, better segmentation, reliable reporting, AI-ready ecosystem",
    },
    {
      title: "Key Challenges",
      value: "Data fragmentation, slow insights, limited customer intelligence",
    },
  ],
};

const challengeProps = {
  title: "The Challenge",
  desc: "The telecom operator faced several critical data and operational challenges:",
  challenges: [
    "Designers spent long hours generating concept sketches",
    "No centralized system to search designs globally",
    "Needed a platform combining creativity with AI-driven inspiration",
    "Wanted to shorten time-to-market for new jewelry collections",
  ],
};

const outcomes = [
  "Significantly reduced design ideation time",
  "Access to global design inspirations within seconds",
  "Faster product development cycles",
  "Increased creativity and innovation for designers",
  "Foundation for AI-assisted manufacturing optimization",
];

const solutionListProps = {
  subtitle: "Mindgraph implemented DesignSmith – an AI Jewelry Design Agent:",
  items: [
    "AI Agents that scrape, search, and index global jewelry designs",
    "GenAI-based design generation using an existing design as inspiration",
    "Image-to-concept and concept-to-design generation workflows",
    "Supports design teams with instant variations and new creative patterns",
    "Cloud-enabled platform for fast iteration",
  ],
};

function Manufacturing() {
  return (
    <PageTransition>
      <div className="dark:bg-black">
        <Header {...headerProps} />
        <AtAGlance {...glanceProps} />
        <Challenge {...challengeProps} />
        <SolutionList {...solutionListProps} />
        <OutcomesAndBenefits items={outcomes} />
        <OtherCaseStudies />
      </div>
    </PageTransition>
  );
}

export default Manufacturing;

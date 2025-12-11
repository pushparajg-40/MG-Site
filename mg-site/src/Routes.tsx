
import AboutUs from "./pages/AboutUs";
import Airports from "./pages/CaseStudies/Airports";
import BankingServices from "./pages/CaseStudies/BFSI";
import Energy_Utilities from "./pages/CaseStudies/Energy_Utilities";
import HealthCare from "./pages/CaseStudies/HealthCare";
import Manufacturing from "./pages/CaseStudies/Manufacturing";
import Telecom from "./pages/CaseStudies/Telecom";
import ContactUs from "./pages/ContactUs";
import CookiesPolicy from "./pages/CookiesPolicy";
import Home from "./pages/Home";
import Industries from "./pages/Industires";
import AIMachineLearning from "./pages/OurCapbilities/AI&MachineLearning";
import Cloud_Infrastructure from "./pages/OurCapbilities/Cloud&Infrastructure";
import CyberSecurity from "./pages/OurCapbilities/CyberSecurity";
import ERP_CRM_AI_Ecosystem from "./pages/OurCapbilities/ERP_CRM_AI_Ecosystem";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Products from "./pages/Products";
import CustomerDlens from "./pages/Products/CustomerDlens";
import Mathops from "./pages/Products/Mathops";
import OpsBeat from "./pages/Products/OpsBeat";
import OptiSaasPage from "./pages/Products/OptiSaas";
import { SmartSustain } from "./pages/Products/SmartSustain";
import Service from "./pages/Service";
import AIDI_Services from "./pages/Services/AI&DI_Services";
import AppDevServices from "./pages/Services/AppDevServices";
import CloudInfrastructureServices from "./pages/Services/CloudInfrastructureServices";
import Consulting_AdvisoryServices from "./pages/Services/Consulting_AdvisoryServices";
import CRM_ERP_Services from "./pages/Services/CRM_ERP_Services";
import SapService from "./pages/Services/SapService";
import Terms from "./pages/Terms";

export const routes = [
  {
    path: "",
    element: <Home></Home>,
  },
  {
    path: "/aboutUs",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/services",
    element: <Service></Service>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "/customerDlens",
    element: <CustomerDlens></CustomerDlens>,
  },

  {
    path: "/airports",
    element: <Airports></Airports>,
  },
  {
    path: "/industries",
    element: <Industries></Industries>,
  },
  { path: "/AppDevServices", element: <AppDevServices></AppDevServices> },
  {
    path: "/AI&DI_Services",
    element: <AIDI_Services></AIDI_Services>,
  },
  {
    path: "/SapEnterpriseServices",
    element: <SapService></SapService>,
  },
  {
    path: "/CRM&ERPServices",
    element: <CRM_ERP_Services></CRM_ERP_Services>,
  },
  {
    path: "/CloudInfrastructureServices",
    element: <CloudInfrastructureServices></CloudInfrastructureServices>,
  },
  {
    path: "/Consulting&AdvisoryServices",
    element: <Consulting_AdvisoryServices></Consulting_AdvisoryServices>,
  },
  {
    path: "/mathops",
    element: <Mathops></Mathops>,
  },
  {
    path: "/Energy_Utilities",
    element: <Energy_Utilities></Energy_Utilities>,
  },
  {
    path: "/AI&MachineLearning",
    element: <AIMachineLearning></AIMachineLearning>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/opsBeat",
    element: <OpsBeat></OpsBeat>,
  },
  {
    path: "/optiSaas",
    element: <OptiSaasPage></OptiSaasPage>,
  },
  {
    path: "/smartSustain",
    element: <SmartSustain></SmartSustain>,
  },
  {
    path: "/Healthcare",
    element: <HealthCare></HealthCare>,
  },
  {
    path: "/Manufacturing",
    element: <Manufacturing></Manufacturing>,
  },
  {
    path: "/BFSI",
    element: <BankingServices></BankingServices>,
  },
  {
    path: "/telecom",
    element: <Telecom></Telecom>,
  },
  {
    path: "/CyberSecurity",
    element: <CyberSecurity></CyberSecurity>,
  },
  {
    path: "/Cloud_Infrastructure",
    element: <Cloud_Infrastructure></Cloud_Infrastructure>,
  },
  {
    path: "/ERP_CRM&AI_Ecosystem",
    element: <ERP_CRM_AI_Ecosystem></ERP_CRM_AI_Ecosystem>,
  },
  {
    path: "terms",
    element: <Terms></Terms>,
  },
  {
    path: "cookies",
    element: <CookiesPolicy></CookiesPolicy>,
  },
  {
    path: "privacy",
    element: <PrivacyPolicy></PrivacyPolicy>,
  },
];

import "./App.css";
import Layout from "./components/Layout";
import AboutUs from "./pages/About";
import Service from "./pages/Service";
import Industries from "./pages/Industires";
import AppDevServices from "./pages/Services/AppDevServices";
import Airports from "./pages/CaseStudies/Airports";
import CustomerDlens from "./pages/Products/CustomerDlens";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import AIDI_Services from "./pages/Services/AI&DI_Services";
import SapService from "./pages/Services/SapService";
import CRM_ERP_Services from "./pages/Services/CRM_ERP_Services";
import CloudInfrastructureServices from "./pages/Services/CloudInfrastructureServices";
import Consulting_AdvisoryServices from "./pages/Services/Consulting_AdvisoryServices";
import Mathops from "./pages/Products/Mathops";
import Energy_Utilities from "./pages/CaseStudies/Energy_Utilities";
import AIMachineLearning from "./pages/AI&MachineLearning";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

const routes = [
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
    path: "/AIMachineLearning",
    element: <AIMachineLearning></AIMachineLearning>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/aboutUs" element={<AboutUs />} />
          {routes.map((r) => {
            return (
              <Route key={r.path} path={r.path} element={r.element}></Route>
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;

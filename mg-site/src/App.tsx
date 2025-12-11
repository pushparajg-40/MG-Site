import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./Routes";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            {routes.map((r) => {
              return (
                <Route key={r.path} path={r.path} element={r.element}></Route>
              );
            })}
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

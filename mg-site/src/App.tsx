import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
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

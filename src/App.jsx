import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/layout/Index";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";
import Projetcs from "./pages/Projetcs";
import Services from "./pages/Services";
import MouseTrail from "./components/common-components/MouseTrail"

function App() {
  return (
    <>
      <BrowserRouter>
        <MouseTrail/>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/aboutPage" element={<About />} />
              <Route path="/servicePage" element={<Services />} />
              <Route path="/projectsPage" element={<Projetcs />} />
              <Route path="/contactPage" element={<Contact />} />
            </Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

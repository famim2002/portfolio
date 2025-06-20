import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Services from "./pages/Services";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";
import Layout from "./layout/Index";
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="services" element={<Services />} />
          <Route path="demo" element={<Demo />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter, Route,Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/layout/Index'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/aboutPage" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

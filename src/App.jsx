import { useState } from 'react'
import { BrowserRouter } from 'react-router'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import About from './pages/About'
import Services from './pages/Services'
import Demo from './pages/Demo'
import Contact from './pages/Contact'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/contact" element={<Contact />} />
              
            </Route>
          </Route>
          <Route path="*" element={<Error404 />}></Route>
    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

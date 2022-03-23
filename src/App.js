import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import About from './pages/about/about'
import Body from './pages/body/body'
import Contact from './pages/contact/contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}


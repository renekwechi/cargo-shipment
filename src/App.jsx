import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Homepage'
import Service from './Components/Service'
import Tracking from './Components/Tracking'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      //Global settings:
      offset: 50,
      duration: 3000,
      easing: 'ease',
      once: true
    });
  }, []);
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/tracking" element={<Tracking />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />

    </div>
  )
}

export default App
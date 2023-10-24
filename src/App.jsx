import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"

import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import KelasPages from "./pages/KelasPages"
import TestimonialPages from "./pages/TestimonialPages"
import FaqPage from "./pages/FaqPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<KelasPages />} />
        <Route path="/testimonial" element={<TestimonialPages />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/syaratketen" element={<SyaratKetenPage />} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App

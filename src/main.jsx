import React from "react"

import { createRoot } from "react-dom/client" // Perhatikan perubahan ini.
import App from "./App.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "./dist/zikri-course/css/main.css"

import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { BrowserRouter } from "react-router-dom"

AOS.init()

const root = document.getElementById("root")

if (root) {
  const rootElement = createRoot(root)

  rootElement.render(
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

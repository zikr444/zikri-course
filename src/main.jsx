import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "./dist/css/main.css"

import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { BrowserRouter } from "react-router-dom"

AOS.init()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

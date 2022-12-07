import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/App.css"

import Header from "./sections/Header"
import Home from "./pages/Home"
import Cupcakes from "./pages/Cupcakes"
import Nosotros from "./pages/Nosotros"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {

  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Cupcakes" element={<Cupcakes/>}></Route>
        <Route path="/Nosotros" element={<Nosotros/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/App.css"
import Header from "./sections/Header"
import Home from "./pages/Home"
import Cupcakes from "./pages/Cupcakes"

const App = () => {

  return(
    <>
      <Header/>
      <Home/>
      <Cupcakes/>
    </>
  )
}

export default App;
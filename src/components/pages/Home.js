import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/pages/Home.css"
import Banner from "../sections/Banner"
import Cupcakes from "./Cupcakes"
import Servicios from "../sections/Servicios"

const Home = () => {

  return(
    <>
      <Banner/>
      <Servicios />
      <Cupcakes peticion="/Cupcakes?sabor_like=frutilla"/>
    </>
  )
}

export default Home;
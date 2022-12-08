import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/pages/Cupcakes.css"

import { useEffect, useState } from "react"
import Cupcake from "../cards/Cupcake"


const Cupcakes = () => {

  const [Cupcakes, setCupcakes] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/Cupcakes").then(response => response.json()).then(data => setCupcakes(data))
  }, [])

  return(
    <header className='Cupcakes-header'>
      <div className='Cupcakes-titles'>
        <h1>Lista de Cupcakes</h1>
      </div>
      {Cupcakes ? (
      <section className='Cupcakes-list'>
        {Cupcakes.map(({color, sabor, descripcion, precio, id}) => (
          <Cupcake key={id} color={color} sabor={sabor} descripcion={descripcion} precio={precio} id={id}/>
        ))}
      </section>) : 
      (<span>Cargando...</span>)}
    </header>
  )
}


export default Cupcakes;
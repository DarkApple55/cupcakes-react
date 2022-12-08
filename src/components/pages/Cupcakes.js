import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/pages/Cupcakes.css"

import { useEffect, useState } from "react"
import Cupcake from "../cards/Cupcake"

const Cupcakes = ({sabor = ""}) => {

  // fetch("http://localhost:3001/Cupcakes").then(response => response.json()).then(data => setCupcakes(data))
  const db_GetCupcakes = async() => {
    const response = await fetch(`${process.env.REACT_APP_URL_API}/Cupcakes?sabor_like=${sabor}`)
    const data = await response.json()
  return data
  }

  const [Cupcakes, setCupcakes] = useState([])
  useEffect(() => {db_GetCupcakes().then(data => setCupcakes(data))}, [])

  return(
    <header className='Cupcakes-header'>
      <div className='Cupcakes-titles'>
        <h1>Lista de Cupcakes {sabor ? (<>SABOR FRUTILLA</>) : (<></>)}</h1>
      </div>
      <section className='Cupcakes-list'>
        {Cupcakes[0] ? (Cupcakes.map(({color, sabor, descripcion, precio, id}) => (
            <Cupcake key={id} color={color} sabor={sabor} descripcion={descripcion} precio={precio} id={id} />
          ) )) : (<span>Cargando...</span>)}
      </section>
    </header>
  )
}

export default Cupcakes;
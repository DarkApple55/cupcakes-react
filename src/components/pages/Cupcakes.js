import "../../styles/pages/Cupcakes.css"
// import "@styles/pages/Cupcakes.css"
import Cupcake from "../cards/Cupcake"
import useFetch from "hooks/useFetchGet"
import { useState } from "react"
import { Link } from "react-router-dom"

const Cupcakes = ({ peticion = "/Cupcakes" }) => {

  const [listaCupcakes, useFetchError] = useFetch(peticion)
  const [cupcakes, setCupcakes] = useState(listaCupcakes)

  const ventaLista = () => { // no funciona todavía
    for (let c of cupcakes) {
      if(c.vendido) {
        c.vendido = true
        db_PutData(peticion, c)
      }
    }
  }

  //#region "update capkes"
  const db_PutData = async (request, cupcake) => {
    const response = await fetch(`${process.env.REACT_APP_URL_API}${request}`, {
      method: "PUT",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(cupcake)
    })
  }

  const updateCupcake = (cupcake) => {
    setCupcakes([...cupcakes, cupcake])
    db_PutData(`/Cupcakes/${cupcake.id}`, cupcake)
  }
  //#endregion "update capkes"

  //#region "html"
  const html_listaCupcakes = () => {
    if (useFetchError) return <span>Hubo un error</span>
    else if (!cupcakes) return <span>No hay servicios destacados por el momento</span>
    return listaCupcakes.map(cupcake => (
      <Cupcake key={cupcake.id} cupcake={cupcake} updateCupcake={updateCupcake} />
    ))
  }
  //#endregion "html"

  return (
    <header className='Cupcakes-header'>
      <div className='Cupcakes-titles'>
        <h1>Lista de Cupcakes {peticion.split('=')[1] ? (<>SABOR {peticion.split('=')[1]}</>) : (<></>)}</h1>
      </div>
      <Link href="/" className="btn btn-primary Cupcakes-button" onClick={ventaLista}>Todos a la venta</Link>
      <section className='Cupcakes-list'>
        {html_listaCupcakes()}
      </section>
    </header>
  )
}

export default Cupcakes;
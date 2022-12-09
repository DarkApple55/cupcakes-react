import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/sections/Servicios.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Servicios = ({peticion = "/Servicios"}) => {

    const db_GetServicios = async request => {
        const response = await fetch(`${process.env.REACT_APP_URL_API}${request}`)
        const data = await response.json()
        return data
    }

    const [Servicios, setServicios] = useState([])
    useEffect(() => { db_GetServicios(peticion).then(data => setServicios(data)).catch(err => console.log(err)) }, [peticion])

    const htmlServicios = () => {
        if (!Servicios[0]) return
        return Servicios.map(({ id, nombre, descripcion }) => (
            <div class="card">
                <div class="card-header">
                    Destacado {id}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{nombre}</h5>
                    <p class="card-text">{descripcion}</p>
                    <Link href="/" class="btn btn-primary button-servicios">Go somewhere</Link>
                </div>
            </div>
        ))
    }

    return (
        <>
            <h1 className="Servicios-title">Lista de Servicios</h1>
            <div className="cards-container">
                {htmlServicios()}
            </div>
        </>
    )
}

export default Servicios
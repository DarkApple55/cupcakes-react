import "../../styles/sections/Servicios.css"
import { Link } from "react-router-dom"
import useFetch from "hooks/useFetchGet"

const Servicios = ({peticion = "/Servicios"}) => {
 
    const [Servicios, useFetchError] = useFetch(peticion)
    
    const html_listaServicios = () => {
        if (useFetchError) return <span>Hubo un error: {JSON.stringify(useFetchError)}</span>
        if (!Servicios.length) return <span>No hay servicios destacados por el momento</span>

        return Servicios.map(({ id, nombre, descripcion }) => (
            <div className="card" key={id}>
                <div className="card-header">
                    Destacado {id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <Link href="/" className="btn btn-primary button-servicios">Go somewhere</Link>
                </div>
            </div>
        ))
    }

    return (
        <>
            <h1 className="Servicios-title">Lista de Servicios</h1>
            <section className="cards-container">
                {html_listaServicios()}
            </section>
        </>
    )
}

export default Servicios
import foto from "../../recouses/img/cupcake.png"
import "../../styles/cards/Cupcake.css"
import {useState, useRef} from "react";

const Cupcake = ({color, sabor, descripcion, precio, id}) => {

    const [vendido, setVendido] = useState(false)
    const [reservado, setReservado] = useState(false)
    const imgCupcake = useRef()

    const vender = () => {
        setVendido(true)
        setReservado(true)
        imgCupcake.current.classList.add("img-vendido")
    }
    const reservar = () => setReservado(true)

    return(
        <div className="Cupcake-header">
            <img ref={imgCupcake} src={foto} alt={sabor} className="Cupcake-img"/>
            <h2 className="Cupcake-title">Cupcake {id}</h2>
            <div style={{marginLeft: "1rem"}}>
                <p><b>Sabor:</b> {sabor}</p>
                <p><b>Color:</b> {color}</p>
                <p><b>Precio:</b> {precio}</p>
                <p><b>Descripción:</b></p>
                <p>{descripcion}</p>
            </div>
            <div className="Cupcake-footer">
                {reservado && <button className="Cupcake-button-disabled" disabled>Reservar</button>}
                {!reservado && <button className="Cupcake-button" onClick={reservar}>Reservar</button>}

                {vendido && <button className="Cupcake-button-disabled" disabled>Comprar</button>}
                {!vendido && <button className="Cupcake-button" onClick={vender}>Comprar</button>}
            </div>
        </div>
    )
};

export default Cupcake;
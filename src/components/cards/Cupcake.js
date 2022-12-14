import foto from "../../recouses/img/cupcake.png"
import "../../styles/cards/Cupcake.css"
import { useRef } from "react";

const Cupcake = ({ cupcake, updateCupcake, ...props }) => {
    const imgCupcake = useRef()
    const vender = () => {        
        cupcake.vendido = true
        updateCupcake(cupcake)
        // imgCupcake.current.classList.add("img-vendido")
    }

    return (
        <div className="Cupcake-header">
            <div className="img-title">
                <img ref={imgCupcake} src={foto} alt={cupcake.sabor} className="Cupcake-img" />
                <h2 className="Cupcake-title">Cupcake {cupcake.id}</h2>
            </div>
            <div style={{ marginLeft: "1rem" }}>
                <p><b>Sabor:</b> {cupcake.sabor}</p>
                <p><b>Color:</b> {cupcake.color}</p>
                <p><b>Precio:</b> {cupcake.precio}</p>
                <p><b>Descripción:</b> {cupcake.descripcion}</p>
            </div>
            <div className="Cupcake-footer">
                {!cupcake.vendido && <button className="Cupcake-button" onClick={vender}>Comprar</button>}
                {cupcake.vendido && <button className="Cupcake-button-disabled" disabled>Comprar</button>}
            </div>
        </div>
    )
};

// Cupcake.propTypes = {
//     precio: number,
//     id: number.isRequired
// }

export default Cupcake;
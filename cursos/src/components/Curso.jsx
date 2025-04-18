import { useRef } from "react"
const Curso = ({ name, text, img, price }) => {
    const miReferencia = useRef()
    const maniobra = () => {
        const elemento = miReferencia.current
        const elementos = elemento.querySelectorAll('*:not(.divbotones):not(.boton)');
        elementos.forEach(el => el.classList.toggle('desactivado'))
        const elBoton = elemento.querySelector('.boton')
        elBoton.classList.toggle('bgRojo')
        elBoton.innerText = elBoton.innerText === 'Activar' ? "Desactivar" : "Activar"
        const botonComprar = elemento.querySelector('.btn-comprar')
        botonComprar.disabled = !botonComprar.disabled
        botonComprar.classList.toggle('btn-comprar-disabled')
    }
    const alertaComprado = () => {
        alert("Has Comprado el curso: " + name)
    }
    return (
        <>
            <div ref={miReferencia} className="curso" >
                <img src={img} alt={name} />
                <h2>{name} <span className="precio">{price}€</span></h2>
                <p>{text}</p>
                <div className="divbotones">
                    <button className="btn-comprar"
                        onClick={() => { alertaComprado() }}>
                        Comprar Curso
                    </button>
                    <button className="boton"
                        onClick={() => { maniobra() }}>
                        Desactivar
                    </button>
                </div>
            </div>
        </>
    )
}
export default Curso
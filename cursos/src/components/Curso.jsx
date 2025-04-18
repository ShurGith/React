import { useRef } from "react"
const Curso = ({ name, text, img }) => {
    const miReferencia = useRef()
    const maniobra = (elemento) => {
        console.log(elemento)
        const elementos = elemento.querySelectorAll('*:not(.divbotones):not(.boton)');
        console.log(elementos)
        elementos.forEach(el => el.classList.toggle('desactivado'))
        const elBoton = elemento.querySelector('.boton')
        elBoton.classList.toggle('bgRojo')
        elBoton.innerText = elBoton.innerText === 'Desactivado' ? "Desactivar" : "Desactivado"
        // elBoton.innerText = 'desactivado'
    }
    return (
        <>
            <div ref={miReferencia} className="curso" >
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <p>{text}</p>
                <div className="divbotones">
                    <button>Comprar Curso</button>
                    <button className="boton" onClick={() => {
                        //    console.log(miReferencia.current)
                        maniobra(miReferencia.current)
                        //miReferencia.current.classList.toggle("desactivado");
                    }}>
                        Desactivar</button>
                </div>
            </div>
        </>
    )
}
export default Curso
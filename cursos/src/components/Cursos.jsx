import { useRef } from "react"
import ListCursos from "./ListCursos"
const Cursos = () => {
    const cursos = ListCursos()
    const miReferencia = useRef()

    return (
        <div className="divcursos">
         /*   {cursos.map((curso) => (
            <div className="curso" key={curso.id} id={curso.id}>
                <img ref={miReferencia} src={curso.img} alt={curso.name} />
                <h2>{curso.name}</h2>
                <p>{curso.text}</p>
                <div className="divbotones">
                    <button>Comprar Curso</button>
                    <button onClick={() => {
                        /*const dive = document.querySelector(`div[id="${curso.id}"]`);
                         console.dir(dive.children[0]);
                         dive.children[0].classList.toggle("desactivado");*/
                        console.log(miReferencia.current);
                    }}>Desactivar</button>
                </div>
            </div>
        ))
            }*/
        </div>
    )
}
export default Cursos
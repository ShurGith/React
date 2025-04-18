import { useState, useEffect } from "react";

const Calculadora = () => {
    const [numeros, setNumeros] = useState({
        number1: 0,
        number2: 0,
    });
    const [texto, setTexto] = useState("");

    useEffect(() => {
        console.log(new Date().getTime());
        return () => {
            console.log("Limpiando el efecto");
        }
    }, []);

    const setNumber1 = (e) => {
        setNumeros({
            ...numeros,
            number1: e.target.value
        })
    }
    const setNumber2 = (e) => {
        setNumeros({
            ...numeros,
            number2: e.target.value
        })
    }

    return (
        <>
            <h3 >Contador: {Number(numeros.number1) + Number(numeros.number2)} </h3>
            <div className="flex gap-4">
                <input type="number" name="number1" value={numeros.number1}
                    onChange={setNumber1} />
                <input type="number" name="number2" value={numeros.number2}
                    onChange={setNumber2} />
            </div>
            <input className="mt-4 border-amber-500 border text-center bg-green-700 text-white p-2 rounded-md"
                type="text" name="texto" onChange={(e) => setTexto(e.target.value)} />
            <p>{texto}</p>
        </>
    )
}
export default Calculadora; 
const Contador = ({ valor = 20, setValor }) => {
    const incrementar = () => {
        setValor(valor + 1);
    }
    const decrementar = () => {
        setValor(valor - 1);
    }

    return (
        <>

            <h3 >Contador: {valor}</h3>
            <button
                className="cursor-pointer ml-4 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={incrementar}>Incrementar
            </button>
            <button
                className="cursor-pointer ml-4 my-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={decrementar}>Decrementar
            </button>
        </>
    )
}
export default Contador
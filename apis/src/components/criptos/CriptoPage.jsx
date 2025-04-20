import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'; 4
import axios from "axios";


const CriptoPage = () => {

    const navigate = useNavigate();
    const { id } = useParams()
    //const [isLoading, setIsLoading] = useState(false);
    const apiKey = import.meta.env.VITE_API_KEY
    const options = `assets/${id}`    //const laId =  id
    const apiUrl = import.meta.env.VITE_API_URL + options + "?apiKey=" + apiKey
    const [cripto, setCripto] = useState(null)
    const [errorMen, setErrorMen] = useState(false)

    const getCripto = async () => {
        try {
            const response = axios.get(apiUrl)
            const data = await response
            setCripto(data.data.data)
        } catch (error) {
            setErrorMen(error.status)
            console.log('La petición ha fallado', error.status)
        }
    }

    useEffect(() => {
        getCripto()
        if (errorMen === 404) {
            // Si no se encuentra el producto, redirige
            navigate('/404', {
                replace: true,
                state: { message: `No existe el cripto con el ID: ${id} que buscas.` }
            });
            return;
        }
    })

    if (!cripto) return <p>Cargando... {apiUrl}</p>
    return (
        <div>
            <h1>CriptoPage</h1>
            <h2>{cripto.name}</h2>
            <h3>Precio: {parseFloat(cripto.priceUsd).toFixed(3)}</h3>
            <h3>Variación: {parseFloat(cripto.changePercent24Hr).toFixed(3)} %</h3>
            <h3>Rank: {cripto.rank}</h3>
            <h3>Web: <a href={cripto.explorer} target="_blank" rel="noopener noreferrer">{cripto.symbol}</a></h3>
            <h3>Id: {cripto.id}</h3>
            <h3>Tipo: {cripto.type}</h3>
            <h3>Circulante: {cripto.supply}</h3>
            <h3>Max Supply: {cripto.maxSupply}</h3>
        </div>
    );
};
export default CriptoPage;
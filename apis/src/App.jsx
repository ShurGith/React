import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const options = "assets/"
  const cantidades = "&offset=20&limit=20"
  const apiUrl = import.meta.env.VITE_API_URL + options + "?apiKey=" + apiKey + cantidades

  const [criptos, setCriptos] = useState()
  const [datos, setDatos] = useState()
  useEffect(() => {
    axios.get(apiUrl)
      .then(data => {
        //  console.log(data)
        setDatos(data.status)
        console.log(datos)
        setCriptos(data.data.data)
      })
      .catch(error => console.log('La petición ha fallado', error))
  }, [])

  if (datos !== 200) return <p>Cargando...</p>
  return (
    <>
      <h1>Lista de Critpomoedas</h1>
      <h2>Estado de la peticion: {datos}</h2>
      <ul>
        {criptos && criptos.map(({ name, priceUsd, id, symbol, explorer, rank }) => (
          <li key={id} className="liCriptos">
            <div className="rank"> <h5>Rank: {rank}</h5></div>
            <div className="nombre"> Nombre:<h5>{name}</h5></div>
            <div className="precio"><h5>Precio: </h5>{priceUsd}</div>
            <div className="web"><h5>Web:</h5><a href={explorer} target="_blank"> {symbol} </a></div>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App

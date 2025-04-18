import { useEffect, useState } from "react"
import IcoNavigation from "./IcoNavigation"
import axios from "axios"

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const options = "assets/"
  const cantidades = "&offset=0&limit=21"
  const apiUrl = import.meta.env.VITE_API_URL + options + "?apiKey=" + apiKey + cantidades

  const [criptos, setCriptos] = useState()
  const [datos, setDatos] = useState()
  useEffect(() => {
    axios.get(apiUrl)
      .then(data => {
        //  console.log(data)
        setDatos(data.status)
        // console.log(datos)
        setCriptos(data.data.data)
      })
      .catch(error => console.log('La petición ha fallado', error))
  }, [])

  if (datos !== 200) return <p>Cargando...</p>
  return (
    <>
      <div className="enunciado">
        <h1>Lista de Critpomoedas</h1>
        <h4>Estado de la peticion: {datos}</h4>
      </div>
      <ul>
        {criptos && criptos.map(({ name, priceUsd, id, symbol, explorer, rank, changePercent24Hr }) => (
          <li key={id} className="liCriptos">
            <div className="rank"> <h5>Rank: {rank}</h5></div>
            <div className="nombre"><h5>{name}</h5></div>
            <div className="precio"><h5>Precio: </h5>$ {parseFloat(priceUsd).toFixed(3)}
              <div className="variacion"><span className={Number(changePercent24Hr) > 0 ? "green" : "red"}> {parseFloat(changePercent24Hr).toFixed(3)} %</span></div>
            </div>
            <div className="web"><h5>Web: </h5> <a href={explorer} target="_blank"><IcoNavigation /> {symbol} </a></div>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App

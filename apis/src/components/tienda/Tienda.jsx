import { useEffect, useState } from 'react';
import axios from "axios";
import './tienda.css'
import { Link } from 'react-router';
const Tienda = () => {
    const [productos, setProductos] = useState([])
    //  const apiUrl = "https://dummyjson.com/products"
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(data => {
                //console.log(data)
                setProductos(data.data.products)
            })
            .catch(error => console.log('La petición ha fallado', error))
    }, [])

    if (!productos) return <p>Errorr.......</p>
    return (
        <>

            <div className='tienda-container'>
                <ul>
                    {productos.map(({ title, price, thumbnail, id }) => (
                        <li key={id}>
                            <div className="producto">
                                <h3><Link to={`/producto/${id}`}>{title}</Link> </h3>
                                <img src={thumbnail} alt={title} />
                                <h4>Precio: {price} €</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Tienda
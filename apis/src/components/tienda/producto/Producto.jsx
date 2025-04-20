import './producto.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios";

const Producto = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const [errorMen, setErrorMen] = useState(false)
    const navigate = useNavigate();

    const getProducto = async () => {
        try {
            const response = axios.get(`https://dummyjson.com/products/${id}`)
            const data = await response
            setProducto(data.data)
        } catch (error) {
            setErrorMen(error.status)
            console.log('La petición ha fallado', error.status)
        }
    }
    useEffect(() => {
        getProducto()
        if (errorMen === 404) {
            // Si no se encuentra el producto, redirige
            navigate('/404', {
                replace: true,
                state: { message: 'El producto que buscas no existe o fue eliminado.' }
            });
            return;
        }
    })
    /*
        useEffect(() => {
            axios.get(`https://dummyjson.com/products/${id}`)
                .then(res => res.json())
                .then(data => setProducto(data))
                .catch(error => console.log('La petición ha fallado', error))
        }, [id])
        */
    //console.log(producto)
    if (!producto) return <p>Loading...{errorMen}</p>

    const imagenTumbs = (producto) => {
        if (producto.images.length === 1) return null
        return (
            producto.images.map((imagen, index) => (
                <img onClick={() => imageChanger(imagen)} key={index} className="imagen-tumbnail" src={imagen} alt={producto.title} />
            ))
        )
    }
    function imageChanger(ele) {
        const MainImage = document.querySelector('.producto-imagen');
        MainImage.src = ele;
    }

    return (
        <>
            <div className="producto-container">
                <div className="main-producto">
                    {/** Producto Titulo ***/}
                    <h1 className="producto-titulo">{producto.title}</h1>
                    {/** Producto Imaagenes y Precio ***/}
                    <div className="producto-imagenes">
                        <div className="div-imagen-precio">
                            <img className="producto-imagen" src={producto.thumbnail} alt={producto.title} />
                            <h5 className='producto-precio'>Precio: {producto.price} €</h5>
                        </div>
                        {/*** Thumbnails ***/}
                        <div className="producto-tumbnails">
                            {imagenTumbs(producto)}
                        </div>
                    </div>
                    <div className="producto-description">
                        <h3>Descripcion</h3>
                        <p className="producto-parrafo">{producto.description}</p>
                    </div>
                    {/*** Informacion ***/}
                    <div className="producto-info">
                        <h3>Informacion</h3>
                        <div className='producto-infodatos'>
                            <p>Marca: {producto.brand}</p>
                            <p>Stock: {producto.stock}</p>
                            <p>Categoria: {producto.category}</p>
                            <p>Tags: {producto.tags.map((tag, index) => (<li key={index}>{tag}</li>))}</p>
                            <p>Calificacion: {producto.rating}</p>
                            <p>Calificacion de los usuarios: {producto.rating}</p>
                            <p>Disponiblididad: {producto.availabilityStatus}</p>
                        </div>
                    </div>

                    {/*** Reviews ***/}
                    <div className="producto-reviews">
                        <h3>Valoraciones</h3>
                        <div className='producto-valoraciones'>
                            {producto.reviews.map((review, index) => (
                                <div key={index} className="producto-valoracion">
                                    <p>Comprador: {review.reviewerName} - <span className='span-email'>{review.reviewerEmail}</span></p>
                                    <p>Puntiacion: {review.rating}</p>
                                    <p>Comentario: <br />{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Producto
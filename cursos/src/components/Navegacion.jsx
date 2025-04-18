const Navegacion = () => {
    const enlaces = [
        {
            nombre: "Inicio",
            url: "/"
        },
        {
            nombre: "Nosotros",
            url: "/nosotros"
        },
        {
            nombre: "Contacto",
            url: "/contacto"
        },
    ]
    return (
        <div className="divnav">
            <h1>Navegacion</h1>
            <ul>
                {enlaces.map((enlace) => (
                    <li key={enlace.nombre}>
                        <a href={enlace.url}>{enlace.nombre}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Navegacion
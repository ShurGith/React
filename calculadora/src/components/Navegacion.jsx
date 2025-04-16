const Navegacion = () => {
    const mainEnlces = [
        { name: "inicio", href: "#" },
        { name: "blog", href: "#" },
        { name: "cursos", href: "#" },
        { name: "escuelas", href: "#" },
        { name: "about", href: "#" },
        { name: "contacto", href: "#" },
    ];
    function mayuscula(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }
    return (
        <nav className="w-full">
            <ul className="flex bg-amber-800 gap-8 text-sm text-white p-4 font-bold">
                {mainEnlces.map((enlace
                ) => (
                    <li key={enlace.name}>
                        <a className="hover:text-amber-300" href={enlace.href}>{mayuscula(enlace.name)}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navegacion
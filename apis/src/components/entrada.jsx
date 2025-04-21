import { Outlet } from "react-router";
import Menu from "./menu/menu";
import { useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import Dogys from "../assets/dogys_noBg.webp"
const Entrada = () => {
    let location = useLocation();
    const HTML = <div className="mainHome">
        <h1 className="maintitulo">Bienvenido a la pagina de la tienda</h1>
        <img src={Dogys} alt="imagen" />
    </div>
    return (
        <>
            <Menu />
            {location.pathname === "/" && HTML}
            <Outlet />
            <Footer />

        </>
    );
};
export default Entrada
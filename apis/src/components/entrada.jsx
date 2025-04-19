import { Outlet } from "react-router";
import Menu from "./menu/menu";

const Entrada = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};
export default Entrada
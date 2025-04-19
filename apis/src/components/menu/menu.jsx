import { NavLink } from "react-router";
import enlaces from "./enlaces";
const Menu = () => {
    return (
        <nav>
            <ul>
                {enlaces.map((enlace, index) => (
                    <li key={index}>
                        <NavLink className="nav-link" to={enlace.path}>{enlace.icono}{enlace.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Menu;
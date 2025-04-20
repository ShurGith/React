import { NavLink } from "react-router";
import enlaces from "./enlaces";
import { Icon } from '@iconify-icon/react';
import './menu.css';
const Menu = () => {
    return (
        <nav>
            <ul className="ulMenu">
                {enlaces.map((enlace, index) => (
                    <li key={index}>
                        <NavLink className="nav-link" to={enlace.path}>
                            <Icon icon={enlace.icono} width="24" height="24" />
                            {enlace.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Menu;
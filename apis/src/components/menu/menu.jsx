import { NavLink } from "react-router";
import enlaces from "./enlaces";
import { Icon } from '@iconify-icon/react';
import { UserContext } from '../../contexts/user.context.jsx';
import { useContext } from "react";
import './menu.css';

const Menu = () => {

    const { user, LogOutUser } = useContext(UserContext);
    const numElaces = enlaces.length;
    return (
        <nav className="navMenu">
            <ul className="ulMenu" style={{ gridTemplateColumns: `repeat(${numElaces}, 1fr)` }}>
                {enlaces.map((enlace, index) => (
                    <li key={index} className={!user?.isAdmin && enlace.label === "Settings" ? "displayNone" : ""}>
                        <NavLink className="nav-link" to={enlace.path}>
                            <Icon icon={enlace.icono} width="24" height="24" />
                            {enlace.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="divconect">
                {user?.isAdmin && <a className="logOut" onClick={() => LogOutUser()} href="#"><Icon icon="streamline:logout-1-solid" width="24" height="24" />Logout {user.name}</a>}
            </div>
        </nav>
    );
};
export default Menu;
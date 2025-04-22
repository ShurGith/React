import './HeaderComponent.css'
import { NavLink } from "react-router"

function HeaderComponent() {
    return (
        <header className="header">
            <h1 className="header-title">Notes App</h1>
            <ul className="header-list">
                <li>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/notes">Notes</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default HeaderComponent
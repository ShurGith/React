import { useState, createContext } from "react";
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const UserContext = createContext();

function UserProviderWrapper(props) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const userData = {
        name: import.meta.env.VITE_USERNAME,
        email: import.meta.env.VITE_PASSWORD,
        password: import.meta.env.VITE_USER_EMAIL,
        isAdmin: import.meta.env.VITE_ISADMIN,
    }

    const LoginUser = () => {
        setUser(userData);
        const boton = document.querySelector(".nav-link.active");
        boton.parentElement.classList.add("displayNone");
        navigate("/");
    }
    const LogOutUser = () => {
        const boton2 = document.querySelector("li.displayNone");
        boton2.classList.remove("displayNone");
        navigate("/");
        setTimeout(() => {
            setUser(null);
        }, 100);
    }


    return (
        <UserContext.Provider value={{ user, setUser, LoginUser, LogOutUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProviderWrapper };

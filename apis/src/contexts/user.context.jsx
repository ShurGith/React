import { useState, createContext } from "react";
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const UserContext = createContext();

function UserProviderWrapper(props) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const userData = {
        name: "JuanJota",
        email: "H0CtV@example.com",
        password: "123456",
        isAdmin: true
    }

    const LoginUser = () => {
        setUser(userData);
        const boton = document.querySelector(".nav-link.active");
        boton.parentElement.classList.add("displayNone");
        navigate("/");
    }
    const LogOutUser = () => {
        setUser(null);

        const boton2 = document.querySelector("li.displayNone");
        boton2.classList.remove("displayNone");
        navigate("/", { replace: true });

    }


    return (
        <UserContext.Provider value={{ user, setUser, LoginUser, LogOutUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProviderWrapper };

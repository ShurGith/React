import { useContext, useState } from "react";
import { UserContext } from "../contexts/user.context.jsx";
import { SiSimplelogin } from "react-icons/si";
const Conexion = () => {
    const { LoginUser } = useContext(UserContext);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Datos de chequeo (usuario y contraseña válidos)
    const validCredentials = {
        username: import.meta.env.VITE_USERNAME,
        password: import.meta.env.VITE_PASSWORD,
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === validCredentials.username && password === validCredentials.password) {
            setMessage('✅ Acceso concedido');
            LoginUser();
        } else {
            setMessage('❌ Usuario o contraseña incorrectos');
        }
    };

    return (
        <>
            <div className="mainConexion">
                <h3 className="conexionh1">Indica los datos necesarios para conectarte</h3>
                <div className="divlogs">
                    <form>
                        <div>
                            <label htmlFor="username">Usuario</label>
                            <input type="text" name="username" autoComplete="off"
                                placeholder="Nombre de usuario"
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" autoComplete="off" placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" onClick={handleSubmit} ><SiSimplelogin /> Login</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}
export default Conexion
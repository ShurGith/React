import { useContext } from "react";
import { UserContext } from "../contexts/user.context.jsx";
const Conexion = () => {
    const { LoginUser } = useContext(UserContext);
    return (
        <>
            <div className="mainConexion">
                <h3 className="conexionh1">Indica los datos necesarios para conectarte</h3>
                <div className="divlogs">
                    <input type="text" name="name" placeholder="Usuario" />
                    <button onClick={() => LoginUser()} >Login</button>
                </div>

            </div>
        </>
    )
}
export default Conexion
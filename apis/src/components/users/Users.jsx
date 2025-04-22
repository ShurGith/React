import { useEffect, useState } from 'react';
import axios from "axios";
function Users() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState({ state: false, message: "" });

    // const getUsers =
    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(data => {
                // console.log(data)
                setUsers(data.data.users)
                setError({ state: false, message: "" })
            })
            .catch((error) => {
                console.log('La petición ha fallado', error)
                setError({ state: true, message: error.message })
            })
    }, [])

    if (error.state) {
        return <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>Error: {error.message}</p>;
    }
    if (!users) return <p>Errorr.......</p>

    return (
        <div className="blog-container">
            <h1 className="blog-title">Users</h1>
            <div className="posts-container">
                {users.map((user) => (
                    <div key={user.id} className="post">
                        <h2>{user.firstName}</h2>
                        <p>{user.lastName}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
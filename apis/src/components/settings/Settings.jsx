import './settings.css';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context.jsx';

const Settings = () => {
    const { user } = useContext(UserContext);

    if (!user?.isAdmin) {
        return <Navigate to="/sin-permiso" />;
    }

    return (
        <div className="main-settings">
            <h1 className="title-settings">Settings</h1>
        </div>
    );
}
export default Settings;
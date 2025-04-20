import './settings.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Settings = () => {
    const [hassAccess, setHasAccess] = useState(false);

    if (!hassAccess) {
        return <Navigate to="/sin-permiso" />;
    }
    return (
        <div className="main-settings">
            <h1 className="title-settings">Settings</h1>
        </div>
    );
}
export default Settings;
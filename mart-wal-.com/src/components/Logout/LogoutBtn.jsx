import { useUserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const { handleUpdateUser } = useUserContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        handleUpdateUser(null);
    };

    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
}

export { LogoutBtn };
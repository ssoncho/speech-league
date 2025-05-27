import { Outlet } from "react-router";
import { getToken } from "../../api/localstorage";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate('/login')
        }
    }, []);
    return (
        <>
            <Outlet />
        </>
    );
};

export default ProtectedRoute;

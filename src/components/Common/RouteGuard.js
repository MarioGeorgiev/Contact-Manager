import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({
    children,
}) => {
    const { authToken } = useAuthContext();
    if (!authToken.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};
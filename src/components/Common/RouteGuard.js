import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({
    children,
}) => {
    const { authToken } = useAuthContext();
    console.log(authToken)
    console.log(authToken.isAuthenticated)
    if (!authToken.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};
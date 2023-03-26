import { createContext, useContext, useState } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [authToken, setAuthToken] = useState(() => {
        if (localStorage.getItem("authToken")) {
            return {
                "authToken":localStorage.getItem("authToken"),
                "authToken":localStorage.getItem("email"),
                "userId":localStorage.getItem("userId"),
            }
        } else {
            return false
        }
    })
    const contextValues = {
        authToken,
        setAuthToken
    }
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
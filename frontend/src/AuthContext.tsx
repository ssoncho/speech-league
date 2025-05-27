import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    token: string | null;
    login: (newToken: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem("authToken"),
    );

    const login = (newToken: string) => {
        localStorage.setItem("authToken", newToken);
        setToken(newToken);
    };

    return (
        <AuthContext.Provider value={{ token, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth должен использоваться внутри AuthProvider");
    }
    return context;
};

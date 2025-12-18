/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useContext, useMemo} from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;

}


export const AuthProvider = ({ children }) => {
    const[user, setUser] = useState(null);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initAuth = () => {
            const storedUser = localStorage.getItem('currentUser');
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    console.error("Failed to parse stored user", error);
                    localStorage.removeItem('currentUser');
                }
                
            }
            setIsLoading(false);
        };
        initAuth();
    },[]);

    const login =(userData) => {
        setUser(userData);
        localStorage.setItem('currentUser', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('currentUser');
    };
    
    const value = useMemo (() =>(
        {
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
    }), [user, isLoading]);

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
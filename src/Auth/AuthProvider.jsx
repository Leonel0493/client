import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import roles from '../helpers/roles';

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    
    //const [user, setUser] = useState(null);
    const [user, setUser] = useState(null);
    const history = useHistory();

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const login = (userCredentials, fromLocation) => { 
        setUser({id: 1, role: roles.regular});
        
        if(fromLocation){
            history.push(fromLocation)
        }
    }
    const logout = () => setUser(null);

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    };

    return (
        <>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

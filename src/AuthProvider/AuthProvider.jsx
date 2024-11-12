import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const name = 'Fashions'
    const [carts, setCarts] = useState([])
    const allInfo = {
        name,
        carts,
        setCarts
    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
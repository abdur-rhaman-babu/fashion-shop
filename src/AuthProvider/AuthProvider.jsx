import { createContext, useState } from "react";
import { auth } from './../Firebase/firebase.init';
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const name = 'Fashions'
    const [carts, setCarts] = useState([])

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const allInfo = {
        name,
        carts,
        setCarts,
        createUser
    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
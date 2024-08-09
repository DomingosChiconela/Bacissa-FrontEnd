import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext(null)



export function  authContextProvider ({ children }){

    const [token,SetToken]  =  useState()
    const [session,Setsession]  =  useState(false)

   
     
 


return (

    <AuthContext.Provider value={{token,SetToken,session,Setsession} }>
        { children }
    </AuthContext.Provider>
)




}
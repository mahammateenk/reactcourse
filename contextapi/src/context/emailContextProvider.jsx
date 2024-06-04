import React from "react";
import { useState } from "react";
import EmailContext from "./emailcontext";

const EmailContextProvider = ({children}) =>{
    const [em , setEm] = useState(null)
   return(
    <EmailContext.Provider value={{em, setEm}}>
{children}
    </EmailContext.Provider>
   );
    
}
export default EmailContextProvider;
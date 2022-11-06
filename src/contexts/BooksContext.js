import { data } from "autoprefixer";
import { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({children}) => 
{
    const [booksList,setBooksList] = useState([]);
    return (
            <context.Provider value={{booksList,setBooksList}}>
                {children}
            </context.Provider>
        )
}

export {ContextProvider};
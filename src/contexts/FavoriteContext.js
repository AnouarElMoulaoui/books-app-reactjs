import { createContext, useState } from "react";


export const contextFavorite = createContext();

const FavoriteProvider = ({children}) => {
    const [favorites,setFavorites] = useState([]);
    return (
            <contextFavorite.Provider value={{favorites,setFavorites}}>
                {children}
            </contextFavorite.Provider>
        )

}

export {FavoriteProvider};
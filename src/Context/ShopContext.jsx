import React, {createContext} from "react";
// import ShopContext from "../Context/ShopContext";
 import all_product from '../../public/Assets/all_product';

 export const ShopContext = createContext (null);
 

const ShopContextProvider = (props)=>{

    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
}

export default ShopContextProvider;
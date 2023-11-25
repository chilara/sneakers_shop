import React, { createContext } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = () => {
  return <ShopContext.Provider></ShopContext.Provider>;
};

export default ShopContextProvider;

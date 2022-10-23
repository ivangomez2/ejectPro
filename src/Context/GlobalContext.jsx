import React, { createContext, useState } from 'react'
export const GlobalContexts = createContext("")
const GlobalContext = ({children}) => {

    
  const [category, setCategory] = useState([]);
  const [catFilter, setCatFilter] = useState([]);


  return (
    <GlobalContexts.Provider value={{category,setCategory,catFilter,setCatFilter}}>
    {children}
    </GlobalContexts.Provider>
  )
}

export default GlobalContext
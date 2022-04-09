import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [waiting, setWaiting] = useState(true);
    const [isLoading, setIsLoading] = useState(false)

    return(
        <AppContext.Provider value={
            { waiting, isLoading } 
        }>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider} 
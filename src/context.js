import React, { useContext, useState, useEffect } from 'react';
const axios = require("axios");

const tempUrl = "https://opentdb.com/api.php?amount=50&category=23&difficulty=medium&type=multiple"

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [waiting, setWaiting] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    async function fetchQuestions (url) {
        setIsLoading(true);
        setWaiting(false)
        try {
            const response = await axios.get(url)
            // console.log(response);
            if(response){
                const data = response.data.results
                console.log(data)         
                setQuestions(data)
                setIsLoading(false)
                setWaiting(false)  
            } else {
                setWaiting(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      fetchQuestions(tempUrl)
    }, [])
    
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
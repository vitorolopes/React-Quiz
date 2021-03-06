import React, { useContext, useState, useEffect } from 'react';
const axios = require("axios");

const API_ENDPOINT = "https://opentdb.com/api.php?"
// amount=5&category=23&difficulty=medium&type=multiple"
const table = {sports: 21,history: 23,politics: 24};

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [waiting, setWaiting] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [numberOfCorrect, setNumberOfCorrect] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [quiz, setQuiz] = useState({amount: 5, category: "sports", difficulty: "medium"})


    async function fetchQuestions (url) {
        setIsLoading(true);
        setWaiting(false)
        try {
            const response = await axios.get(url)
            // console.log(response);
            if(response){
                const data = response.data.results
                // console.log(data)         
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

    const handleClick = () => {
        if (index === questions.length - 1){
            setShowModal(true)
            setIndex(0)
        } else {
            setIndex(oldIndex => oldIndex + 1)
        }   
    }

    const checkAnswer = (boolean_value) => { 
       if(boolean_value){
           setNumberOfCorrect(oldNumber => oldNumber + 1)
       }
       handleClick()
    }

    const closeModal = () => {
        setWaiting(true)
        setNumberOfCorrect(0)
        setShowModal(false)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuiz({...quiz, [name]: value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //* fetchQuestions(url + amount, category, difficulty)
        const {amount, category, difficulty} = quiz;
        const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`        
        fetchQuestions(url)
    }
    
    return(
        <AppContext.Provider value={
            { waiting, isLoading, questions,
              index, handleClick, checkAnswer,
              numberOfCorrect, showModal, closeModal, quiz, 
              handleChange,handleSubmit             
            } 
        }>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider} 
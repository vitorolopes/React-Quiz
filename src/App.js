import React from 'react';
import {useGlobalContext} from './context';
import SetupForm from './SetupForm';
import Loading from './Loading';

import Modal from './Modal';

function App() {

  const {waiting, isLoading, questions,
         handleClick, index, checkAnswer,
         numberOfCorrect, showModal} = useGlobalContext();

  if(waiting){
    return(
      <SetupForm/>
    )
  }

  if(isLoading){
    return(
      <Loading/>
    )
  }

  const { question, correct_answer, incorrect_answers} = questions[index]
  const answers = [...incorrect_answers, correct_answer]
  // console.log(answers);

  return (
    <main >
      <section className="quiz"> 
         <p className="correct-answers">
            correct answers : {numberOfCorrect} / {questions.length}
          </p>

        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}}/>
          <div>
            {answers.map( (answer, key_index) => 
              <button key={key_index} className="answer-btn"
                      dangerouslySetInnerHTML={{__html: answer}}
                      onClick={()=>checkAnswer(answer === correct_answer)}
              >
              </button>
            )}

              <button className='next-question'
                      onClick={handleClick}
              >
                next question
              </button>

          </div>
        </article>
        {/* //! ------------------------ */}
         { showModal && <Modal/>}
         
      </section>

    </main>
  );
}

export default App;

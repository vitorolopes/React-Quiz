import React from 'react';
import {useGlobalContext} from './context';
import SetupForm from './SetupForm';
import Loading from './Loading';

function App() {

  const {waiting, isLoading, questions} = useGlobalContext();

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

  const indexTemp = 0;
  const { question, correct_answer, incorrect_answers} = questions[indexTemp]
  const answers = [...incorrect_answers, correct_answer]
  // console.log(answers);

  return (
    <main >
      <section className="quiz"> 
         <p className="correct-answers">
            correct answers : 100 / 100
          </p>

        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}}/>
          <div>
            {answers.map( (answer, key_index) => 
              <button key={key_index} className="answer-btn"
                dangerouslySetInnerHTML={{__html: answer}}
              >
              </button>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;

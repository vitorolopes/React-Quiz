import React from 'react'
import {useGlobalContext} from './context';



const Modal = () => {

  const {numberOfCorrect, questions, closeModal} = useGlobalContext();
  console.log(numberOfCorrect, questions.length);

  return (
    <section className='modal-container'>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered {((numberOfCorrect/questions.length)*100).toFixed(0)} % of questions correctly</p>
        <button className='close-btn'
                onClick={closeModal}
        >
           Play again
        </button>
      </div>
    </section>
  )
}

export default Modal
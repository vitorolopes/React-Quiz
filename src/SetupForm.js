import React from 'react'
import {useGlobalContext} from './context'

const SetupForm = () => {

  const {quiz, 
        handleChange,
        handleSubmit} = useGlobalContext();

  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form' >
          <h2>Setup Quiz</h2>

          <div className="form-control">
            <label htmlFor="amount">Number of questions</label>
            <input type="number" className="form-input"
                   name="amount" id="amount"
                   min={1} max={50} 
                   value={quiz.amount}
                   onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select className="form-input"
                    name='category' id='category'
                    value={quiz.category}
                    onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select className='form-input'
                    name="difficulty" id="difficulty"
                    value={quiz.difficulty}
                    onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>

          <button className='submit-btn' 
                  type='submit'
                  onClick={handleSubmit}
          >
            start 
          </button>
          
        </form>
      </section>
    </main>
  )
}

export default SetupForm
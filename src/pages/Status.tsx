import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status () {
  const [answers, setAnswers] = useState([''])
  const [newAnswer, setNewAnswer] = useState('')

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([...answers, newAnswer])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([...answers, newAnswer])
      setNewAnswer('')
    }
  }
    return (
        <main className='status'>
          <Header title="Tweet"/>

          <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab reprehenderit obcaecati cupiditate eveniet labore quisquam nesciunt sequi, modi harum laudantium autem, architecto quaerat doloremque alias, iusto sunt sed ducimus inventore." />
          
          <Separator/>
            
          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Caduzinhok.png" alt="Carlos Andrade" />
              <textarea 
              value={newAnswer}
              onKeyDown={handleHotkeySubmit}
              onChange={(event) => {
                setNewAnswer(event.target.value)
              }}
              name=""
              id="tweet"
              placeholder="Tweet your answer">
              </textarea>
            </label>
              <button type='submit'>
                <PaperPlaneRight/>
                <span>Answer</span>
              </button>
          </form>


          {answers.map( answer => {
            return (
              <Tweet key={answer} content={answer} />
            )
          })
          }
        </main>
    )
}
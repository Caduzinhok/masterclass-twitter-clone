import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'
export function Timeline () {
  const [tweets, setTweets] = useState([''])
  const [newTweet, setNewTweets] = useState('')

  function createNewTweet (event: FormEvent) {
    event.preventDefault()

    setTweets([...tweets, newTweet])
    setNewTweets('')
  }

    return (
        <main className='timeline'>
          <Header title="Home"/>
          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Caduzinhok.png" alt="Carlos Andrade" />
              <textarea 
              onChange={(event) => setNewTweets(event.target.value)}
              value={newTweet}
              name=""
              id="tweet"
              placeholder="What's happening?"></textarea>
            </label>
              <button type='submit'>Tweet</button>
          </form>

          <Separator/>

          {tweets.map( tweet => {
            return (
              <Tweet key={tweet} content={tweet} />
            )
          })
          }
        </main>
    )
}
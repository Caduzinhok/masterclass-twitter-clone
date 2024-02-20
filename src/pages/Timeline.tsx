import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

const tweets = [
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ]
export function Timeline () {
    return (
        <main className='timeline'>
          <Header title="Home"/>
          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Caduzinhok.png" alt="Carlos Andrade" />
              <textarea name="" id="tweet" placeholder="What's happening?"></textarea>
            </label>
              <button type='submit'>Tweet</button>
          </form>

          <Separator/>

          {tweets.map( tweet => {
            return (
              <Tweet content={tweet} />
            )
          })
          }
        </main>
    )
}
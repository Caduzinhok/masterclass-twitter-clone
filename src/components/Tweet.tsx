import './Tweet.css'
import {ChatCircle, ArrowsClockwise, Heart} from 'phosphor-react'
import { Link} from 'react-router-dom'

interface TweetProps {
    content: string
}
export function Tweet(props: TweetProps){
    return (
        <Link to="/status" className="tweet">
            <img src="https://github.com/Caduzinhok.png" alt="Carlos Andrade" />

            <div className='tweet-content'>
                <div className='tweet-content-header'>
                    <strong>
                        Carlos Andrade
                    </strong>
                    <span>@Caduzinhok</span>
                </div>

                <p>
                {props.content}
                </p>

                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle />
                        20
                    </button>

                    <button type='button'>
                        <ArrowsClockwise />
                        20
                    </button>

                    <button type='button'>
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}
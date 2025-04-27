import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className='struggles'>
        <div className="sc">
            <h6 className="trace-border">
            Get Started
                <span className="top-border"></span>
                <span className="right-border"></span>
                <span className="bottom-border"></span>
                <span className="left-border"></span>
            </h6>
            <h2>The experience is the difference</h2>
            <p>Zipha - Telegram system automation for all community building.</p>

            <Link to=''><button>Get Started</button></Link>
        </div>
    </div>
  )
}

export default GetStarted
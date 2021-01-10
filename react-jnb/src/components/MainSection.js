import React from 'react'
import '../App.css'
import { Button } from './Button'
import './MainSection.css'


function MainSection() {
    return (
        <div className='main-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Happy 3 Years</h1>
            <p>What an amazing time is has been.</p>
            <div className="main-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>The Future</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Watch Video <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default MainSection

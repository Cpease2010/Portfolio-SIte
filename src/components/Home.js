import React from 'react'
import '../css/Home.css'
import Bridge from '../images/bridgePhoto.jpg'
import Hacker from '../images/hackerImage.jpg'
import Arrow from '../images/arrowImage.png'

export default () => {
    return (
        <div>
            <div className="headDivTop">
                <h1 id="intro">The World As You Know It!</h1>
                <h1 id="outro">But There's So Much More!</h1>
                <br/><img id="outroImage" src={Arrow} alt=""/>
            </div>
        </div>
    )
}

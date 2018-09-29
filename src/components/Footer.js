import React from 'react'
import fbPic from '../images/facebook.svg'
import ghPic from '../images/github.png'
import liPic from '../images/linkedin.png'

export default () => {
    return (
        <div className='footer'>
            <img src={ghPic} alt='This is a link to my GitHub page.'/>
            <img src={liPic} alt='This is a link to my LinkedIn page.'/>
            <img src={fbPic} alt='This is a link to my FaceBook page.'/>
        </div>
    )
}

import React from 'react'
import fbPic from '../images/facebook.svg'
import ghPic from '../images/github.png'
import liPic from '../images/linkedin.png'
import '../css/Footer.css'

export default () => {
    return (
        <div className='footerSettings'>
            <h3>Let's Work Together</h3>
            <h4>coryrpease@gmail.com</h4>
            <h4>303.210.7487</h4>
            <div className='footer' id='contact'>
                <img src={ghPic} alt='This is a link to my GitHub page.'/>
                <img src={liPic} alt='This is a link to my LinkedIn page.'/>
                <img src={fbPic} alt='This is a link to my FaceBook page.'/>
            </div>
        </div>
    )
}

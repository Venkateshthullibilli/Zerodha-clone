import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'


const NotFound = () => {

    const navigate = useNavigate()

    const handleTryAgain = () => {
        navigate('/dashboard')
    }

  return (
    <div className="notfound-container">
        <img src='https://res.cloudinary.com/dfxytykhs/image/upload/v1751528527/Hd_wallpapers_jxnuxn.jpg' alt='page-notfound' height={400}/>
      <p className='opps-text'>Opp! Something went wrong</p>
      <button className='try-again-btn' onClick={handleTryAgain}>Try again</button>
    </div>
  )
}

export default NotFound
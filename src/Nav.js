import React from 'react'
import icon from './images/icon.png'

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-item">
          <a href="/">TRIPS</a>
        </div>
        <div className="nav-item">
          <a href="/">RECENTLY VIEWED</a>
        </div>
        <div className="nav-item">
          <a href="/">BOOKINGS</a>
        </div>
        <div className="nav-item">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </div>
  )
}

export default Nav
import React from 'react'
import Duck from '../assets/Duck.jpg'
import './HomeView.css'

const HomView = () => (
  <div>
    <h4>Welcome!</h4>
    <img src={Duck} alt="this is a duck" className="duck"/>
  </div>
)

export default HomView

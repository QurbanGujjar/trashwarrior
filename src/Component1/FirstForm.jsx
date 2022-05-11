import React from 'react'
import {Link} from 'react-router-dom'

const FirstForm = ({rate}) => {
  return (
    <div className='menu_body'>

          <div className='item'>
            <p>Service starts at</p>
            <h2>${rate}.00</h2>
          </div>
          <div className='item'>
            <p>Check if we serve in your area</p>
            <input type='text' />
          </div>
          <div className='item'>
          <Link to='/booking'> <button >Book Now</button></Link>

            <br />
            <Link to='/booking'>  <button>Book as Business</button></Link>

          </div>
        </div>
  )
}

export default FirstForm

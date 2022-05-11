import React from 'react'
import "./blockNav.css"
import {Link} from 'react-router-dom'

const NavBlock = () => {
  return (
    <div className='block_navbr'>
<div className="looking_for">{<Link to="/">Loking For</Link>} </div>
<div className="looking_for">{<Link to="/timing">Pickup time</Link>}</div>
<div className="looking_for">{<Link to="/timing">Task Discription</Link>}</div>

<div className="looking_for">{<Link to="/timing">Pickup time</Link>}</div>
<div className="looking_for">{<Link to="/timing">Review Your Order</Link>}</div>
<div className="looking_for">{<Link to="/timing">Booking Details</Link>}</div>
<div className="looking_for">{<Link to="/timing">Checkout</Link>}</div>

    </div>
  )
}

export default NavBlock

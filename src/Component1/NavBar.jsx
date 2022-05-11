import React from 'react'

const NavBar = ({setService ,service}) => {
    const handleService1=()=>{
        setService("J Removel")
    }
    const handleService2=()=>{
        setService("C Removel")
    }
    const handleService3=()=>{
        setService("D Removel")
    }

  return (
    <ul>
          <li>
            <button onClick={handleService1}  className={`${service==='J Removel'?"navbtnActive":""}`}>Juck Removel</button>
          </li>
          <li>
            <button onClick={handleService2} className={`${service==='C Removel'?"navbtnActive":""}`}>Juck Removel</button>
          </li>
          <li>
            <button onClick={handleService3} className={`${service==='D Removel'?"navbtnActive":""}`}>Juck Removel</button>
          </li>
        </ul>
  )
}

export default NavBar

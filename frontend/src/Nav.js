import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h1 style={{marginTop:"50px",textAlign:"center",color:"burlywood",boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)"}}>GESTIONNAIRE D'EVENEMENT</h1>
      <Link to="/signin" style={{ marginLeft: "20px", backgroundColor: "black", padding: "5px", color: "white", textDecoration: "none" }}>sign in</Link>
      <Link to="/register" style={{ marginLeft: "20px", backgroundColor: "black", padding: "5px", color: "white", textDecoration: "none" }}>Register</Link>
    </div>
  )
}

export default Nav

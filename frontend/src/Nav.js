

import React from 'react';
import { useAuth } from './AuthContext'; 

const Nav = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav>
          <h1 style={{marginTop:"50px",textAlign:"center",color:"burlywood",boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)"}}>GESTIONNAIRE D'EVENEMENT</h1>
            
                {isAuthenticated ? (
                    <>
                        
                       <a href="/logout" onClick={logout} style={{ marginLeft: "30px", backgroundColor: "black", padding: "5px", color: "white", textDecoration: "none" }}>Logout</a>
                    </>
                ) : (
                    <>
                        <a href="/register" style={{marginBottom:"30px", marginLeft: "30px", backgroundColor: "black", padding: "5px", color: "white", textDecoration: "none" }}>register</a>
                        <a href="/"style={{ marginLeft: "30px", backgroundColor: "black", padding: "5px", color: "white", textDecoration: "none" }}>Sign In</a>
                    </>
                )}
            
        </nav>
    );
};

export default Nav;

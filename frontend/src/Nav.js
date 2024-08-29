

import React from 'react';
import { useAuth } from './AuthContext'; 

const Nav = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav>
          <h1 style={{marginTop:"50px",textAlign:"center",color:"burlywood",boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)"}}>GESTIONNAIRE D'EVENEMENT</h1>
            <ul>
                {isAuthenticated ? (
                    <>
                        
                        <li><a href="/logout" onClick={logout}>Logout</a></li>
                    </>
                ) : (
                    <>
                        <li><a href="/register">register</a></li>
                        <li><a href="/signin">Sign In</a></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;

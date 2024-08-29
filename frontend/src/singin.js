import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Tous les champs doivent être remplis.');
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:8000/auth/login',
                { email, password },
                { withCredentials: true } 
            );

            console.log(response.data);
            login(); 
            navigate('/event'); 
        } catch (error) {
            console.error(error);
            alert('Une erreur est survenue lors de la connexion.');
        }
    };

    return (
        <div>
            <main className='form-signin'>
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                       
                    </div>
                    
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign in
                    </button>
                    
                </form>
            </main>
        </div>
    );
}

export default Signin;

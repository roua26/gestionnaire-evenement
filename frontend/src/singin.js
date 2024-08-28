import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Tous les champs doivent être remplis.");
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (!response.ok) {
                
                throw new Error('Erreur de connexion');
            }

            const result = await response.json();
            
            console.log(result);

            navigate('/event'); 

        } catch (error) {
            console.error(error);
            alert('Une erreur est survenue lors de la connexion.');
        }
    };

    return (
        <div>
            <main className='form-signin'>
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    );
}

export default Signin;

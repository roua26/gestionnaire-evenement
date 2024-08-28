import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Register() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if (!nom || !prenom || !date || !email || !password) {
            alert("Tous les champs doivent être remplis.");
            return;
        }
        const eventData = {
            nom,
            prenom,
            date,
            email,
            password
        };



        axios.post('http://localhost:8000/auth/signup', eventData)
            .then(navigate('/event'))
            .catch(err => {
                console.error(err);
                alert('Une erreur est survenue lors de l\'ajout de l\'événement.');
            });

    }

    return (

        <div>
            <main className='form-signin'>
                <form onSubmit={submit}>

                    <h1 className="h3 mb-3 fw-normal">Register</h1>
                    <div>
                        <input type="text" className="form-control" placeholder="nom" onChange={(e) => setNom(e.target.value)} />
                        <input type="text" className="form-control" placeholder="prenom" onChange={(e) => setPrenom(e.target.value)} />
                        <input type="date" className="form-control" placeholder="date de naissance" onChange={(e) => setDate(e.target.value)} />



                        <input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />



                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                    </div>


                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>

                </form>
            </main>
        </div>


    )
}

export default Register

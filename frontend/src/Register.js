import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './App.css';

function Register() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [dateNes, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if (!nom || !prenom || !dateNes|| !email || !password) {
            alert("Tous les champs doivent être remplis.");
            return;
        }
        const eventData = {
            nom,
            prenom,
            dateNes,
            email,
            password
        };



        axios.post('http://localhost:8000/auth/signup', eventData)
            .then(navigate('/'))
            .catch(err => {
                console.error(err);
                alert('Une erreur est survenue lors de l\'ajout de l\'événement.');
            });

    }

    return (

        <div>
            <main className='form-signin'>
                <form onSubmit={submit} style={{boxShadow: "20px 20px 20px 20px rgba(0, 0, 0, 0.2)"}}>

                    <h1 className="h3 mb-3 fw-normal">Register</h1>
                    <div style={{alignItems:"center"}}>
                        <ul>
                       <li><input type="text" className="form-control" placeholder="nom" onChange={(e) => setNom(e.target.value)} /></li> 
                       <li> <input type="text" className="form-control" placeholder="prenom" onChange={(e) => setPrenom(e.target.value)} /></li> 
                       <li><input type="date" className="form-control" placeholder="date de naissance" onChange={(e) => setDate(e.target.value)} /></li> 
                       <li><input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} /></li> 
                       <li> <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /></li> 
                        </ul>
                        

                    </div>


                    <button className="w-100 btn btn-lg btn-primary" style ={{ margin:"10px 80px",padding:"6px 60px",textAlign:"center",color:"white",backgroundColor:"blue"}}  type="submit">Register</button>

                </form>
            </main>
        </div>


    )
}

export default Register

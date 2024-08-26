import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function CreatEv() {
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [temps, setTemps] = useState("");

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        

       
        if (!titre || !description || !date || !temps) {
            alert("Tous les champs doivent être remplis.");
            return;
        }
        const eventData = {
            titre,
            description,
            date,
            temps
        };


        
        axios.post('http://localhost:8000/events', eventData)
        .then( navigate('/'))
            .catch(err => {
                console.error(err);
                alert('Une erreur est survenue lors de l\'ajout de l\'événement.'); 
            });
    };

    return (
        <div className='sillo'>
            <div className="formul">
                <h3>Ajouter un événement</h3>
                <form className='even' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="titre">Titre :</label>
                        <input
                            type='text'
                            name='titre'
                            id='titre'
                            placeholder='Titre'
                            
                            onChange={(e) => setTitre( e.target.value )}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description :</label>
                        <input
                            type='text'
                            name='description'
                            id='description'
                            placeholder='Description'
                            
                            onChange={(e) => setDescription( e.target.value )}
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date :</label>
                        <input
                            type='date'
                            name='date'
                            id='date'
                            
                            onChange={(e) => setDate( e.target.value )}
                        />
                    </div>
                    <div>
                        <label htmlFor="temps">Temps :</label>
                        <input
                            type='time'
                            name='temps'
                            id='temps'
                            
                            onChange={(e) => setTemps( e.target.value )}
                        />
                    </div>
                    <div>
                        <button className="butt" type='submit'>Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatEv;

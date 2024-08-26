import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';


function UpdateEv  () {

    const { id } = useParams()
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [temps, setTemps] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/events/${id}`)
            .then(res => {
                setTitre(res.data.titre);
                setDescription(res.data.description);
                setDate(res.data.date);
                setTemps(res.data.temps);
            })
            .catch(err => console.log(err));
    }, [id]); 


    const navigat = useNavigate()
    const handelSubmit = (e) => {
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
        axios.put('http://localhost:8000/events/' + id, eventData)
            .then( navigat('/'))
            .catch(err => console.log(err))
    }
    
    return (
        <div className='sillo'>
            <div className="formul">
                <h3>modifier l'évenement</h3>
                <form className='even' onSubmit={handelSubmit} >


                    <div>
                        <label htmlFor="titre"> Titre :</label>
                        <input type='text' name='titre' id='titre' value={titre}  placeholder='Titre' onChange={(e) => setTitre(e.target.value )}></input>
                    </div>
                    <div>
                        <label htmlFor="description"> Description :</label>
                        <input type='text' name='description' id='description' value={description}  placeholder='Descreption' onChange={(e) => setDescription( e.target.value )}></input>
                    </div>
                    <div>
                        <label htmlFor="date"> Date :</label>
                        <input type='date' name='date' id='date' value={date} onChange={(e) => setDate( e.target.value )}></input>
                    </div>
                    <div>
                        <label htmlFor="temps">temps :</label>
                        <input type='Time' name='temps' id='temps' value={temps} onChange={(e) => setTemps( e.target.value )}></input>
                    </div>
                    <div>
                        <button className="butt" type='submit' >modifier</button>
                    </div>



                </form>


            </div>
        </div>

    )
}


export default UpdateEv

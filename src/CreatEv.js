import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

function CreatEv  ()  {
    const [values, setValues] = useState(
        {
            titre: "",
            description: "",
            date: "",
            temps: ""
        }

    )
    
    const navigat = useNavigate()
    const handelSubmit = (e) => {
        
        axios.post('http://localhost:3030/creat', values)
            .then( navigat('/'))
            .catch(err => console.log(err))
    }
    return (
        <div className='sillo'>
            <div className="formul">
                <h3>Ajouter un évenement</h3>
                <form className='even' onSubmit={handelSubmit}  >


                    <div>
                        <label htmlFor="titre"> Titre :</label>
                        <input type='text' name='titre' id='titre' placeholder='Titre' onChange={(e) => setValues({ ...values, titre: e.target.value })}></input>
                    </div>
                    <div>
                        <label htmlFor="description"> Description :</label>
                        <input type='text' name='description' id='description' placeholder='Descreption' onChange={(e) => setValues({ ...values, description: e.target.value })}></input>
                    </div>
                    <div>
                        <label htmlFor="date"> Date :</label>
                        <input type='date' name='date' id='date' onChange={(e) => setValues({ ...values, date: e.target.value })}></input>
                    </div>
                    <div>
                        <label htmlFor="temps">temps :</label>
                        <input type='time' name='temps' id='temps' onChange={(e) => setValues({ ...values, temps: e.target.value })}></input>
                    </div>
                    <div>
                        <button className="butt" type='submit'>Ajouter</button>
                    </div>



                </form>


            </div>
        </div>


    )

}

export default CreatEv

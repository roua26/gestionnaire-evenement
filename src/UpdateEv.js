import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';


function UpdateEv  () {

    const { id } = useParams()
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
        axios.put('http://localhost:3030/update/' + id, values)
            .then(res => navigat('/'))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get('http://localhost:3030/getrecord' + id)
            .then(res => setValues({
                ...values, titre: res.data.titre,
                description: res.data.description,
                date: res.data.date,
                temps: res.data.temps
            }))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='sillo'>
            <div className="formul">
                <h3>modifier l'évenement</h3>
                <form className='even' onSubmit={handelSubmit} >


                    <div>
                        <label htmlFor="titre"> Titre :</label>
                        <input type='text' name='titre' id='titre' value={values.titre} placeholder='Titre' onChange={(e) => setValues({ ...values, titre: e.target.value })}></input>
                    </div>
                    <div>
                        <label htmlFor="description"> Description :</label>
                        <input type='text' name='description' id='description' value={values.description} placeholder='Descreption' onChange={(e) => setValues({ ...values, description: e.target.value })}></input>
                    </div>
                    <div>
                        <label htmlFor="date"> Date :</label>
                        <input type='date' name='date' id='date' value={values.date} onChange={(e) => setValues({ ...values, date: e.target.value })}></input>
                    </div>
                    <div>
                        <label htmlFor="temps">temps :</label>
                        <input type='Time' name='temps' id='temps' value={values.temps} onChange={(e) => setValues({ ...values, temps: e.target.value })}></input>
                    </div>
                    <div>
                        <button className="butt" type='submit' >Ajouter</button>
                    </div>



                </form>


            </div>
        </div>

    )
}


export default UpdateEv

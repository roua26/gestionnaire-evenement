import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Events ()  {
    const [events, setEvents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3030')
            .then(res => setEvents(res.data))
            .catch(err => console.log(err))
    }, [])
    const handeldelet = (id) => {
        axios.delete('http://localhost:3030/delet/' + id)
            .then(res => window.location.reload())
            .catch(err => console.log(err))

    }
    return (
        <div>
            <Link to="/creat" style={{ marginLeft: "30px", backgroundColor: "green", padding: "5px", color: "white", textDecoration: "none" }}>Ajouter un evenement</Link>
            <table style={{ borderCollapse: "separate", borderSpacing: "95px 40px" }}>
                <thead style={{ boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)", padding: "10px" }} >
                    <th>Titre</th>
                    <th>Descreption</th>
                    <th>Date</th>
                    <th>Temps</th>

                </thead>
                <tbody>

                    {events.length > 0 ? (
                        events.map(event => (
                            <tr key={event.id}>
                                <td>{event.titre}</td>
                                <td>{event.description}</td>
                                <td>{event.date}</td>
                                <td>{event.temps}</td>*
                                <td><Link to={`/update/ ${event.id}`} style={{ backgroundColor: "blue", padding: "5px", color: "white", textDecoration: "none" }}>modifier</Link></td>
                                <td><button onClick={() => handeldelet(event.id)} style={{ backgroundColor: "red", padding: "5px", color: "white", textDecoration: "none" }}>supprimer</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No events available</td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    )
}

export default Events

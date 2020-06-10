import React,{useEffect,useMemo,useState} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';
import socketIOC from '../../services/socket';

import './styles.css';

export default function Dashboard({history}) {
    const [spots,setSpots] = useState([]);
    const [books,setBooks] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard',{
                headers: {user_id}
            });
            
            setSpots(response.data);
        }

        loadSpots();
    },[]);

    const user_id = localStorage.getItem('user');
    const sioc = useMemo(() => socketIOC({user_id}),[user_id]);

    useEffect(() => {
        // sioc.emit('clientCB', '--> Servidor Conectado!');
        // sioc.on('serverCB', it => console.log(`>>> serverCB: ${it}`));
        
        sioc.on('booking_create', it => {
            setBooks([...books,it]);
        });
    },[books,sioc]);

    async function handleApproved(id,approved) {
        const user_id = localStorage.getItem('user');

        await api.put(`/bookings/${id}`,{approved},{
            headers: {user_id}
        });

        setBooks(books.filter(it => it._id !== id));
    }
    
    return(
        <>
            <ul className="book-list">
                {books.map(it => (
                    <li key={it._id}>
                        <p><strong>{it.user.email} </strong>
                            solicita uma reserva em
                            <strong> {it.spot.company} </strong>
                            para a data:
                            <strong> {it.date}</strong>
                        </p>
                        <button className="accept" onClick={() => handleApproved(it._id,true)}>Aceitar</button>
                        <button className="reject" onClick={() => handleApproved(it._id,false)}>Rejeitar</button>
                    </li>
                ))}
            </ul>

            <ul className="spot-list">
                {spots.map(it => (
                    <li key={it._id}>
                        <header style={{backgroundImage: `url(${it.thumbnail_url})`}} />
                        <strong>{it.company}</strong>
                        <span>{it.price ? `R$ ${it.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>

            <Link to='/new'>
                <button className="btn">Cadastrar novo Spot</button>
            </Link>
        </>
    );
}

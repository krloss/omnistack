import socketIOC from 'socket.io-client';

export default function(query) {
    const sioc = socketIOC('http://localhost:4321',{query});
    
    return sioc;
}

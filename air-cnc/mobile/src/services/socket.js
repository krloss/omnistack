import socketIOC from 'socket.io-client';

export default function(query) {
    const sioc = socketIOC('http://10.5.3.115:4321',{query});
    
    return sioc;
}

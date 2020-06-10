const socketIO = require('socket.io');
const http = require('http');

function build(requestListener) { // requestListener: Express App
    const server = http.Server(requestListener);
    const sio = socketIO(server);
    const connectedUsers = { }; // Use Redis...
    
    sio.on('connection', it => {
        const {user_id} = it.handshake.query;

        connectedUsers[user_id] = it.id;
        // sio.to(it.id).emit('serverCB','--> Cliente Conectado!');
        // sio.emit('serverCB',`--> Cliente Conectado: ${it.id}`);
        // it.emit('serverCB','--> Bem vindo!');
        // it.on('clientCB', data => console.log(`>>> Bem vindo: ${data}`));
    });
    
    function requestHandler() {
        return ((req,res,next) => {
            req.sio = sio;
            req.connectedUsers = connectedUsers;

            return next();
        });
    }

    return {server,sio,connectedUsers,requestHandler};
}

module.exports = build;



const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    });

    socket.on('send-message', (payload, callback) =>  {
        const id = 1234563333;
        callback(id);

        socket.broadcast.emit('send-message', payload);
    });
}

module.exports = {
    socketController,

}
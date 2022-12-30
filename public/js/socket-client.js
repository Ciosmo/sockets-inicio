// Referencias del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline =document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnSend    = document.querySelector('#btnSend');

const socket = io();



socket.on('connect', () => {

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
 
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('send-message', (payload) =>{
    console.log(payload)
});

btnSend.addEventListener('click', () => {
    const msj = txtMensaje.value;
    const payload = {
        msj,
        id: 'ignac',
        fecha: new Date().getTime()
        
    }
    socket.emit('send-message', payload, (id) =>{
        console.log('desde el sv', id);
    });
});
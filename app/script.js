const socket = io('http://localhost:3000');
const messageFrom = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

socket.on('chat-message', data =>{
    console.log(data);
});

messageFrom.addEventListener('submit', e =>{
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';
});
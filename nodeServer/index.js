const io = require('socket.io')(8000, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

const users = {};

io.on('connection', socket => {
    console.log('A user connected:', socket.id);
    
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('left', users[socket.id]);
        console.log('User disconnected:', socket.id);
        delete users[socket.id];
    });
});

console.log("Server is running on port 8000");
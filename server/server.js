const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection' , (socket)=>{
  console.log('New User connected');
// socket.emit('newEmail', {
//   from:"mike@example.com",
//   text:"'hey . what is going on'",
//   createAt:123
// });
   // socket.on('createEmail',(newEmail)=>{
   //   console.log('createEmail', newEmail);
   // });

    socket.emit('newMessage',{
      from:'Jensen',
      text:'See you then',
      createdAt:123
    });

   socket.on('createMessage',(Message)=>{
     console.log('createMessage',Message);
   });


  socket.on('disconnect',()=>{
    console.log('User was disconnected');
  });
});



server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

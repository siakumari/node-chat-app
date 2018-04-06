var socket = io();

socket.on('connect',function (){
  console.log('connected to server');

  // socket.emit('createEmail',{
  //   to:"jen@example.com",
  //   text:'hey.this is dean.'
  // });

  socket.emit('createMessage',{
    from:'shalini',
    text:'yup,that works for me.'
  });
});

socket.on('disconnect',function (){
  console.log('Disconnected fro the server');
});

// socket.on('newEmail', function(email){
//   console.log('New email',email);
// });


socket.on('newMessage',function(Message){
  console.log('newMessage',Message);
});

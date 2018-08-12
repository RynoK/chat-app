
 let socket = io.connect('https://cryptic-savannah-60906.herokuapp.com');

//quering
let user = document.getElementById('user');
let msg  = document.getElementById('message');
let send  = document.getElementById('send');
let output = document.getElementById('output');

send.addEventListener('click',function(){
  socket.emit('chat',{user:user.value,msg:msg.value});

})
socket.on('chat',function(data){
  msg.value="";
  output.innerHTML+="<p><strong>"+data.user+":</strong>"+data.msg+"</p>";
})

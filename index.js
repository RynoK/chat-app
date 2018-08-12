const express =require('express');
const socket = require('socket.io');
const fs =require('fs');


const app = express();
const port = process.env.PORT || 4000;

let chatData=fs.readFileSync('./database/data.json');
chatData=JSON.parse(chatData);
///add chatData
function addData(){

  let data=JSON.stringify(chatData);
fs.writeFileSync('./database/data.json',data);

}

app.use(express.static('public'));
const server =app.listen(port);

var clients=[];

const io = socket(server);



io.to(clients[clients.length-1]).emit('msg',"heloo")
io.on('connection',function(socket){


  socket.on('chat',function(data){

chatData.push(data);
addData();

    io.sockets.emit('chat',data);
  })
})

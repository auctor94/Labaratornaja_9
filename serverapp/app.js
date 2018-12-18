const http = require("http");
const fs = require("fs");
 var path = require('path');
const express = require("express");
 
const app = express();

app.use(express.static(__dirname + "/public"));


var server = http.createServer(app);

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket, pseudo) {
    // Quand on client se connecte, on lui envoie un message
    socket.emit('message', 'Connection established!');
    // On signale aux autres clients qu'il y a un nouveau venu
    socket.broadcast.emit('message', 'cheto tam ! ');

    // Dès qu'on nous donne un pseudo, on le stocke en variable de session
    socket.on('petit_nouveau', function(pseudo) {
        socket.set('pseudo', pseudo);
    });

    socket.on('my other event', function (data) {
        console.log("to write massiv");
        socket.emit('massiv', writemassiv());
        
      });
      socket.on('readmassiv', function () {
          console.log("to read massiv");
          socket.emit('massiv2', readmassiv());
      })
      socket.on('readmassiv2', function () {
        console.log("to read massiv2");
        socket.emit('massiv3', readmassiv2());
      });
});
/* Your socket event handlers are here.*/

server.listen(8080);



 function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  };

function writemassiv() {
    let massivChisel = [];
for (let i = 0; i<100;i++) {
massivChisel[i] = Math.random() * (100 - 10) + 10;
}

 fs.writeFileSync("before.txt", massivChisel);
let send = [];
send = massivChisel;
sortMassiv(massivChisel);
};


function sortMassiv(data) {
    let massiv = data;
console.log(massiv);
massiv.sort(compareNumeric);
 fs.writeFileSync("sorted.txt", massiv);
};


function readmassiv() {
    let massiv = new String();
    massiv = fs.readFileSync("before.txt", "utf8");
var res = [];
res = massiv.split(",");
console.log(res);
return res;
}

function readmassiv2() {
    let massiv = new String();
    massiv = fs.readFileSync("sorted.txt", "utf8");
var res = [];
res = massiv.split(",");
console.log(res);
return res;
}



 



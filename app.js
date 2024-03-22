//this is our javascript web server
const express = require("express"); //require == #include
const app = express();
const http = require("http");
const server = http.createServer(app);
const io  = require('socket.io')(server);

const LISTEN_PORT = 8080; //default port 80. We need to use something else.

//const ABS_STATIC_PATH = __dirname + '/public';
app.use(express.static(__dirname + '/public')); //set root path of server ...

//set our route
app.get('/', function (req, res) {
    res.sendFile( __dirname + '/public/homeScreen.html' );
    });

    app.get( '/island', function( req, res ){ 
        res.sendFile( __dirname + '/public/island.html' );
    });
    app.get( '/innovationLab', function( req, res ){ 
        res.sendFile( __dirname + '/public/innovationLab.html' );
    });
    app.get( '/lighthouse_Floor1', function( req, res ){ 
        res.sendFile( __dirname + '/public/lighthouse_Floor1.html' );
    });
            


    io.on('connection', (socket) => {
        console.log( socket.id + " connected" );
    
        socket.on('disconnect', () => {
            console.log( socket.id + " disconnected" );
        });
    
        socket.on("square", (data) => {
            console.log( "Square in the right spot" );
            io.emit("square_Good", "green");
            //io.emit("color_change", {r:255, g:0, b:0});
        });

    });
server.listen(LISTEN_PORT); //starts server
app.use(express.static(__dirname + '/public')); //the client can access these files via http

console.log("Listening on port: " + LISTEN_PORT); //a console output so something happens
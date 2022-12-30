const express = require('express')
const cors = require("cors");
const {socketController} = require('../sockets/controller');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {}
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //Middlewares
        this.middlewares();

        // Ruta de mi app
        this.routes();

        // sockets

        this.sockets();
    }
 
    middlewares(){

        //CORS
        this.app.use(cors() );

        //Directorio publico
        this.app.use(express.static("public") )
        
    }

    routes(){
        
        /*this.app.use(this.paths.auth,     require("../routes/auth"));
        REFERENCIA DE COMO REALIZARLO    
        */
    }

    sockets(){
        this.io.on('connection', socketController);


    }
    listen(){        
        this.server.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port );
        });
    }
}

module.exports = Server;
    
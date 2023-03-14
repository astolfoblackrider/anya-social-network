const express = require('express')
const path = require('path')
const app = express()



app.listen(3000, () => {console.log("started on port 3000")})



app.get('*', (req, res) => {
    console.log("pidor")
    res.sendFile(path.resolve(__dirname, 'index.html' ));
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    // res.header("Pragma", "no-cache");
    // res.header("Expires", 0);
    // res.header("Content-Type", "tex/javascript");

})   






// // const WebSocket = require("ws")
// // const wss = new WebSocket.Server({ 
// //     port: 8080
// // },
// // () => console.log('server started')
// // );

// // wss.on("connection", function (ws) {

// //         console.log('pidor is connect');
// //         ws.on("close", () => {
// //             console.log('pidor is disconnect');
// //         });
// //     });

    
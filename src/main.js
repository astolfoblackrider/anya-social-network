import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'



const app = createApp(App)

// app.use(router)

app.mount('#app')
const express = require('express')
const path = require('path')
const APP = express()

// app.use(express.static(path.resolve(__dirname,'anya social network' )))

APP.listen(3000, () => {console.log("started on port 3000")})



// APP.get('*', (req, res) => {
//     console.log("pidor")
//     res.sendFile(path.resolve(__dirname, 'index.html' ));
//     res.header("Cache-Control", "no-cache, no-store, must-revalidate");
//     // res.header("Pragma", "no-cache");
//     // res.header("Expires", 0);
//     // res.header("Content-Type", "tex/javascript");

// })   
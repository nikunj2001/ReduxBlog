const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT=process.env.PORT || 5000;
const connect = require('./config/db');
const router = require('./routes/userRoutes')



// DataBase Call
connect();
app.use(bodyParser.json());
app.use('/',router);
app.get('/',(req,res)=>{
    res.send('Hello from home');
})

app.listen(PORT,()=>{
    console.log(`server running on Port ${PORT}`);
})

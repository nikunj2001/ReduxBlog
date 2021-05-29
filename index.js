const express= require('express');
const app = express();
const PORT=process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('Hello from home');
})

app.listen(PORT,()=>{
    console.log(`server running on Port ${PORT}`);
})

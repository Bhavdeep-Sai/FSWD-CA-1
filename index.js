const express = require('express');
const app = express();
const PORT = 8000;

app.get('/resetpassword',(req,res)=>{

    const {email, password} = req.query;


    if (!email){
        return res.send("Email cannot be empty");
    }
    if (!password ||password.length <8 || password.length > 16){
        return res.send("Password length should be greater than 8 or less than or equal 16");
    }

    res.send("Password as been changed");
})


app.get('/',(req,res)=>{
    res.send("You can reset your password by giving ur mail-id in the endpoint");
})

app.listen(PORT,()=>{
    console.log(`your server is running at http://localhost:${PORT}`);
})
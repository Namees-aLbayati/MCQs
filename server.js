const express=require('express');
const app=express();
const PORT=process.env.PORT||3001;
const path=require('path')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})
app.get('/gameStarted',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/pages/questions.html'))
})
app.listen(PORT,()=>{
    console.log('listening....')
})
const path=require('path')
require('dotenv').config({path: path.join(__dirname,'../config/dev.env')})

const express =require('express')
const port=process.env.PORT || 3000

const app=express()
const orderRouter=require('./routers/order')

app.use(express.json())
app.use(orderRouter)

app.listen(port,()=>{
    console.log('Server is up at Port',port)
})
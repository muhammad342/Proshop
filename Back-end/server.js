import  express  from "express"
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// import products from'./data/products.js'
import productRoutes from './routes/productRoutes.js'
import userRoute from './routes/userRoute.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
dotenv.config()
connectDB()
// const express =require('express');
// const products =require('./data/products');
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('api is running')

})
app.use('/api/products' ,productRoutes)
app.use('/api/users' ,userRoute)
app.use(notFound)
app.use(errorHandler)
app.listen(5000,console.log('server is running'))

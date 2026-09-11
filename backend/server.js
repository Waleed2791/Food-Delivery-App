import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import addfood from './routes/FoodRoutes.js'

// Dotend Donfig
dotenv.config()

// App Config
const app = express()
const port = 4000


// Middleware
app.use(express.json())
app.use(cors())


// DB Connection
connectDB()


// Api Endpoints
app.use("/uploads", express.static("uploads"));
app.use('/api/foodItem', addfood)

app.get('/', (req, res)=>{
    res.send("API WORKING!")
})


app.listen(port,()=>{
    console.log(`Server Runnig on: http://localhost:${port}`)
})
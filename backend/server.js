import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import addfood from './routes/FoodRoutes.js'
import CategoryRouter from './routes/categoryRoutes.js'
import UserRouter from './routes/UserRouter.js'
import BillingRouter from './routes/BillingDetailsRoute.js'
import OrderRouter from './routes/OrdersRouter.js'

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
app.use('/api/category', CategoryRouter)
app.use('/api/users', UserRouter)
app.use('/api/user/billing', BillingRouter)
app.use('/api/user/orders', OrderRouter)

app.get('/', (req, res)=>{
    res.send("API WORKING!")
})


app.listen(port,()=>{
    console.log(`Server Runnig on: http://localhost:${port}`)
})
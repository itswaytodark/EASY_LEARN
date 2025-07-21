import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connectDb from './config/MongoDb.js'
import authRouter from './routes/authRoutes.js'

const PORT = process.env.PORT || 4000
connectDb()

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

//Api Routes
app.use('/api/auth',authRouter)


app.listen(PORT, () => {
    console.log(`server is started on ${PORT}`)
})






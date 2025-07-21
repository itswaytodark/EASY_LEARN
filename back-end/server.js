import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/MongoDb.js'


const PORT = process.env.PORT || 4000
connectDb()


const app = express()

app.use(cors())
app.use(express.json())



app.listen(PORT, () => {
    console.log(`server is started on ${PORT}`)

})






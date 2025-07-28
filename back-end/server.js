import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connectDb from './config/MongoDb.js'
import authRouter from './routes/authRoutes.js'
import blogRouter from './routes/blogroutes.js'


const PORT = process.env.PORT || 4000
connectDb()

const app = express()


const allowedOrigins = [
  'https://easy-learn-red.vercel.app',
  'http://localhost:5000',     
];


const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};


app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())


//Api Routes
app.use('/api/auth',authRouter)
app.use('/api/blogs',blogRouter)



app.listen(PORT, () => {
    console.log(`server is started on ${PORT}`)
})
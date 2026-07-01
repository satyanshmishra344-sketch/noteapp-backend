
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import noteRoutes from './routes/note.routes.js'

dotenv.config()



// Datbase connection
try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}
const app = express()
const port = process.env.PORT || 4002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Routes
app.use(express.json())
app.use(cors())
app.use('/api/v1/notes', noteRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

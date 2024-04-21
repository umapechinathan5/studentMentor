import express from 'express'
import cors from 'cors'
import connectDB from './db/connect.js'
import mentor from "./router/mentorRouter.js"
import mentee from "./router/studentRouter.js"
const app = express()
app.use(cors())
app.use(express.json())

connectDB();
app.use('/api/mentor',mentor)
app.use('/api/mentee',mentee)





app.listen(process.env.PORT,()=>{
    console.log("App is running on the port -",process.env.PORT);
})
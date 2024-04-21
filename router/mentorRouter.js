import express from 'express'
import { GetAllMentor, createMentor, getMentorAssigned, getStudentListMentor } from '../routes/mentor.js'


const MentorRouter = express.Router()

MentorRouter.post('/create',createMentor)
MentorRouter.get('/getallmentor', GetAllMentor)
MentorRouter.put('/assign/:id', getMentorAssigned)
MentorRouter.get('/find/:id', getStudentListMentor)



export default MentorRouter
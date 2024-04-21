import express from 'express'
import { AssignMentor, GetAllStudents, createStudent, getStudentAssignedMentor } from "../routes/student.js"

const StudentRouter = express.Router()

StudentRouter.post('/create', createStudent)  
StudentRouter.get('/getallmentees', GetAllStudents)
StudentRouter.put('/assign/:id', AssignMentor)
StudentRouter.get('/find/:id',getStudentAssignedMentor)



export default StudentRouter
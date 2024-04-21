import Student from '../schemas/student.js'

export const createStudent = async(req,res)=>{
    try {
        const newStudent = new Student(req.body)
        await newStudent.save()
        res.status(200).json({data:newStudent})
    } catch (error) {
        console.log(error);
    }
}

export const GetAllStudents = async(req,res)=>{
    try {
       const allStudents = await Student.find() 
       res.status(200).json({message:"Fetched All Students Successfully",data:allStudents})
    } catch (error) {
        console.log(error)
    }
}


export const AssignMentor = async(req,res)=>{
    try {
        const studentId = req.params.id 
        const {mentorId} = req.body
        const students = await Student.findByIdAndUpdate(
            studentId,
            {mentor:mentorId},
            {new:true}
        )
        await students.save()
       res.status(200).json({message:"assigned mentor successfully", students})

    } catch (error) {
        console.log(error);
        
    }
}


export const getStudentAssignedMentor = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id).populate('mentor');
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.status(200).json({
            message: "Fetched Successfully",
            student:student
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error Fetching the Mentor"
        });
    }
};
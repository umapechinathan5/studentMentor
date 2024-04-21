import Mentor from '../schemas/mentor.js'
import Student from '../schemas/student.js'


export const createMentor = async(req, res)=>{
    try {
        const newMentor = new Mentor(req.body)
        await newMentor.save()
        res.status(200).json({data:newMentor})
    } catch (error) {
        console.log(error);
    }
}

export const GetAllMentor = async (req,res)=>{
    try {
        const allMentors = await Mentor.find()
        res.status(200).json({message:"Fetched All Mentors Successfully",data:allMentors})
    } catch (error) {
        console.log(error);
    }
}


export const getMentorAssigned = async(req,res) =>{
    try {
       const mentor = req.params.id;
       const {student} = req.body;
       const mentors = await Mentor.findByIdAndUpdate(
           mentor,
         {$push: {student: student} },
           {new: true}
       );
       res.status(200).json({
           message:"Assigned the Students Successfully",
           mentors
       })
    } catch (error) {
       res.status(500).json({
           error: "Error Assigning the Students"
       })
    }
}



export const getStudentListMentor = async (req, res) => {
    try {
        const mentorId = req.params.id;
    
        const students = await Student.find({ mentor: mentorId });
        

        res.status(200).json({
            message: "Fetched the students Successfully",
            students
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
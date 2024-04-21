import mongoose from "mongoose";


const studentSchema = mongoose.Schema({
    name:String,
    email:String,
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Mentor'
    }
},{versionKey:false})

const Student = mongoose.model('student', studentSchema)

export default Student
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {type:String, required:true, unique:true},
    full_name: {type:String, required:true, unique:true}, 
    gender: {type:Enumerator, required:true}, 
    birth_date: {type:Date, required:true}, 
    role: {type:mongoose.Schema.Types.ObjectId, ref:`role`, required:true},
    card_id: {type:String, required:true, unique:true}, 
    marital_status: {type:Enumerator, required:true},
    email: {type:String, required:true, unique:true},
    phones: [{
        home: {type:Number},
        job: {type: Number}
    }],
    // bible_group:{type:mongoose.Schema.Types.ObjectId, ref:`bible_group`, required:true},
    // red:{type:mongoose.Schema.Types.ObjectId, ref:`red`, required:true},
    address:{type:mongoose.Schema.Types.ObjectId, ref:`address`, required:true},
    picture: {type:String}
})

export default mongoose.model('User', UserSchema)
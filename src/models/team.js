import mongoose from 'mongoose';
const { Schema } = mongoose;

const team = new Schema({
    name: {
        type: String,
        
    },
    trenerName: {
        type: String,   
    },
    reting:{
        type:Number,
    }
}, { timestamps: true });
export const Team = mongoose.model('Team', team);

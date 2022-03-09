import mongoose from 'mongoose';
const { Schema } = mongoose;

const team = new Schema({
    name: {
        type: String,
        required: true
    },
    trenerName: {
        type: String,
        required: true
    }
}, { timestamps: true });
export const Team = mongoose.model('Team', team);

import mongoose from 'mongoose';
const { Schema } = mongoose;

const country = new Schema({
    countris: {
        type: String,
        required: true
    }
    
}, { timestamps: true });
export const Country = mongoose.model('Country', country);
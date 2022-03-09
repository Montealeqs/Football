import mongoose from 'mongoose';
const { Schema } = mongoose;

const player = new Schema({
    name: {
        type: String,
        required: true
    },
    birtDay: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    nop: {
        type: Number,
        required: true
    },
    hight: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
  
  teamId: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  countryId: [{ type: Schema.Types.ObjectId, ref: 'Country' }]
}, { timestamps: true });
export const Player = mongoose.model('Player', player);

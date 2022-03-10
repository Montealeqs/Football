import mongoose from 'mongoose';
const { Schema } = mongoose;

const colendar = new Schema({
    dataTime: {
        type: String,

    },
    account: {
        type: String,

    },
    team1Id: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
    team2Id: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
}, { timestamps: true });
export const Colendar = mongoose.model('Colendar', colendar);

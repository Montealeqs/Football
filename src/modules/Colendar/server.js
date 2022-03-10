
import { Colendar } from "../../models/colendar";

export default class ServerColendar {
    static async get({ data }) {
        return Colendar.find(data).populate(['team1Id', 'team2Id']);
    }
    static async create({ data }) {
        return Colendar.create(data)
    }
    static async change({ params }, { body }) {
        return Colendar.findByIdAndUpdate({ _id: params }, body)
    }
    static async delete({ params }, { body }) {
        return Colendar.findByIdAndDelete({ _id: params }, body)
    }
}
import { Player } from "../../models/player";

export default class ServerPlayer {
    static async get({ data }) {
        return (await Player.find().sort({ name: data }).populate('countryId').populate(['teamId']))
    }

    static async create({ data }) {
        return Player.create(data)
    }

    static async change({ params }, { body }) {
        return Player.findByIdAndUpdate({ _id: params }, body)
    }

    static async delete({ params }, { body }) {
        return Player.findByIdAndDelete({ _id: params }, body)
    }
    static async sortPlayer() {
        return Player.find().populate('countryId')
    }
}
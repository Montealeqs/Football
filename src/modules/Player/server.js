import { Player } from "../../models/player";

export default class ServerPlayer {

    static async getPlayer({ data }) {
        return Player.find(data).populate('countryId').populate('teamId')
    }

    static async getSortPlayer({ data }) {
        return (await Player.find().sort({ name: data }).populate('countryId').populate('teamId'))
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

    static async createMany({ data }) {
        return Player.insertMany(data)
    }
    static async sortPlayerCountry() {
        return Player.find().populate('countryId')
    }
    static async sortPlayerTeam() {
        return Player.find().populate('teamId')
    }
}
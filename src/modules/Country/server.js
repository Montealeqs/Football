import { Country } from "../../models/country"

export default class ServerCountry {
    static async get({ data }) {
        return Country.find(data)
    }
    static async create({ data }) {
        return Country.create(data)
    }
    static async change({ params }, { body }) {
        return Country.findByIdAndUpdate({ _id: params }, body)
    }
    static async delete({ params }, { body }) {
        return Country.findByIdAndDelete({ _id: params }, body)
    }
}
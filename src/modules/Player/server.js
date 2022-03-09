import { Player } from "../../models/player";
// import { Team } from "../../models/team";

export default class ServerPlayer{
    static async get({data}){
        return Player.find(data).populate(['countryId', 'teamId'])
    }
    static async create({data}){
        return Player.create(data)
    }
    static async change({params},{body}){
        return Player.findByIdAndUpdate({_id:params},body)
    }
    static async delete({params},{body}){
        return Player.findByIdAndDelete({_id:params},body)
    }
}
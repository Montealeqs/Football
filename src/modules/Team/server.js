import { Team } from "../../models/team";

export default class ServerTeam{
    static async get({data}){
        return Team.find(data)
    }
    static async create({data}){
        return Team.create(data)
    }
    static async change({params},{body}){
        return Team.findByIdAndUpdate({_id:params},body)
    }
    static async delete({params},{body}){
        return Team.findByIdAndDelete({_id:params},body)
    }
}
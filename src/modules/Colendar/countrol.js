import ServerTeam from '../Team/server';
import ServerColendar from './server';

export class CountrolerColendar {
  static async getData(req, res) {
    const getData = await ServerColendar.get({ data: req.body })
    res.send(getData)
  }
  static async createData(req, res) {
    const createData = await ServerColendar.create({ data: req.body })
    res.send(createData)
  }
  static async updateData(req, res) {
    ServerColendar.change({ params: req.params.id }, { body: req.body }).then(data => { res.json(data) })

  }
  static async delete(req, res) {
    ServerColendar.delete({ params: req.params.id }, { body: req.body }).then(data => { res.json(data) })

  }
  static async getTeam(req, res) {

    ServerColendar.get().then(calendarId => {
      for (let i = 0; i < calendarId.length; i++) {
        ServerTeam.get().then(data => {
          const team1Id = [];
          const team2Id = [];
          let i = data.length
          while (i > 0) {
            const random = Math.floor(Math.random() * data.length);
            i % 2 === 0 ? team1Id.push(data[random]) : team2Id.push(data[random]);
            data.splice(random, 1);
            i--
          }
          ServerColendar.change({ params: calendarId[i]._id }, { body: { team1Id: team1Id[0]._id, team2Id: team1Id[1]._id } })
        })
      }
    }).then(data => { res.json(data) })
  }

}


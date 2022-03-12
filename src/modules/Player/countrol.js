import ServerPlayer from "./server"

export class CountrolerPlayer {
  static async getData(req, res) {
    const getData = await ServerPlayer.getPlayer({ data: req.body })
    res.send(getData)
  }
  static async getDataPlayers(req, res) {
    let player = []
     ServerPlayer.getSortPlayer({ data: req.query.sort }).then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].countryId.countris === req.query.countris && data[i].teamId.name===req.query.name) {
          player.push(data[i])
        }
      }
      res.json(player)
    }) 
  }
  static async createData(req, res) {
    const createData = await ServerPlayer.create({ data: req.body })
    res.send(createData)
  }
  static async updateData(req, res) {
    ServerPlayer.change({ params: req.params.id }, { body: req.body }).then(data => { res.json(data) })

  }
  static async delete(req, res) {
    ServerPlayer.delete({ params: req.params.id }, { body: req.body }).then(data => { res.json(data) })

  }
  static async createDataMany(req, res) {
    const createDataMany = await ServerPlayer.createMany({ data: req.body })
    res.send(createDataMany)
  }
  static async sortCountry(req, res) {
    let player = []
    ServerPlayer.sortPlayerCountry().then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].countryId._id == req.params.id) {
          player.push(data[i])
        }
      }
      res.json(player)
    })

  }

static async sortTeam(req, res) {
  let player = []
  ServerPlayer.sortPlayerTeam().then(data => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].teamId._id == req.params.id) {
        player.push(data[i])
      }
    }
    res.json(player)
  })
}
}

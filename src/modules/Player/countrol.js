import ServerPlayer from "./server"

export class CountrolerPlayer {
  static async getData(req, res) {
    const product = await ServerPlayer.get({ data: req.query.name })
    if (product) {
      return res.status(200).send(product);
    } else {
      return res.status(400).send('there is no such data defined')
    }
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
  static async sort(req, res) {
    let player = []
    ServerPlayer.sortPlayer().then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].countryId._id == req.params.id) {
          player.push(data[i])
        }
      }
      res.json(player)
    })

  }
}


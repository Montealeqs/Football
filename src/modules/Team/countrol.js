import ServerTeam from './server';
export class CountrolerTeam {
  static async getData(req, res) {
    const getData = await ServerTeam.get({ data: req.body })
    res.send(getData)
  }
  static async createData(req, res) {
    const createData = await ServerTeam.create({ data: req.body })
    res.send(createData)
  }
  static async updateData(req, res) {
    ServerTeam.change({ params: req.params.id }, { body: req.body }).then(data => { res.json(data) })

  }
  static async delete(req, res) {
    ServerTeam.delete({ params: req.params.id }, { body: req.body }).then(data => { res.json(data) })

  }
}

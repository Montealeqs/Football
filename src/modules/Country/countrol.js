import ServerCountry from './server';
export class CountrolerCountry {
  static async getData(req, res) {
    const getData = await ServerCountry.get({ data: req.body })
    res.send(getData)
  }
  static async createData(req, res) {
    const createData = await ServerCountry.create({ data: req.body })
    res.send(createData)
  }
  static async updateData(req, res) {
    ServerCountry.change({ params: req.params.id }, { body: req.body }).then(data => { res.json(data) })

  }
  static async delete(req, res) {
    ServerCountry.delete({ params: req.params.id }, { body: req.body }).then(data => { res.json(data) })

  }
}

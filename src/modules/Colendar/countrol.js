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
}



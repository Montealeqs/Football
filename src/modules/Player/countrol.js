import ServerPlayer from "./server"

export class CountrolerPlayer{
  static async getData(req,res){
    const getData=await ServerPlayer.get({data:req.body})
    res.send(getData)
  }
  static async createData(req,res){
    const createData=await ServerPlayer.create({data:req.body})
    res.send(createData)
  }
  static async updateData(req,res){
    ServerPlayer.change({params:req.params.id},{body:req.body}).then(data=>{res.json(data)})
    
  }
  static async delete(req,res){
    ServerPlayer.delete({params:req.params.id},{body:req.body}).then(data=>{res.json(data)})
    
  }
}


// import Player from '../../models/player';

// //get by players
// export const getPlayer = async (req, res) => {
//   const player = await Player.find({}).populate(['teamId', 'countryId'])
//   res.send(player)
// }
// // add players
// export const addPlayer = (req, res) => {
//   const player = new Player(req.body);
//   player.save((err) => {
//     if (err) {
//       res.json({ message: err.message, type: 'danger' })
//     } else {
//       res.send('ok');
//     }
//   })
// }
// // chenj players
// export const putPlayer = (req, res) => {
//   Player.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
//     if (err) {
//       res.status(500).json({ message: err.message, type: 'danger' });
//     } else if (data) {
//       res.status(200).send("documents successfully updated");
//     } else {
//       res.status(400).send('there is no such id defined')
//     }
//   })
// }
// // delete players
// export const deletePlayer = (req, res) => {
//   Player.deleteOne({ _id: req.params.id }).then(
//     () => {
//       res.status(200).json({
//         message: 'Deleted! Player'
//       });
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// };

// //get by teamPlayers
// export const getTeamPlayer = (req, res) => {
//   Player.find({ teamId: req.params.teamId }, (err, data) => {
//     if (err) {
//       res.status(500).json({ message: err.message, type: 'danger' });
//     } else if (data) {
//       res.status(200).send(data);
//     } else {
//       res.status(400).send('there is no such id defined')
//     }
//   }).populate(['teamId', 'countryId'])
// }

// //get by countryplayers
// export const getCountryPlayer = (req, res) => {
//   Player.find({ countryId: req.params.countryId }, (err, data) => {
//     if (err) {
//       res.status(500).json({ message: err.message, type: 'danger' });
//     } else if (data) {
//       res.status(200).send(data);
//     } else {
//       res.status(400).send('there is no such id defined')
//     }
//   }).populate(['countryId', 'teamId'])
// }

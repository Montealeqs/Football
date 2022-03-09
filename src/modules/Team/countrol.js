import ServerTeam from './server';
export class CountrolerTeam{
  static async getData(req,res){
    const getData=await ServerTeam.get({data:req.body})
    res.send(getData)
  }
  static async createData(req,res){
    const createData=await ServerTeam.create({data:req.body})
    res.send(createData)
  }
  static async updateData(req,res){
    ServerTeam.change({params:req.params.id},{body:req.body}).then(data=>{res.json(data)})
    
  }
  static async delete(req,res){
    ServerTeam.delete({params:req.params.id},{body:req.body}).then(data=>{res.json(data)})
    
  }
}


// import Team from '../../models/team';

// // get by team
// export const getTeam = async(req,res)=>{
//       const team =  await Team.find({}).exec()
//       res.send(team)
// }
// // add by team
// export const addTeam=(req, res) =>{
// const team = new Team(req.body);
//   team.save((err) => {
//       if(err){
//           res.json({message: err.message, type: 'danger'})
//       }else{
//           res.send('ok');
//       }
//   })
// }
// // chenj by team 
// export const putTeam= async (req, res) => {
//     Team.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message, type: 'danger' });
//         } else if (data) {
//             res.status(200).send("documents successfully updated");
//         } else {
//             res.status(400).send('there is no such id defined')
//         }
//     })
// }
// // delete by team 
// export const deleteTeam= (req, res) => {
//     Team.deleteOne({_id: req.params.id}).then(
//       () => {
//         res.status(200).json({
//           message: 'Deleted! Team'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   };
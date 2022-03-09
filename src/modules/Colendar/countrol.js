import ServerColendar from './server';
export class CountrolerColendar{
  static async getData(req,res){
    const getData=await ServerColendar.get({data:req.body})
    res.send(getData)
  }
  static async createData(req,res){
    const createData=await ServerColendar.create({data:req.body})
    res.send(createData)
  }
  static async updateData(req,res){
    ServerColendar.change({params:req.params.id},{body:req.body}).then(data=>{res.json(data)})
    
  }
  static async delete(req,res){
    ServerColendar.delete({params:req.params.id},{body:req.body}).then(data=>{res.json(data)})
    
  }
}




// // get by colendar
// export const getColendar = async(req,res)=>{
//       const colendar =   await Colendar.find({}).populate(['team1Id', 'team2Id'])
//       res.send(colendar)
// }
// // add by colendar
// export const addColendar=(req, res) =>{
// const colendar = new Colendar(req.body);
//   colendar.save((err) => {
//       if(err){
//           res.json({message: err.message, type: 'danger'})
//       }else{
//           res.send('ok');
//       }
//   })
// }
// // chenj by colendar
// export const putColendar= async (req, res) => {
//     Colendar.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message, type: 'danger' });
//         } else if (data) {
//             res.status(200).send("documents successfully updated");
//         } else {
//             res.status(400).send('there is no such id defined')
//         }
//     })
// }
// // delete by colendar
// export const deleteColendar= (req, res) => {
//      Colendar.deleteOne({_id: req.params.id}).then(
//       () => {
//         res.status(200).json({
//           message: 'Deleted! colendar'
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

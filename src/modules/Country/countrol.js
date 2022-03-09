import ServerCountry from './server';
export class CountrolerCountry{
  static async getData(req,res){
    const getData=await ServerCountry.get({data:req.body})
    res.send(getData)
  }
  static async createData(req,res){
    const createData=await ServerCountry.create({data:req.body})
    res.send(createData)
  }
  static async updateData(req,res){
    ServerCountry.change({params:req.params.id},{body:req.body}).then(data=>{res.json(data)})
    
  }
  static async delete(req,res){
    ServerCountry.delete({params:req.params.id},{body:req.body}).then(data=>{res.json(data)})
    
  }
}




// import Country from '../../models/country';
// // get by country
// export const getCountry = async(req,res)=>{
//       const country =  await Country.find({}).exec()
//       res.send(country)
// }
// // add by country
// export const addCountry=(req, res) =>{
// const country = new Country(req.body);
//   country.save((err) => {
//       if(err){
//           res.json({message: err.message, type: 'danger'})
//       }else{
//           res.send('ok');
//       }
//   })
// }
// // chenj by country
// export const putCountry= async (req, res) => {
//     Country.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
//         if (err) {
//             res.status(500).json({ message: err.message, type: 'danger' });
//         } else if (data) {
//             res.status(200).send("documents successfully updated");
//         } else {
//             res.status(400).send('there is no such id defined')
//         }
//     })
// }
// // delete by country
// export const deleteCountry= (req, res) => {
//    Country.deleteOne({_id: req.params.id}).then(
//       () => {
//         res.status(200).json({
//           message: 'Deleted! country'
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
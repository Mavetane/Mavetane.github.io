const UsersModel = require("../models/users")

const users = (app) => {
app.get('/users', async(req, res) => {
    try{

        var users = await UsersModel.find().skip(Number(req.query.skip))
        .limit(Number(req.query.limit))
        var paginatedUsers = users 
        const results = paginatedUsers.map(computer => {
            return {
                id: computer._id,
                name: computer.name,
                date: computer.date
            }
        })
        res.send(results)
    } catch(e) {
        console.log(e)
    }
})
// var compareName = await ComputerModel.find()
// for(var i in compareName) {
//     if(req.body.name.toUpperCase().trim() == compareName[i].name.toUpperCase().trim()){
//         return res.status(400).json("Name already exist")
//     }
//     console.log("I'm compare name", compareName[i].name)
// }
// if(req.body.name == ""){
//     return res.status(400).json("Input field is required")
// }

app.post('/users', async(req, res) => {
    var compareName = await UsersModel.find()
    for(var i in compareName) {
        if(req.body.name.toUpperCase().trim() == compareName[i].name.toUpperCase().trim()){
            return res.status(500).json("Name already exist")
        }
    }
    if(req.body.name == ""){
        return res.status(400).json("Input field is required")
    }
    var newUser = new UsersModel({ name: req.body.name })
    try{
        const dbResult = await newUser.save();
        console.log(dbResult)
        res.send(201)
    }catch (e) {
        console.log(e)
    }

})
 
app.delete('/users/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        const success = await UsersModel.remove({_id: id})
        console.log("I'm users id", success)

        // if(success) {
            res.status(201).end()
       
    } catch(e) {
        console.log(e)
        // next(err)
    }
})

}
module.exports = { users };
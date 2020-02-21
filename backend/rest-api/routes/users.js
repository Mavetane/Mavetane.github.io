const UsersModel = require("../models/users")

const users = (app) => {
app.get('/users', async(req, res) => {
    try{
        var users = await UsersModel.find()
        res.send(users)
    } catch(e) {
        console.log(e)
    }
})

app.post('/users', async(req, res) => {
    console.log(req.body.user)
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
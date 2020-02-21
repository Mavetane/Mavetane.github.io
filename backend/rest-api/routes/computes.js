const ComputerModel = require("../models/computes");

const computers = (app) => {
    app.get('/computers', async (req, res) => {
        try {
            const computers =  await ComputerModel.find();
            res.send(computers)
        } catch (e) {
            console.log(e);
        }
    })

    app.post('/computer', async (req, res) => {
        console.log('body ', req.body)
        var newComputer = new ComputerModel({ name: req.body.name })
        try {
            const dbResult = await newComputer.save();
            console.log(dbResult);
            res.sendStatus(201);
        } catch (e) {
            console.log(e)
        }
  
    })

    app.delete('/computers/:id', async (req, res,) => {
        try{
            const {id} = req.params;
            const success = await ComputerModel.remove({_id: id})
            // console.log(id)
                res.status(201).end();
        } catch(e){
            console.log(e)
        }
    })
}



module.exports = { computers };



const ComputerModel = require("../models/computes");

const computers = (app) => {
    app.get('/computers', async (req, res) => {
        try {
            const computers = await ComputerModel.find().skip(Number(req.query.skip))
                .limit(Number(req.query.limit));
            var paginatedComputers = computers

            const results = paginatedComputers.map(computer => {
                return {
                    id: computer._id,
                    name: computer.name,
                    date: computer.date
                }
            })
            res.send(results)
        } catch (e) {
            console.log(e);
        }
    })
   

    app.post('/computer', async (req, res) => {
        var compareName = await ComputerModel.find()
            for(var i in compareName) {
                if(req.body.name.toUpperCase().trim() == compareName[i].name.toUpperCase().trim()){
                    return res.status(400).json("Name already exist")
                }
                console.log("I'm compare name", compareName[i].name)
            }
            if(req.body.name == ""){
                return res.status(400).json("Input field is required")
            }
        var newComputer = new ComputerModel({ name: req.body.name })
        try {
            const dbResult = await newComputer.save();
            sanitizedComputers = {
                id: dbResult._id,
                name: dbResult.name,
                date: dbResult.date
            }
            console.log("SanitizedComputers", sanitizedComputers);
            res.status(201).send(sanitizedComputers)
        } catch (e) {
            console.log(e)
        }

    })

    app.delete('/computers/:id', async (req, res, ) => {
        try {
            const { id } = req.params;
            const success = await ComputerModel.remove({ _id: id })
            // console.log(id)
            res.status(201).end();
        } catch (e) {
            console.log(e)
        }
    })
}



module.exports = { computers };



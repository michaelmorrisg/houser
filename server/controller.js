module.exports = {
    getAllHouses: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_houses()
        .then(response=>res.status(200).send(response))
    },
    addHouse: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.add_house({
            name:req.body.name,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip})
        .then(response=>res.status(200).send(response))
    },
    deleteHouse: (req,res) =>{
        const dbInstance = req.app.get('db')

        dbInstance.delete_house(req.params.id)
        .then(response=>res.status(200).send(response))
    }
}
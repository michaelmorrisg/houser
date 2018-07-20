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
            zip:req.body.zip,
            image: req.body.image,
            monthlyMortgage: req.body.monthlyMortgage,
            desiredRent: req.body.desiredRent})
        .then(response=>res.status(200).send(response)).catch(err=>
        console.log(err))
    },
    deleteHouse: (req,res) =>{
        const dbInstance = req.app.get('db')

        dbInstance.delete_house(req.params.id)
        .then(response=>res.status(200).send(response))
    }
}
const db = require('../models')



// Find user_ state relations
const find = (req, res) => {
db.user_state.findAll({
    where: {
        userId: req.params.id
    }
}).then((returnedStates) => {
    // Validations and error handling here
    res.json(returnedStates)
})
}

// Create new User State
const create = (req, res) => {
    console.log(req.body)
    db.user_state.findOrCreate({
        where: {
            userId: req.body.userId,
            savedState: req.body.savedState
        }
    }).then(function (createdState) {
        res.json(createdState)
    })



    // // Delete a saved state
    // const destroy = (req, res) => {
    //     db.saved_state.destroy({
    //         where: {
    //             saved_stateId: req.params.id
    //         }
    //     }).then(() => {
    //         res.json({ message: `State with id ${req.params.id} has been deleted.` })
    //     })
    //         .catch(err => console.log("Error at userState#destroy", err))
    // }
}

module.exports = {
    find,
    create
    // index
    // destroy
}
const db = require('../models')


const index = (req, res) => {
    db.user.findAll().then((foundUsers) => {
        if (!foundUsers) return res.json({
            message: 'No users in db'
        })
        res.json({users: foundUsers})
    })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
}

const show = (req, res) => {
    db.user.findByPk(req.params.id).then((foundUser) => {
        if (!foundUser) return res.json({
            message: 'User with provided ID not found.'
        })
        
        res.json({user: foundUser})
    })
    .catch(err => console.log("Error at Users#index", err))
}

// Create new User State
const create = (req, res) => {
    console.log(req.body)
    db.user_benefit.findOrCreate({
        where: {
            benefitId: req.body.userBenefitData.id,
            userId: req.body.userId
        }
    }).then(function (createdBenefit) {
        res.json(createdBenefit)
    })
}



module.exports = {
    index,
    show,
    create
}
const db = require('../models')

const login = (req, res) => {
  res.json({ user: req.user.id })
}

const register = (req, res) => {
  const { firstName, lastName, email, password, currentState } = req.body

  // validate the POSTed data - making sure we have a name, an email, a pw
  if (!firstName || !lastName || !email || !password || !currentState) {
    return res.json({ message: 'Please enter a name, an email, a password, and the current state you live in.' })
  }


  // make sure the user doesn't already exist
  db.user.findOne({ where: { email } })
    .then(foundUser => {
      if (foundUser) {
        return res.json({ message: "A user with that email already exists" })
      }

      // if the user doesnt exist, create and save a user to the DB
      db.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        currentState: req.body.currentState,
      }).then(newUser => {
        console.log('New user created!')
        res.json(newUser)
      })
    })
}

const findUser = (req, res) => {
  db.user.findOne({
    where: {
      id: req.user.id
    }
  })
    .then(foundUser => {
      res.json(foundUser)
    })
}

const logout = (req, res) => {
  if (!req.user) {
    return res.json({ message: 'No User to log out' })
  }
  req.logout()
  res.json({ message: "User logged out" })
}

module.exports = {
  login,
  register,
  findUser,
  logout
}

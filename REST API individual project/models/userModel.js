const User = require('../schemas/userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth');
const { default: mongoose } = require('mongoose');

exports.addUser = async (req, res) => {
    const { firstName, lastName, password } = req.body;           

    if(!firstName || !lastName || !password ) {
        return res.status(400).json({
            message: 'You need to enter all the fields in order to add a user'
        })
    }


  const count = await User.count({ firstName: firstName, lastName: lastName })
  let suffix = ''
  if(count > 0) {
    suffix = count
  }

  const email = firstName + '.' + lastName + suffix + '@shop.se'

   
  const salt = await bcrypt.genSalt(15)
  const hash = await bcrypt.hash(password, salt)

  const _user = new User({ firstName, lastName, passwordHash: hash, email })
  const user = await _user.save()

  res.status(201).json(auth.generateToken(user))
}

exports.login = async (req, res) => {

    const { email, password } = req.body;

        if (!email || !password) {
          return res.status(400).json({
            message: 'You need to enter all the fields in order to login',
          })
        }


        const user = await User.findOne({ email })           

        if(!user) {                                     
            return res.status(401).json({
                message: 'Could not find your account, email or password is wrong!'
            })
        }

        const result = await bcrypt.compare(password, user.passwordHash) 

        if(!result) {
            return res.status(401).json({
              message: 'Could not find your account, email or password is wrong!',
            })
        }

        res.status(200).json(auth.generateToken(user))
}



exports.removeUser = async (req, res) => {

   const user = await User.findOneAndDelete({ _id: req.params.id })

   if(!user) {
    return res.status(404).json({
        message: 'Could not find the user'
    })
   }
   res.status(204).json()

}



exports.updateUser = async (req, res) => {

    const user = await User.findOne({ _id: req.params.id })
    if(!user) {
    return res.status(404).json({
        message: 'Could not find the user'
    })
   }

    user.firstName = req.body.firstName || user.firstName
    user.lastName = req.body.lastName || user.lastName

    const count = await User.count({ firstName: user.firstName, lastName: user.lastName })
     let suffix = ''
        if(count > 0) {
        suffix = count
     }
     user.email = user.firstName + '.' + user.lastName + suffix + '@shop.se'

     const updatedUser = await user.save()

     res.status(200).json(updatedUser)

   
}
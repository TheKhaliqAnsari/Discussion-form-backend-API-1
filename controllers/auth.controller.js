const User = require('../models/user.model')

exports.register = async(req, res, next) => {
   try{
    const userObj = await User.create(req.body);
    res.status(201).json({
        message: "User created successfully",
        data: {userObj}
    })
   }catch(error){
    if(error.code === 11000){
        res.status(409).json({
            message: "Username/email alreay taken"
        })
    }else{
        res.status(500).json({
            message:"Internal Server Error!!!"
        })
    }
   } 
}


exports.getAllUsers = async(req, res) => {
    const users = await User.find({});
    if(users.length > 0) {
        res.status(200).json(users);
    }else{
        res.status(400).json({
            message : "Users not found"
        })
    }
}

exports.getUserByUsername = async (req, res) => {
    try{
        const {userName} = req.params;
    const userObj = await User.find({username: userName})
    if(userObj.length > 0){
        res.status(200).json(userObj)
    }else{
        res.status(404).json({
            message: "Not found"
        })
    }
    }catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
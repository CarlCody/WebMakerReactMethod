const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model('UserModel', UserSchema);


UserModel.createUser = (user) => {
return UserModel.create(user);
}



//Find user by credentials
UserModel.findUserByCredentials = (username,password) => {
    return UserModel.findOne({username:username, password:password});
}

// Find user by username
UserModel.findUserByUsername = (username) =>{
   return UserModel.findOne({username:username});
}

//Find user by _id
UserModel.findUserById = (uid) => {
    return UserModel.findById(uid);
}

//Update user 
UserModel.updateUser = (user) => {
    console.log(user);
    return UserModel.updateOne({_id:user._id}, user);
}

module.exports = UserModel;

const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    
})


const User = model('user', userSchema);

module.exports = User;
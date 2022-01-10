const {Schema, model} = require('mongoose');



const ToDoSchema = new Schema({
 
    user:{type:Schema.Types.ObjectId, ref:"user"},

    todo:{type:String},
    date:{type: Date, default:Date.now()},
    description:{type: String},
    category: {
        type: String,
        enum: ['Daily','Urgent','Not Frequent'],
        default: 'Not Frequent'
    },
    
})


const Todo = model('todo', ToDoSchema);

module.exports = Todo;
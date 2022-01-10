const express = require('express');
const Todo = require('../model/ToDoModel');


const router = express.Router();

router.post("/create", async (req, res) => {
    const { body } = req;
  
    try {
      
  
      
      const todo = await Todo.create({
        user:body.user,
        todo: body.todo,
        category: body.category,
        description: body.description,
      });   
      res.status(200).json(todo);
    } catch (error) {
      return res.send(error);
   
    }
  
    
});


router.get("/alltodos", async (req, res) => {
    
  
    try {
      
      const todo = await Todo.find();   
      res.status(200).json(todo);
    } catch (error) {
      return res.send(error);
   
    }
  
    
});


router.delete("/delete/:id", async (req, res) => {
    
    
  
    try {
      
      const todo = await Todo.findByIdAndDelete(req.params.id);   
      res.status(200).json(todo);
    } catch (error) {
      return res.send(error);
   
    }
  
    
});

/* create message delete */



module.exports = router;
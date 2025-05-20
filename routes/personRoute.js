const express = require('express');
const router = express.Router();
const Person = require('./../models/personSchema')

// Save data in database
router.post('/', async(req,res) => {
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error : "Internal servrer error"})
    }
})

// Get or fetch data from database
router.get('/', async(req,res) => {
    try{
        const response = await Person.find();
        console.log("data fetched")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error : "Internal servrer error"})
    }
})

// Fetch data of particular work (Paramaterized API)
router.get('/:worktype', async(req,res) => {
    try{
        const worktype = req.params.worktype;
        if(worktype == 'developer' || worktype == 'tester' || worktype == 'manager'){
            const response = await Person.find({work : worktype});
            console.log("data fetched")
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error : "Invalid work type"})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error : "Internal servrer error"})
    }
})

//Update data from databse
router.put('/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const data  = req.body;
        const response = await Person.findByIdAndUpdate(id, data, {
            new : true,
            runValidators : true,
        })
        if(!response){
            res.status(404).json({error : "Data not found"})
        }
        console.log("data updated")
        res.status(200).json(response)
        }
        catch(err){
            console.log(err)
            res.status(500).json({error : "Internal servrer error"})


        }
})

//delete data from database
router.delete('/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if(!response){
            res.status(404).json({error : "Data not found"})
        }
        console.log("data deleted")
        res.status(200).json(response)
        }
        catch(err){
            console.log(err)
            res.status(500).json({error : "Internal servrer error"})

    }
})

module.exports = router
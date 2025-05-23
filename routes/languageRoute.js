const express = require('express')
const router = express.Router();
const Language = require('./../models/languageSchema')

router.post('/', async(req,res) => {
    try{
        const data = req.body;
        const newLanguage = new Language(data);
        const response = await newLanguage.save();
        console.log('data saved')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    }
})

router.get('/', async(req,res) => {
    try{
        const data  = await Language.find();
        console.log('data fetched')
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    }
})

router.get('/:languag', async(req,res) => {
    try{
        const id = req.params.languag;
        if(id == 'python' || id == 'javascript' || id == 'c++' || id == 'java'){
            const data  = await Language.find({name : id});
            console.log('data fetched')
            res.status(200).json(data)
        }
        else{
            res.status(404).json({error : "Data not found"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    }
})


router.put('/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const data  = req.body;
        const response = await Language.findByIdAndUpdate(id, data, {
            new : true,
            runValidators : true,
        })
        if(!response){
            res.status(404).json({error : "Data not found"})
        }
        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    }
})  

router.delete('/id', async(req,res) => {
    try{
        const id = req.params.id;
        const response = await Language.findByIdAndDelete(id);
        if(!response){
            res.status(404).json({error : "Data not found"})
        }
        console.log('data deleted')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);   
        res.status(500).json({error : "Internal server error"})
    }
})  

module.exports = router
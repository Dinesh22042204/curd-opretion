const express = require('express')
const router = express.Router()
const Alien =  require('../models/alien')
const { ObjectId } = require('mongodb')

router.get('/', async function (req,res) {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    }
     catch(err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async function (req,res) {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }
     catch(err) {
        res.send('Error' + err)
    }
})

router.post('/', async function (req,res) {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
       const a1 = await alien.save()
       res.json(a1)
    } catch (err) {
        res.send('Error', err)
    }
})

router.patch('/:id', async function (req,res){
    try{  
      const alien = await Alien.findById(req.params.id)
      alien.name = req.body.name
      alien.tech= req.body.tech
      alien.sub = req.body.sub
      const a1 = await alien.save()
      res.json(a1)
    } catch (err){
        res.send('Error')
    }
})

router.delete('/:id', async function (req,res) {
    try {
        const aliens = await Alien.deleteOne({_id:new ObjectId(req.params.id)})
        res.json(aliens)
    }
     catch(err) {
        res.send('Error' + err)
    }
})


module.exports = router
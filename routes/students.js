const express = require('express')
const router = express.Router()
const Student =  require('../models/student')
const { ObjectId } = require('mongodb')

router.get('/all', async function (req,res) {
    try {
        const students = await Student.find()
        res.json(students)
    }
     catch(err) {
        res.send('Error' + err)
    }
})


router.get('/:fatherName/:motherName', async function (req,res) {
    try {
        const student = await Student.find({fatherName:req.params.fatherName,motherName:req.params.motherName})
        console.log(student)
        if(student.length<=0){
            return res.send("Data is Not Exist with this NAME")
          }
        res.json(student)
    }
     catch(err) {
        res.send('Error' + err)
    }
})


router.post('/add-student', async function (req,res) {
    const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        class : req.body.class,
        E_mail: req.body.E_mail,
        address: req.body.address
        
  })
    try{
       const a1 = await student.save()
       res.json(a1)
    } catch (err) {
        res.send('Error', err)
    }
})

router.patch('/:id', async function (req,res){
    try{
      const student = await Student.findById(new ObjectId(req.params.id))
      if(!student){
        return res.send("Data is Not Exist with this ID")
      }
      student.firstName= req.body.firstName
      const a1 = await student.save()
      res.json(a1)
    } catch (err){
        res.send('Error', err)
    }
})

router.delete('/:id', async function (req,res) {
    try {
        const student = await Student.findById(new ObjectId(req.params.id))
        if(!student){
          return res.send("Data is Not Exist with this ID")
        }
        res.json(await Student.deleteOne({_id:new ObjectId(req.params.id )}))
    }
     catch(err) {
        res.send('Error' + err)
    }
})


module.exports = router

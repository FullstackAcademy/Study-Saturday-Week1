// const express = require('express');
// const router = express.Router();

const router = require('express').Router();

let student = [
  {
    id: 1,
    name: 'Dan'
  },
  {
    id: 2,
    name: 'Karen'
  },
  {
    id: 3,
    name: 'Danielle'
  },
  {
    id: 4,
    name: 'Bob'
  }
]

router.get('/', (req, res, next) => {
  res.json(student)
})

router.get('/:id', (req, res) => {
  res.send(student.find(s => s.id == req.params.id))
  //try using filter
});


router.post('/', (req,res,next) => {
  const newStudent = req.body;
  student.push(newStudent);
  res.send(student);
});

router.put('/', (req, res, next) => {
  const updatedStudent = req.body;
  const updateStudent = student.find(s => s.id == req.params.id)
  updatedStudent.name = req.body.name;
  res.send(student);
});

router.delete('/id:', (req,res,next) => {
  let deltedStudentId = +req.params.id;
  students.filter(student => student.id != deltedStudentId);
  res.send(student);
});

module.exports = router;

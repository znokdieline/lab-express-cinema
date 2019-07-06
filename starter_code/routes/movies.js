

const express = require('express');
// const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', (req, res, next) => {
 Movie.find({},'title image')
   .then(data =>{
     res.status(200).json(data)
 })
   .catch(err => {
     res.status(500).json({
       text:'error del servidor',
       err:err
     })
   })
});
 


router.get('/:id/',(req, res, next) =>{
        Movie.findById(req.params.id).then(resultado => {
            res.json(resultado)
        })
})


router.post('/', (req,res,next) => {
  let titulo = req.body.titulo;
  let foto = req.body.foto;

  if (titulo !== null && foto !== null) {
    Movie.create({title: titulo, image: foto})
  .then((movie) => {
    res.status(200).json({
      text: 'ok'
    })
  }).catch(err => {
    res.status(500)({
      text: 'error',
      err
    })
  })
  }
  res.status(500).json({
    text: 'error faltandatos',
  })
})


module.exports = router;






// const router = express.Router();

// router.get('/', req, res, next) => {
//     Movie.find({},'title image')
//     .then(data => {
//         res.status(200).json({
            
//         })
//     })
// }

// // router.get('/', (req, res, next) => {
// //     Movie.find({},{
// //         title:1,
// //         image:1,

// //     })
// //     .then(result =>{
// //         console.log(result)
// //         res.json(result);
// //     })
// // });
// router.get('/:id/',(req, res, next) =>{
//     Movie.findById({
//         _id:req.params,_id
//     }).then(resultado => {
//         res.json(resultado)
//     })
// })

// // router.get('/porn', (req, res, next) => {
// //     res.json({
// //         texto: 'pinche enfermo'
// //     })
// // });

// module.exports = router;





   

const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const Country = require('../models/Country')




router.delete('/random/:deleteId', (req, res, next)=>{
  console.log('DELETE RANDOM', req.params)
  Country.remove({_id:req.params.deleteId}).then(deletedThing=>{
    console.log('deleted', deletedThing)
    res.json({deleted:deletedThing})
  })
})


router.get('/random', (req, res, next) => {
  Country.find().then(allCountries => {
    let countriesFromDb = allCountries[Math.floor(Math.random()*allCountries.length)]
    console.log(3214567, countriesFromDb)
    // res.render("random.hbs", { data: data})
    res.json({
      countriesFromDb
    })
  })


})


router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

module.exports = router;

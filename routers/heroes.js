/* Heroes router - API for all things Superhero. */

var express = require('express');
var router = express.Router();

// require the hero Model
var hero = require('../models/heroModel');

router.get('/test', function(req, res) {
  var dummyHero = new Hero({
    alias: "Superman",
    first_name: "Clark",
    last_name: "Kent",
    city: "Krypton",
    power_name: "Flying"
  });

  dummyHero.save(function(err) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      // created
      res.sendStatus(201);
    }
  }); //end of save
}); //end of test get

/* Gets all heroes */
router.get('/', function(req, res) {
  console.log('in heroes get');
  Hero.find({}, function(err, foundPets) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(foundPets);
    }
  }); //end of find
}); //end of get

router.post('/', function(req, res) {
  console.log('in heroes post');
  console.log('req.body=', req.body);

  var hero = req.body;

  var addHero = new Hero({
    alias: hero.alias,
    first_name: hero.first_name,
    last_name: hero.last_name,
    city: hero.city,
    power_name: hero.power_name
});

  addHero.save(function(err) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.sendStatus(201);
    }
  }); //end of save
}); //end of post

router.delete('/:id', function(req, res) {
    console.log("params = ", req.params);
    Hero.remove({"_id": req.params.id}, function(err) {
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500);
      }else{
        console.log('removed=', req.params.id);
        res.sendStatus(200);
      }
    });
});

module.exports = router;

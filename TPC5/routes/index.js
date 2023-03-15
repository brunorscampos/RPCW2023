var express = require('express');
var router = express.Router();
var Task = require('../controllers/task')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Task.list()
    .then(tasks => {
      res.render('index', { toDo : tasks.toDo, completed : tasks.completed, d : data });
    })
    .catch(erro => {
      res.render('error', {error : erro})
    })
})

/* POST Tasks Data */

router.post('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  if(req.body._method == "ADD"){
    Task.addTask(req.body.dateDued, req.body.who, req.body.what)
      .then(tasks => {
        res.render('index', { toDo : tasks.toDo, completed : tasks.completed, d : data });
      })
      .catch(erro => {
        res.render('error', {error : erro})
      })
  } else if(req.body._method == "DELETE"){
    Task.deleteTask(req.body.db,req.body.id)
      .then(tasks => {
        res.render('index', { toDo : tasks.toDo, completed : tasks.completed, d : data });
      })
      .catch(erro => {
        res.render('error', {error : erro})
      })
  } else if(req.body._method == "CHECK"){
    Task.checkTask(req.body.id, req.body.dateDued, req.body.who, req.body.what)
      .then(tasks => {
        res.render('index', { toDo : tasks.toDo, completed : tasks.completed, d : data });
      })
      .catch(erro => {
        res.render('error', {error : erro})
      })
  } else if(req.body._method == "PUT"){
    Task.editTask(req.body.db, req.body.id, req.body.dateDued, req.body.who, req.body.what)
      .then(tasks => {
        res.render('index', { toDo : tasks.toDo, completed : tasks.completed, d : data });
      })
      .catch(erro => {
        res.render('error', {error : erro})
      })
  }
})

module.exports = router;

var express = require('express');
var router = express.Router();
var Pessoa = require('../controllers/pessoa')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  res.render('index', { d: data })
});

router.get('/pessoas', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.list()
    .then(lista => {
      res.render('pessoasPage', { lista: lista, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de pessoa"})
    })
});

router.get('/distrib_sex', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.list()
    .then(pessoas => {
      var sexos = [...new Set(pessoas.map(p => p.sexo))].sort((s1,s2) => s1 < s2 ? -1 : 1)
      res.render('distribSexPage', { sexos: sexos, pessoas: pessoas, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de pessoa"})
    })
});

router.get('/distrib_sport', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.list()
    .then(pessoas => {
      var allDesportos = pessoas.map(p => p.desportos).flat()
      var desportos = [...new Set(pessoas.map(p => p.desportos).flat())].sort((d1,d2) => allDesportos.filter(d => d == d1).length < allDesportos.filter(d => d == d2).length ? 1 : -1)
      res.render('distribSportPage', { desportos: desportos, pessoas: pessoas, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de pessoa"})
    })
});

router.get('/top10jobs', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.list()
    .then(pessoas => {
      var allJobs = pessoas.map(p => p.profissao)
      var top10jobs = [...new Set(allJobs)].sort((j1,j2) => allJobs.filter(j => j == j1).length < allJobs.filter(j => j == j2).length ? 1 : -1).slice(0, 10)
      res.render('top10jobsPage', { top10jobs: top10jobs, pessoas: pessoas, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de pessoa"})
    })
});

router.get('/pessoas/:idPessoa', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.getPessoa(req.params.idPessoa)
    .then(pessoa => {
      pessoa.
      res.render('infoPage', { pessoa: pessoa._doc, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de pessoa"})
    })
});

module.exports = router;


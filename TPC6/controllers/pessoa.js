var Pessoa = require('../models/pessoa')

// Pessoa list
module.exports.list = () => {
    return Pessoa.pessoaModel.find().sort({nome:1})
        .then(docs => {
            return docs
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getPessoa = id => {
    return Pessoa.pessoaModel.findOne({id:id})
        .then(pessoa => {
            return pessoa
        })
        .catch(erro => {
            return erro
        })
}
var axios = require('axios')

function mainPage(){
    return axios.all([
        axios.get("http://localhost:3000/toDo"),
        axios.get("http://localhost:3000/completed")
    ])  .then(axios.spread((res1, res2) => {
            toDo = res1.data
            completed = res2.data
            return {toDo, completed}
        }))
        .catch(erro => {
            return erro
        })
}

module.exports.list = () => {
    return mainPage()
}

module.exports.addTask = (dateDued, who, what) => {
    axios.post('http://localhost:3000/toDo', {
        dateDued: dateDued,
        who: who,
        what: what
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    return mainPage()
}

module.exports.checkTask = (id, dateDued, who, what) => {
    axios.delete('http://localhost:3000/toDo/'+ id)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    axios.post('http://localhost:3000/completed', {
        dateDued: dateDued,
        who: who,
        what: what
      })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    return mainPage()
}

module.exports.editTask = (db, id, dateDued, who, what) => {
    axios.put('http://localhost:3000/' + db + '/' + id, {
        dateDued: dateDued,
        who: who,
        what: what
    })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    return mainPage()
}

module.exports.deleteTask = (db, id) => {
    axios.delete('http://localhost:3000/' + db + '/'+ id)
        .then(response => {
            console.log(response)
            })
        .catch(error => {
            console.log(error)
        })
    return mainPage()
}
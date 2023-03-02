exports.indexPage = function(){
    var pagina_html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>About People</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Index</h1>
                </header>
        
                <div class="w3-container">
                    <ul class="w3-ul w3-hoverable">
                        <li><a href="/pessoas" class="w3-button">Lista de Individuos</a></li>
                        <li><a href="/distrib_sex" class="w3-button">Distribuição por Sexo</a></li>
                        <li><a href="/distrib_sport" class="w3-button">Distribuição por Desporto</a></li>
                        <li><a href="/top10jobs" class="w3-button">Top10 Profissões</a></li>
                    </ul>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW2023</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagina_html   
}

exports.pessoasPage = function(lista){
    var pagina_html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Lista de Pessoas</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de Pessoas</h1>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all w3-hoverable">
                        <thead>
                        <tr >
                            <th>ID</th><th>Nome</th><th>Idade</th><th>Sexo</th><th>Cidade</th>
                        </tr>
                        </thead>
        `

    for(let i = 0;i<lista.length;i++){
        pagina_html += `
                        <tr class="clickable" onclick="window.location='${lista[i].id}'" style="cursor:pointer;">
                            <td>${lista[i].id}</td><td>${lista[i].nome}</td><td>${lista[i].idade}</td><td>${lista[i].sexo}</td><td>${lista[i].morada.cidade}</td>
                        </tr>
        `
    }

    pagina_html += `
                    </table>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW2023</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagina_html   
}

exports.distribSexPage = function(pessoas,sexos){
    var pagina_html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Distribuição por Sexo</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Distribuição por Sexo</h1>
                </header>
                <div class="w3-row">
                    <div class="w3-col m3 l2" style="position:sticky;top:0;">
                        <h2 style="margin:5px;">Sexos</h2>
                        <ul class="w3-ul w3-hoverable">
        `

        for(let i = 0;i<sexos.length;i++){
            let num = pessoas.filter(p => p.sexo == sexos[i]).length
            pagina_html += `
                            <li><a href="#${sexos[i]}" class="w3-button">${sexos[i]} (${num})</a></li>
            `
        }

        pagina_html += `
                        </ul>
                    </div>
                    <div class="w3-col m9 l10">
                        <div class="w3-container">
        `

    for(let i = 0;i<sexos.length;i++){
        let sexo = sexos[i]
        let pessoas_sexo = pessoas.filter(p => p.sexo == sexo).sort((p1,p2) => p1.nome < p2.nome ? -1 : 1)

        pagina_html += `
                            <a name="${sexo}"/>
                            <h2>${sexo.charAt(0).toUpperCase() + sexo.slice(1)}</h2>
                            <table class="w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>ID</th><th>Nome</th><th>Idade</th><th>Sexo</th><th>Cidade</th>
                                </tr>
                            </thead>
        `

        for(let i = 0;i<pessoas_sexo.length;i++){
            pagina_html += `
                                <tr class="clickable" onclick="window.location='${pessoas_sexo[i].id}'" style="cursor:pointer;">
                                    <td>${pessoas_sexo[i].id}</td><td>${pessoas_sexo[i].nome}</td><td>${pessoas_sexo[i].idade}</td><td>${pessoas_sexo[i].sexo}</td><td>${pessoas_sexo[i].morada.cidade}</td>
                                </tr>
            `
        }

        pagina_html += `
                            </table>
        `
    }

    pagina_html += `
                        </div>
                    </div>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW2023</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagina_html   
}

exports.distribSportPage = function(pessoas,desportos){
    var pagina_html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Distribuição por Desporto</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Distribuição por Desporto</h1>
                </header>

                <div class="w3-row">
                    <div class="w3-col m4 l3" style="position:sticky;top:11vh;">
                        <h2 style="margin:5px;">Desportos</h2>
                        <ul class="w3-ul w3-hoverable" style="height:81vh;overflow:auto;">
        `

        for(let i = 0;i<desportos.length;i++){
            let num = pessoas.filter(p => p.desportos.includes(desportos[i])).length
            pagina_html += `
                            <li><a href="#${desportos[i]}" class="w3-button">${desportos[i]} (${num})</a></li>
            `
        }

        pagina_html += `
                        </ul>
                    </div>
                    <div class="w3-col m8 l9">
                    <div class="w3-container">
                    `
            
                for(let i = 0;i<desportos.length;i++){
                    let desporto = desportos[i]
                    let pessoas_desporto = pessoas.filter(p => p.desportos.includes(desporto)).sort((p1,p2) => p1.nome < p2.nome ? -1 : 1)
            
                    pagina_html += `
                                        <a name="${desporto}"/>
                                        <h2>${desporto.charAt(0).toUpperCase() + desporto.slice(1)}</h2>
                                        <table class="w3-table-all w3-hoverable">
                                        <thead>
                                            <tr>
                                                <th>ID</th><th>Nome</th><th>Idade</th><th>Sexo</th><th>Cidade</th>
                                            </tr>
                                        </thead>
                    `
            
                    for(let i = 0;i<pessoas_desporto.length;i++){
                        pagina_html += `
                                            <tr class="clickable" onclick="window.location='${pessoas_desporto[i].id}'" style="cursor:pointer;">
                                                <td>${pessoas_desporto[i].id}</td><td>${pessoas_desporto[i].nome}</td><td>${pessoas_desporto[i].idade}</td><td>${pessoas_desporto[i].sexo}</td><td>${pessoas_desporto[i].morada.cidade}</td>
                                            </tr>
                        `
                    }
            
                    pagina_html += `
                                        </table>
                    `
                }
            
                pagina_html += `
                        </div>
                    </div>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW2023</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagina_html   
}

exports.top10jobsPage = function(pessoas,top10jobs){
    var pagina_html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Top10 Profissões</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Top10 Profissões</h1>
                    </header>

                    <div class="w3-row">
                        <div class="w3-col m5 l4" style="position:sticky;top:11vh;">
                            <h2 style="margin:5px;">Profissões</h2>
                            <ul class="w3-ul w3-hoverable" style="height:81vh;overflow:auto;">
            `
    
            for(let i = 0;i<top10jobs.length;i++){
                let num = pessoas.filter(p => p.profissao == top10jobs[i]).length
                pagina_html += `
                                <li><a href="#${top10jobs[i]}" class="w3-button">${top10jobs[i]} (${num})</a></li>
                `
            }
    
            pagina_html += `
                            </ul>
                        </div>
                        <div class="w3-col m7 l8">
                        <div class="w3-container">
                    `
            
                for(let i = 0;i<top10jobs.length;i++){
                    let job = top10jobs[i]
                    let pessoas_job = pessoas.filter(p => p.profissao == job).sort((p1,p2) => p1.nome < p2.nome ? -1 : 1)
            
                    pagina_html += `
                                        <a name="${job}"/>
                                        <h2>${job.charAt(0).toUpperCase() + job.slice(1)}</h2>
                                        <table class="w3-table-all w3-hoverable">
                                        <thead>
                                            <tr>
                                                <th>ID</th><th>Nome</th><th>Idade</th><th>Sexo</th><th>Cidade</th>
                                            </tr>
                                        </thead>
                    `
            
                    for(let i = 0;i<pessoas_job.length;i++){
                        pagina_html += `
                                            <tr class="clickable" onclick="window.location='${pessoas_job[i].id}'" style="cursor:pointer;">
                                                <td>${pessoas_job[i].id}</td><td>${pessoas_job[i].nome}</td><td>${pessoas_job[i].idade}</td><td>${pessoas_job[i].sexo}</td><td>${pessoas_job[i].morada.cidade}</td>
                                            </tr>
                        `
                    }
            
                    pagina_html += `
                                        </table>
                    `
                }
            
                pagina_html += `
                        </div>
                    </div>
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW2023</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagina_html   
}

exports.infoPage = function(pessoa){
    var pagina_html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Informações</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Informações</h1>
                </header>
        
                <div class="w3-container">
    `
    let chaves = Object.keys(pessoa)

    for(let i = 0;i<chaves.length;i++){
        if(Array.isArray(pessoa[chaves[i]])){
            pagina_html += `
            <p><b>${chaves[i]}</b></p>
            <ul>
            `
            for(let j = 0;j<pessoa[chaves[i]].length;j++){
                pagina_html += `
                    <li><p>${pessoa[chaves[i]][j]} </p></li>
                `
            }
            pagina_html += `
            </ul>
            `
        }else if (typeof pessoa[chaves[i]] == 'object'){
            let at_keys = Object.keys(pessoa[chaves[i]])
            pagina_html += `
            <p><b>${chaves[i]}</b></p>
            <ul>
            `
            for(let j = 0;j<at_keys.length;j++){
                pagina_html += `
                    <li><p><b>${at_keys[j]}: </b> ${pessoa[chaves[i]][at_keys[j]]} </p></li>
                `
            }
            pagina_html += `
            </ul>
            `
        }else{
            pagina_html += `
            <p><b>${chaves[i]}: </b> ${pessoa[chaves[i]]} </p>
            `
        }
    }

    pagina_html += `
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW2023</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagina_html   
}
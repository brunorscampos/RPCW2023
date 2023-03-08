const exp = require("constants")

exports.toDoListPage = function(toDo, completed, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html >
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="jcr-favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <title>Todo List</title>
            <script>
            function showHide(db,id) {
              var x = document.getElementById(db + '_edit');
              var y = document.getElementById(db + '_edit_id');
              if (x.style.display === "none") {
                x.style.display = "block";
                y.value = id;
              } else if (y.value != id){
                x.style.display = "none";
                setTimeout(function(){ 
                    showHide(db,id)
                }, 200);  
              }
              else {
                x.style.display = "none";
              }
            }
            </script>
        </head>
        <body >
            <div class="w3-card-4" >
                <header class="w3-container w3-teal">
                    <h1>Todo List</h1>
                </header>
                <div class="w3-container">
                    <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Task:</legend>
                            <div class="w3-row-padding">
                                <div class="w3-third">
                                    <label>DateDued</label>
                                    <input class="w3-input w3-round" type="date" name="dateDued">
                                </div>
                                <div class="w3-third">
                                    <label>Who</label>
                                    <input class="w3-input w3-round" type="text" name="who">
                                </div>
                                <div class="w3-third">
                                    <button class="w3-btn w3-yellow w3-border w3-border-black" type="submit">Add</button>
                                </div>
                            </div>
                            <label>What</label>
                            <input class="w3-input w3-round" type="text" name="what">
                        </fieldset>
                        <br/>
                    </form>
                </div>

                <div class="w3-row" >
                    <div class="w3-col s6" style="height:53vh;overflow:auto;">
                        <div class="w3-bar" id="toDo_edit" style="display:none;">
                            <form class="w3-container w3-bar-item" method="POST" style="padding:0px">
                                <input type="hidden" name="_method" value="PUT">
                                <input type="hidden" name="db" value="toDo">
                                <input type="hidden" name="id" value="-1" id="toDo_edit_id">
                                <div class="w3-row-padding">
                                    <div class="w3-third">
                                        <label>DateDued</label>
                                        <input class="w3-input w3-round" type="date" name="dateDued">
                                    </div>
                                    <div class="w3-third">
                                        <label>Who</label>
                                        <input class="w3-input w3-round" type="text" name="who">
                                    </div>
                                    <div class="w3-third">
                                        <button class="w3-btn w3-yellow w3-small w3-padding-small w3-border w3-border-black" type="submit">Update</button>
                                    </div>
                                </div>
                                <div class="w3-row-padding" style="padding-bottom:3px;">
                                    <label>What</label>
                                    <input class="w3-input w3-round" type="text" name="what">
                                </div>
                            </form>
                        </div>
                        <table class="w3-table-all" >
                            <tr>
                                <th>DateDued</th><th>Who</th><th>What</th><th>Actions</th>
                            </tr>
            `
    for(let i=0; i < toDo.length ; i++){
        pagHTML += `
            <tr>
                <td>${toDo[i].dateDued}</td><td>${toDo[i].who}</td><td style="width:50%;">${toDo[i].what}</td>
                <td>
                <div class="w3-bar">
                    <button class="w3-btn w3-yellow w3-tiny w3-padding-small w3-bar-item w3-border w3-border-black" onclick="showHide('toDo','${toDo[i].id}')">Edit</button>
                    <form class="w3-container w3-bar-item" method="POST" style="padding:0px">
                        <input type="hidden" name="_method" value="DELETE">
                        <input type="hidden" name="db" value="toDo">
                        <input type="hidden" name="id" value="${toDo[i].id}">
                        <button class="w3-btn w3-yellow w3-tiny w3-padding-small w3-border w3-border-black" type="submit">Delete</button>
                    </form>
                    <form class="w3-container w3-bar-item" method="POST" style="padding:0px">
                        <input type="hidden" name="_method" value="CHECK">
                        <input type="hidden" name="db" value="toDo">
                        <input type="hidden" name="id" value="${toDo[i].id}">
                        <input type="hidden" name="dateDued" value="${toDo[i].dateDued}">
                        <input type="hidden" name="who" value="${toDo[i].who}">
                        <input type="hidden" name="what" value="${toDo[i].what}">
                        <button class="w3-btn w3-yellow w3-tiny w3-padding-small w3-border w3-border-black" type="submit">Check</button>
                    </form>
                </div>
                </td>
            </tr>
    `
}

    pagHTML += `
        </table>
                    </div>
                    <div class="w3-col s6" style="height:53vh;overflow:auto;">
                    <div class="w3-bar" id="completed_edit" style="display:none;">
                    <form class="w3-container w3-bar-item" method="POST" style="padding:0px">
                        <input type="hidden" name="_method" value="PUT">
                        <input type="hidden" name="db" value="completed">
                        <input type="hidden" name="id" value="-1" id="completed_edit_id">
                        <div class="w3-row-padding">
                        <div class="w3-third">
                            <label>DateDued</label>
                            <input class="w3-input w3-round" type="date" name="dateDued">
                        </div>
                        <div class="w3-third">
                            <label>Who</label>
                            <input class="w3-input w3-round" type="text" name="who">
                        </div>
                        <div class="w3-third">
                            <button class="w3-btn w3-yellow w3-small w3-padding-small w3-border w3-border-black" type="submit">Update</button>
                        </div>
                        </div>
                        <div class="w3-row-padding" style="padding-bottom:3px;">
                        <label>What</label>
                        <input class="w3-input w3-round" type="text" name="what">
                        </div>
                    </form>
                </div>
                    <table class="w3-table-all">
                    <tr>
                        <th>DateDued</th><th>Who</th><th>What</th><th>Actions</th>
                    </tr>
            `
    for(let i=0; i < completed.length ; i++){
        pagHTML += `
            <tr>
                <td>${completed[i].dateDued}</td><td>${completed[i].who}</td><td style="width:50%;">${completed[i].what}</td>
                <td>
                <div class="w3-bar">
                <button class="w3-btn w3-yellow w3-tiny w3-padding-small w3-bar-item w3-border w3-border-black" onclick="showHide('completed','${completed[i].id}')">Edit</button>
                <form class="w3-container w3-bar-item" method="POST" style="padding:0px">
                    <input type="hidden" name="_method" value="DELETE">
                    <input type="hidden" name="db" value="completed">
                    <input type="hidden" name="id" value="${completed[i].id}">
                    <button class="w3-btn w3-yellow w3-tiny w3-padding-small w3-border w3-border-black" type="submit">Delete</button>
                </form>
                </div>
                </td>
            </tr>
    `
}

    pagHTML += `
        </table>
                    </div>
                </div>
                <footer class="w3-container w3-blue w3-center w3-bottom">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

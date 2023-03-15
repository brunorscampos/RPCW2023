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
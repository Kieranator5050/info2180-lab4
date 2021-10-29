//Kieran Jaggernauth
"use strict"
$(document).ready(function() {
  //console.log("Doc loaded");
  $('#sBtn').click(function(){
    //console.log("Clicked");
  fetch('./superheroes.php')
    .then(response => response.text())
    .then(data => {
      alert(data);
    })
    .catch(err => console.error(err))
  });
});

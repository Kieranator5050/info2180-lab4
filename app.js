//Kieran Jaggernauth
"use strict"
$(document).ready(function() {
  //console.log("Doc loaded");
  $('#sBtn').click(function(){
    //console.log("Clicked");
    //Sanitizing input
    let inputTxt = $('#tInput').val().trim().replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
    //console.log(inputTxt);
    $('#result').html("");
    //console.log(
    fetch(`./superheroes.php?query=${inputTxt}`)
      .then(response => response.text())
      .then(data => {
        $('#result').append(data);
      })
      .catch(err => console.error(err))
    //);
  });
});

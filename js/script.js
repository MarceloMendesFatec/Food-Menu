$("#phone").mask("(99) 99999-9999");


var inputNome = document.querySelector("#name1");
name1.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
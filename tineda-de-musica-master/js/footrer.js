$(document).ready(function() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('footer-pag').outerHTML
        =this.responseText;
    }
  }
  
  xhttp.open('GET','footer-pag.html', true);
  xhttp.send();

})


var btn=document.getElementById('bt');
btn.onclick=function(){
var reqobj= new new XMLHttpRequest();
reqobj.onreadystatechange = function() {
    //if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
       // Typical action to be performed when the document is ready:
       console.log(reqobj.responseText.toString());
       document.getElementById('c').innerHTML = reqobj.responseText.toString();
    }
};
};
reqobj.open("GET", "http://ruchitesh22.imad.hasura-app.io/ruchitesh", true);
reqobj.send(null);
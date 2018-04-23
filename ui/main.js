

var btn=document.getElementById('bt');
btn.onclick=function(){
var reqobj=new XMLHttpRequest();
console.log('hello');
reqobj.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) 
    {
       // Typical action to be performed when the document is ready:
       console.log(reqobj.responseText.toString());
       document.getElementById('c').innerHTML = reqobj.responseText.toString();
    }
    
};
reqobj.open("GET", "http://ruchitesh22.imad.hasura-app.io/ruchitesh", true);
reqobj.send(null);
};

var reqobj= new new XMLHttpRequest();
reqobj.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("c").innerHTML = reqobj.responseText;
    }
};
xhttp.open("GET", "https://imad.hasura.io/ruchitesh", true);
xhttp.send();
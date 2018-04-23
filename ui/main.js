console.log('Loaded!');
var data=document.getElementById('special');
data.innerHTML='My New Data';
var img=document.getElementById('myimg');
img.onclick=function(){
    console.log('Hello');
    img.style.marginLeft='100px';
};
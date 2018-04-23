console.log('Loaded!');
var data=document.getElementById('special');
data.innerHTML='My New Data';
var img=document.getElementById('myimg');
img.onclick=function(){
    console.log('Hello');
    img.style.marginLeft='100px';
};
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
var interval=setInterval(moveRight,100);
};

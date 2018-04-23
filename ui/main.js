console.log('Loaded!');
var data=document.getElementById('special');
data.innerHTML='My New Data';
var img=document.getElementById('myimg');
img.onclick=function(){
    console.log('Hello');
    img.style.marginLeft='100px';
};
var marginLeft=0;
var counter=0;
function moveRight(){
    counter=counter+1;
    if(counter%2===0)
   { marginLeft=marginLeft+50;
    img.style.marginLeft=marginLeft+'px';
   }
   else
   {
     marginLeft=marginLeft+50;
    img.style.marginRight=marginLeft+'px';   
   }
}
img.onclick=function(){
var interval=setInterval(moveRight,100);
};

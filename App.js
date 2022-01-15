//selecton
var hour= document.querySelector('.hour-valu');
var minute= document.querySelector('.minute-valu');
var second= document.querySelector('.seconds-valu');

//clock

function clock(){

      let date= new Date();
      let hour_valu   = date.getHours();
     let minute_valu = date.getMinutes();
     let second_valu = date.getSeconds() ;
    
     hour.innerText = hour_valu ;
     minute.innerText = minute_valu ;
    second.innerText = second_valu ;
   
}
setInterval(clock,1000);



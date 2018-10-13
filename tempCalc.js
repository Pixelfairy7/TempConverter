
//Farenheit entered by user 
document.getElementById('farenheitIn').addEventListener('input',
function(e){
    
    let far = e.target.value;
    //celsius formula 
    document.getElementById('celsiusOut').innerHTML = ((far -32) *1.8);
    //farenheit stays same 
    document.getElementById('farenOut').innerHTML = (far);
    //farenheit to Kelvin formula
    document.getElementById('kelvinOut').innerHTML = ( (far -32) * 5/9 +273.15);



 })

 //celsius entered by user 

 document.getElementById('celsiusIn').addEventListener('input',
function(e){
    
    let cel = e.target.value;
    //farenheit formula F * 9/5 + 32
    document.getElementById('farenOut').innerHTML = (cel *9/5) +32;
    //celsius remains same 
    document.getElementById('celsiusOut').innerHTML = (cel);
    //kelvin formula  C + 273.15
    document.getElementById('kelvinOut').innerHTML =  ( (cel*1) + 273.15).toFixed(2)

 })

 //Kelvin entered by user 

 document.getElementById('kelvinIn').addEventListener('input',
 function(e){
     
     let kel = e.target.value;
     // k to f 
     document.getElementById('farenOut').innerHTML = ((kel -273.15) * 1.8 + 32).toFixed(2);
     // print k 
     document.getElementById('kelvinOut').innerHTML = (kel);
    //k to c kelvin - 273.15
    document.getElementById('celsiusOut').innerHTML= ((kel - 273.15).toFixed(2));
  })

  //reset button ,clears fields back to normal 

  
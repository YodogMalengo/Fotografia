/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function LoadHeader(){
  
 for (var x=1;x<=7;x++){
  if(x==2)
        document.getElementById("2A").style.backgroundImage="url(../fotos/Logo.jpg)";
  else
      document.getElementById(x+"A").style.backgroundImage="url(../fotos/"+num()+".jpg)";
   //  
    }
   //  setInterval(LoadHeader, 9000);
}
function num(){
    return y = Math.floor(Math.random() * (8 - 1)) + 1;
}
function carrega(){
    
} 
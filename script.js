// Favourite number

const heartIcon = document.getElementsByClassName("heart-iconse")  
 let convoheart = parseInt(document.getElementById("hearts").innerText)

     for(let icon of heartIcon){
        icon.addEventListener("click",function(){
           convoheart =convoheart+ 1
          document.getElementById("hearts").innerText = convoheart 
        
     })
     }

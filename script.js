// Favourite number

const heartIcon = document.getElementsByClassName("heart-iconse");
let convoheart = parseInt(document.getElementById("hearts").innerText);

for (let icon of heartIcon) {
  icon.addEventListener("click", function () {
    convoheart = convoheart + 1;
    document.getElementById("hearts").innerText = convoheart;
  });
}

//  call section
const calls = document.getElementsByClassName("call-btns");
let coinNum = parseInt(document.getElementById("coins").innerText);
let cart_container = document.getElementById("cart-containers");
for (let call of calls) {
  call.addEventListener("click", function () {
    let grandparent = call.parentElement.parentElement;
    let nam = grandparent.children[1].innerText;
    let num = grandparent.children[3].innerText;
    let time = new Date().toLocaleTimeString();
    coinNum = coinNum - 20;
    if (coinNum < 0) {
      alert("You don’t have enough coins. It will take at least 20 coins to make a call...");
    } else {
      alert(`calling ${nam}  ${num}...`);
      document.getElementById("coins").innerText = coinNum;
      const div = document.createElement("div");
      div.innerHTML = ` 
      <div class="flex justify-between  items-center bg-[#f4f5f4] rounded-2xl p-6 mb-4">
                        <div><h1 class="font-bold">${nam}</h1><p>${num}</p></div>
                       <p>${time}</p>
                    </div>`;
      cart_container.appendChild(div);
    }
  });
}

// Call History

document.getElementById("clears").addEventListener("click",function(){
    cart_container.innerHTML = ""
})

// copy section

let copyCount = parseInt( document.getElementById("copyet").innerText)
    
let allcopy = document.getElementsByClassName("copy-btns")
for(let one of allcopy){
   one.addEventListener("click",function(){
      copyCount = copyCount + 1
      let grandparent = one.parentElement.parentElement; 
      let num = grandparent.children[3].innerText;
       document.getElementById("copyet").innerText = copyCount
      alert(` The number has been copied. ${num}`)
      navigator.clipboard.writeText(num);
   })
}
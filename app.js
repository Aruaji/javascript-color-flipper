const colors = ["green", "red", "rgba(133,122,200)", "#f15025",`purple`,'yellow'];
const btn= document.getElementById(`btn`);
const differentcolor= document.querySelector(".color");

btn.addEventListener(`click`,function(){
 const randindex=colors[great()];
 document.body.style.backgroundColor=randindex
 differentcolor.textContent=randindex
})

function great(){
 return Math.floor(Math.random()*colors.length)
}
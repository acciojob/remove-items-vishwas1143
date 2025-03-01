//your JS code here. If required.
let colors = document.getElementById("colorSelect");
let button =document.getElementById("btn");
button.addEventListener('click',()=>{
	colors.remove(colors.selectedIndex);
})


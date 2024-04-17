let yes=document.getElementById("yes");
let no=document.getElementById("no");
let heading=document.querySelector("h1");
let image=document.querySelector("img");
let button=document.querySelector(".button")
function random(){
    no.classList.add("random");
    let top=Math.floor(Math.random()*300);
    let right=Math.floor(Math.random()*400);
    no.style.top=top+"px";
    no.style.right=right+"px";
}
no.addEventListener("mouseenter",()=>{
    random();
})
yes.addEventListener("click",()=>{
    heading.innerText="Haan Bhai tu Ha Chutiya";
    image.src="OIP.jpeg";
    button.classList.add("yes");
})

let btn1=document.querySelector("#btn1")
let p=document.querySelector("div")
btn1.addEventListener("click",()=>{
    p.style.display="block"
    p.style.fontSize="60px"
    p.style.backgroundColor="red"
    p.style.borderRadius="50%"
})
let btn2=document.querySelector("#btn2")
btn2.addEventListener("click",()=>{
    document.querySelector(".img").style.display="block"
    document.getElementById("img1").style.borderRadius="30px"
    document.getElementById("img2").style.borderRadius="100px"
    document.getElementById("img3").style.borderRadius="50%"
})
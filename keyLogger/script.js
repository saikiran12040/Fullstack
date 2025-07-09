const logdiv=document.getElementById("log")
const statediv=document.getElementById("state")
const startbtn=document.getElementById("startBtn")
const stopbtn=document.getElementById("stopBtn")

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown)
    document.addEventListener("keyup",handleup)
    startbtn.disabled=true
    stopbtn.disabled=false
})

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown", handledown);
    document.removeEventListener("keyup", handleup);
    logdiv.textContent="";
    statediv.textContent="";
    startbtn.disabled=false
    stopbtn.disabled=true
})

function handledown(e){
    logdiv.textContent=`key is ${e.key} pressed down`
    statediv.textContent=`key is down`
}

function handleup(e){
    logdiv.textContent=`key is ${e.key} pressed up`
    statediv.textContent=`key is up`
}

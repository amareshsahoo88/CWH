let button = document.getElementById("btn")

button.addEventListener("click", () =>{
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked</b> Enjoy your click!!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us with right click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key)
})

function getRandomColor(){
    let val1 = Math.ceilo(0 + Math.random()*255);
    let val2 = Math.ceilo(0 + Math.random()*255);
    let val3 = Math.ceilo(0 + Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

setInterval(()=>{
 document.querySelector(".container").style.background = getRandomColor()
},3000);
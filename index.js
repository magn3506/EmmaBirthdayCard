randomColor();

document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#mySound").play()
})

function randomColor(){
    // do whatever you like here
    let r = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector("body").style.backgroundColor = "#" + r
    console.log("hehe")
    setTimeout(randomColor, 100);
}




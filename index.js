document.querySelector('#code65').addEventListener("onkeydown", keyPressed);
document.querySelector('#code65').addEventListener("onkeyup", keyRelease);



for(let i = 65; i <= 90; i++){
    let elem = "#code" + i;
    console.log(document.querySelector(elem));
    console.log(elem);
}

function keyPressed(){
    evt = evt || window.event;
    document.querySelector("#code"+evt.keyCode).style.boxShadow = "5px 5px 6px #20242a,-5px -5px 6px #30343e";
    console.log(evt.keyCode);
}

function keyRelease(evt){
    evt = evt || window.event;
    document.querySelector("#code"+evt.keyCode).style.boxShadow = "5px 5px 9px #101215, -5px -5px 9px #404653";
    console.log(evt.keyCode);
}
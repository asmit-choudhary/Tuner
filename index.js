
document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyRelease);

const audioControls = document.createElement("audio");

function play(source){
    audioControls.setAttribute("src", source);
    audioControls.load();
    audioControls.play();
}

function keyPressed(evt){
    evt = evt || window.event;
    if((evt.keyCode > 47 && evt.keyCode < 58) || (evt.keyCode > 64 && evt.keyCode < 91)){
        document.querySelector("#code"+evt.keyCode).style.boxShadow = "5px 5px 6px #20242a,-5px -5px 6px #30343e";
        play(NOTES[evt.keyCode].noteName);
        console.log(evt.keyCode);
    }
}

function keyRelease(evt){
    evt = evt || window.event;
    if((evt.keyCode > 47 && evt.keyCode < 58) || (evt.keyCode > 64 && evt.keyCode < 91)){
        document.querySelector("#code"+evt.keyCode).style.boxShadow = "5px 5px 9px #101215, -5px -5px 9px #404653";
        console.log(evt.keyCode);
    }
}
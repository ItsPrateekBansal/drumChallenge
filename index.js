var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var maps = {
    "w":"tom-1.mp3",
    "a":"tom-2.mp3",
    "s":"tom-3.mp3",
    "d":"tom-4.mp3",
    "j":"snare.mp3",
    "k":"crash.mp3",
    "l":"kick-bass.mp3"
}
document.addEventListener('keypress',logkey);
function logkey(e){
    var ke = e.key;
    let audio_val = "sounds/"+maps[ke];
    var audio = new Audio(audio_val);
    audio.play();
}
for(var i = 0 ; i < numberOfDrumButtons ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let val = this.innerText;
        let audio_url = "sounds/"+maps[val];
        var audio_ = new Audio(audio_url);
        audio_.play();
    })
}





// var audio = new Audio('sounds/tom-1.mp3')
//         audio.play();
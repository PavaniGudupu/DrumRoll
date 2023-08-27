var btn = document.querySelectorAll(".drum").length;
for(var i=0; i<btn; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handle);
    function handle(){
        var buttonInner = this.innerHTML;
    makeSound(buttonInner);
    btnAnimation(buttonInner);
    }
}

document.addEventListener("keypress", function(event){

    makeSound(event.key);
    btnAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        case 'l':
            var kickbass = new Audio("kick-bass.mp3");
            kickbass.play();
            break;
        default:
            console.log(buttonInner);
            break;
    }
}

function btnAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");


setTimeout(removeAnimation, 100);

function removeAnimation(){
activeButton.classList.remove("pressed");
}

}
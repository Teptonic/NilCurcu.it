const loader = document.getElementById('waitForClick');
const music = document.getElementById('background-music');

window.addEventListener('click', function() {
    

    loader.style.opacity = 0;


    setTimeout(function(){
        music.volume = 0.1;  // Set volume to 50%
        music.play();
        loader.remove()
    }, 350)
});


function toggleMusic(){
    if (toggled == true){
        music.pause();
        document.getElementById('toggleMusic').src = '../images/pause.png';
        toggled = !toggled;
    } else if (toggled == false){
        music.play();
        document.getElementById('toggleMusic').src = '../images/play.png';
        toggled = !toggled;
    }
}

document.getElementById('toggleMusic').addEventListener('click', toggleMusic)
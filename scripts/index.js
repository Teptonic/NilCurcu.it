const loader = document.getElementById('waitForClick');
const music = document.getElementById('background-music');


function loadSite(){
    loader.style.opacity = 0;

    let randomSong = Math.floor(Math.random() * 5)
    console.log(randomSong)


    // Chooses random song


    if (randomSong == 0){
        music.src = './sounds/dodge_this.mp3'
    } else if (randomSong == 1) {
        music.src = './sounds/speed_is_life.mp3'
    } else if (randomSong == 2) {
        music.src = './sounds/CuteDepressed.mp3'
    } else if (randomSong == 3) {
        music.src = './sounds/wyw.mp3'
    } else if (randomSong == 4) {
        music.src = './sounds/Young_Kid.mp3'
    }



    setTimeout(function(){
        music.volume = 0.075;  // Set volume to 50%
        music.play();
        loader.remove()
    }, 350)
    window.removeEventListener('click', loadSite)
}

window.addEventListener('click', loadSite);



const audio = document.getElementById('background-music');
const volumeControl = document.getElementById('volumeControl');

volumeControl.addEventListener('input', function() {
    audio.volume = this.value;
});

// Set initial volume
audio.volume = volumeControl.value;

// Set initial volume
music.volume = volumeControl.value;
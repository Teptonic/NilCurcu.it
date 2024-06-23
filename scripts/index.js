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
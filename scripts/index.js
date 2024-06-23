window.addEventListener('click', function() {
    

    setTimeout(function(){
        var audio = document.getElementById('background-music');
        audio.volume = 0.5;  // Set volume to 50%
        audio.play();
    }, 500)
});
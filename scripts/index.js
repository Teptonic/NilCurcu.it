window.addEventListener('click', function() {
    

    // Get the element to fade out
    const element = document.getElementById('waitForClick');

    element.style.opacity = 0;


    setTimeout(function(){
        var audio = document.getElementById('background-music');
        audio.volume = 0.1;  // Set volume to 50%
        audio.play();
    }, 250)
});
  jQuery(function($) {

    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById('play-pause');
    var muteButton = document.getElementById("mute");
    var spkrButton = document.getElementById("bo-speaker");
    var fullScreenButton = document.getElementById("full-screen");
    var whatsPlaying = document.getElementById( 'whatsPlaying' );
    var seekBar = document.getElementById( 'volumeControl' );
    var volumeBar = document.getElementById( 'volumeBar' );
    
    var setVolume = function(event) { 
        event.stopPropagation();
        video.volume = this.value / 100;
        if(this.value == 0 ) {
            jQuery('#volumeBar .fa, #volumeBar .fa').addClass('fa-volume-off').removeClass('fa-volume-down').removeClass('fa-volume-up');
        }else if(this.value <= 60 ) {
            jQuery('#volumeBar .fa, #volumeBar .fa').addClass('fa-volume-down').removeClass('fa-volume-off').removeClass('fa-volume-up');
        }else {
            jQuery('#volumeBar .fa, #volumeBar .fa').addClass('fa-volume-up').removeClass('fa-volume-down').removeClass('fa-volume-off');
        }
        jQuery('#seek-bar').attr('title', this.value);
        return video.volume;
    };
            
    
    if( volumeBar !== undefined && volumeBar !== null ) {
        seekBar.addEventListener('change', setVolume);
        seekBar.addEventListener('oninput', setVolume);
        volumeBar.addEventListener('click', function() {
            jQuery(this).toggleClass('show');
        });
    }});

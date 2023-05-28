import throttle from "lodash.throttle";
import Vimeo from '@vimeo/player'

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const KayStorage = "videoplayer-current-time";

player.on('timeupdate', throttle (function (data){
    localStorage.setItem(KayStorage, JSON.stringify(data.seconds));
}),1000);

player.setCurrentTime(JSON.parse(localStorage.getItem(KayStorage))).then(function(seconds){
    
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
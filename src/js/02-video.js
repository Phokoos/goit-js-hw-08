import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = () => {
	console.log("Video play");
} 

// player.on("timeupdate", (target) => {
// 	console.log(target);
// })

const check = () => {
	player.on("timeupdate", (target) => {
		console.log(target.seconds);
	})

throttle(check, 500);

player.setCurrentTime(30).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
			 console.log("Ohh, false time");
            break;
        default:
            // some other error occurred
			 console.log("Ohh, false value");
            break;
    }
});



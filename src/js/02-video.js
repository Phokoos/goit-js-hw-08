import throttle from 'lodash.throttle';	
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_TIME_STORAGE_KEY = 'videoplayer-current-time';

const check = () => {
	if (localStorage.getItem(VIDEO_TIME_STORAGE_KEY) !== null) {
		return localStorage.getItem(VIDEO_TIME_STORAGE_KEY);
	}
	return 0;	
}

const currentTime = check();

player.setCurrentTime(currentTime);	

player.on('timeupdate', throttle(setCurrentTime, 1000));

function setCurrentTime(value) {
	localStorage.setItem(VIDEO_TIME_STORAGE_KEY, value.seconds);
}


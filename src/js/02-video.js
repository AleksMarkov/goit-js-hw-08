import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const frame = 'videoplayer-current-time';
  const timeSec = data.seconds;
  localStorsave(frame, timeSec);
}
const newTime = Number(localStorget('videoplayer-current-time'));
player.setCurrentTime(newTime);

function localStorsave(frame, timeSec) {
  localStorage.setItem(frame, JSON.stringify(timeSec));
}

function localStorget(frame) {
  const data = localStorage.getItem(frame);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

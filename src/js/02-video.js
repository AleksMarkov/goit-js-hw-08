import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const name = 'videoplayer-current-time';
  const time = data.seconds;
  saveTolS(name, time);
}
const newTime = Number(getFromLS('videoplayer-current-time'));
player.setCurrentTime(newTime);

function saveTolS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

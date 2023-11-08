import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(forInput, 500));
form.addEventListener('submit', forSubmit);
const val = 'feedback-form-state';
const { email, message } = form.elements;
const data = localStorget(val) || { email: '', message: '' };
email.value = data.email || '';
message.value = data.message || '';

function forInput() {
  const cont = {
    email: email.value,
    message: message.value,
  };
  localStorsave(val, cont);
}

function forSubmit(evt) {
  evt.preventDefault();
  const emailValue = email.value;
  const messageValue = message.value;
  if (emailValue === '' || messageValue === '') {
    return alert('Wright down in all fileds, please.');
  } else {
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(val);
    form.reset();
  }
}

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

let passEl = document.querySelector('.js-check.pass');
let failEl = document.querySelector('.js-check.fail');

if ('paintWorklet' in CSS) {
  // Paint API supported
  passEl.style.display = 'block';
} else {
  // Paint API not supported
  failEl.style.display = 'block';
}
'use strict';

// write your code here
const logo = document.querySelector('.logo');

const success = document.createElement('div');

success.className = 'message';

const error = document.createElement('div');

error.className = 'error-message';

logo.style.cursor = 'pointer';

logo.addEventListener('click', () => {
  Promise.resolve(`Promise was resolved!`).then((message) => {
    const textNode = document.createTextNode(message);

    success.appendChild(textNode);
  });
});

setTimeout(() => {
  Promise.reject(new Error('Promise was rejected!')).catch((message) => {
    const textNode = document.createTextNode(message);

    error.appendChild(textNode);
  });
}, 3.0 * 1000);

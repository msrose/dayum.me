import dayum from 'dayum';

const headerElement = document.createElement('h1');
const messageElement = document.createElement('div');
messageElement.id = 'message';

const count = /a=(\d+)/.exec(location.search);
headerElement.innerText = (count ? dayum(parseInt(count[1], 10)) : dayum.daaaaaaaaaaaaaaaaayum()).toUpperCase();

const message = /m=([^&]+)/.exec(location.search);
if(message) {
  messageElement.innerText = decodeURIComponent(message[1]).split('_').join(' ');
}

const app = document.getElementById('app');
app.appendChild(headerElement);
app.appendChild(messageElement);

const setHeaderHeight = () => {
  const marginTop = Math.max((window.innerHeight - headerElement.offsetHeight - messageElement.offsetHeight) / 2, 0);
  headerElement.style.marginTop = `${marginTop}px`;
};

setHeaderHeight();
window.addEventListener('resize', setHeaderHeight);

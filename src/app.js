import dayum from 'dayum';

const headerElement = document.getElementById('dayum');
const messageElement = document.getElementById('message');
const count = /a=(\d+)/.exec(location.search);
headerElement.innerText = (count ? dayum(parseInt(count[1], 10)) : dayum.daaaaaaaaaaaaaaaaayum()).toUpperCase();
const message = /m=([^&]+)/.exec(location.search);
if(message) {
  messageElement.innerText = decodeURIComponent(message[1]).split('_').join(' ');
}
const setHeaderHeight = function() {
  headerElement.style.marginTop = Math.max((window.innerHeight - headerElement.offsetHeight - messageElement.offsetHeight) / 2, 0) + 'px';
};
setHeaderHeight();
window.addEventListener('resize', setHeaderHeight);

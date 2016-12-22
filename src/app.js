/* globals Buffer */

import dayum from 'dayum';

const urlData = Buffer.from(location.search.substring(1), 'base64').toString();
let firstColonIndex = urlData.indexOf(':');
if(firstColonIndex < 0) {
  firstColonIndex = urlData.length;
}
const count = Math.min(parseInt(urlData.substring(0, firstColonIndex), 10), 250);
const message = urlData.substring(firstColonIndex + 1);

const headerElement = document.createElement('h1');
const messageElement = document.createElement('div');
messageElement.id = 'message';
headerElement.innerText = (count > 0 ? dayum(count) : dayum.daaaaaaaaaaaaaaaaayum()).toUpperCase();
messageElement.innerText = message;

const app = document.getElementById('app');
app.appendChild(headerElement);
app.appendChild(messageElement);

const setHeaderHeight = () => {
  const marginTop = Math.max((window.innerHeight - headerElement.offsetHeight - messageElement.offsetHeight) / 2, 0);
  headerElement.style.marginTop = `${marginTop}px`;
};
setHeaderHeight();
window.addEventListener('resize', setHeaderHeight);

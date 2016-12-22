import './main.scss';
import dayum from 'dayum';

const MainComponent = ({ count, message }) => {
  const titleElement = document.createElement('h1');
  titleElement.className = 'title';
  titleElement.innerText = (count > 0 ? dayum(count) : dayum.daaaaaaaaaaaaaaaaayum()).toUpperCase();

  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.innerText = message;

  const main = document.createElement('div');
  main.className = 'main';
  main.appendChild(titleElement);
  main.appendChild(messageElement);
  return main;
};

export default MainComponent;

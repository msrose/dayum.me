/* globals Buffer */

import './header.scss';

import { computeLink } from './url-helpers';

const FormComponent = ({ origin }) => {
  const wrapper = document.createElement('div');
  const length = document.createElement('input');
  length.type = 'text';
  length.placeholder = 'Dayum length';
  const message = document.createElement('input');
  message.type = 'text';
  message.placeholder = 'Message';
  const output = document.createElement('input');
  output.placeholder = 'URL to share';
  const linkComputer = (event) => {
    if(event.keyCode !== 9) { // if they don't hit the tab key
      output.value = computeLink({ origin, count: length.value, message: message.value });
    }
  };
  length.addEventListener('keyup', linkComputer);
  message.addEventListener('keyup', linkComputer);
  output.addEventListener('focus', (event) => {
    event.target.select();
  });
  wrapper.appendChild(length);
  wrapper.appendChild(message);
  wrapper.appendChild(output);
  return wrapper;
};

const HeaderComponent = ({ origin }) => {

  const link = document.createElement('a');
  link.href = '#';
  link.innerText = 'Generate your own two-syllable damn';

  const form = FormComponent({ origin });
  form.style.display = 'none';

  let formOpen = false;
  link.addEventListener('click', (event) => {
    event.preventDefault();
    form.style.display = formOpen ? 'none' : 'block';
    formOpen = !formOpen;
  });

  const header = document.createElement('div');
  header.className = 'header';
  header.appendChild(link);
  header.appendChild(form);
  return header;
};

export default HeaderComponent;

import './header.scss';

const HeaderComponent = () => {
  const info = document.createElement('div');
  info.innerText = 'Two-syllable damn generator';

  const link = document.createElement('a');
  link.href = '#';
  link.innerText = 'Generate your own';
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });

  const header = document.createElement('div');
  header.className = 'header';
  header.appendChild(info);
  header.appendChild(link);
  return header;
};

export default HeaderComponent;

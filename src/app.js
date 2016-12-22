import './global.scss';

import { extractUrlData } from './url-helpers';
import HeaderComponent from './header';
import MainComponent from './main';

const app = document.getElementById('app');

const { count, message } = extractUrlData(location.search);

const header = HeaderComponent({ origin: location.origin });
const main = MainComponent({ count, message });

app.appendChild(header);
app.appendChild(main);

const setMainMarginTop = () => {
  const marginTop = Math.max((window.innerHeight - main.offsetHeight) / 2 - header.offsetHeight, 0);
  main.style.marginTop = `${marginTop}px`;
};
setMainMarginTop();
window.addEventListener('resize', setMainMarginTop);

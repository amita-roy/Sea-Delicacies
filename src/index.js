import navbar from './nav.js';
import header from './header.js';

import headImage from './head.png';
import './style.css';

const mainContainer = document.querySelector('#content');
mainContainer.appendChild(navbar());
mainContainer.appendChild(header());

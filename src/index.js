import navbar from './nav.js';
import header from './header.js';
import about from './about.js';
import './style.css';

const mainContainer = document.querySelector('#content');
mainContainer.appendChild(navbar());
mainContainer.appendChild(header());
mainContainer.appendChild(about());

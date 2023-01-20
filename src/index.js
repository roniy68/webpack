import _ from 'lodash';
import printMe from './print.js';

// Importing Style
import './style.css';

// Importing Images
import Icon from './assets/drsight.png';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    // Add icon
    const myIcon = new Image();
    myIcon.src = Icon;

    document.body.appendChild(myIcon);

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
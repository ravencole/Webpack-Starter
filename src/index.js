require('./styles/styles.scss');

const h1 = document.createElement('h1'),
      content = document.createTextNode('Up and Running!');

h1.appendChild(content);
document.body.insertBefore(h1, document.body.firstChild);
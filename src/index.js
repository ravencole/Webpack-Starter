import Node from './components/Nodes';
import { randomBetweenTwoNumbers } from './helpers/NumberHelpers';
require('./styles/styles.scss');

const workInProgress = document.createElement('h1'),
      content = document.createTextNode('We are currently under construction');

workInProgress.appendChild(content);
workInProgress.classList.add('tmp');

document.body.insertBefore(workInProgress, document.body.firstChild);

// function getRandomHeight() {
//     return `${randomBetweenTwoNumbers(200, window.innerHeight - 300)}px`;
// }

// function getRandomWidth() {
//     return `${randomBetweenTwoNumbers(50, window.innerWidth - 160)}px`;
// }

// const Server = {
//     tag: 'Server',
//     location: {
//         x: getRandomHeight(),
//         y: getRandomWidth()
//     },
//     link: '/Server'
// }

// const Code = {
//     tag: 'Code',
//     location: {
//         x: getRandomHeight(),
//         y: getRandomWidth()
//     },
//     link: '/Code'
// }

// const Portfolio = {
//     tag: 'Portfolio',
//     location: {
//         x: getRandomHeight(),
//         y: getRandomWidth()
//     },
//     link: '/Portfolio'
// }

// const About = {
//     tag: 'About',
//     location: {
//         x: getRandomHeight(),
//         y: getRandomWidth()
//     },
//     link: '/About'
// }

// const One = {
//     tag: 'One',
//     location: {
//         x: getRandomHeight(),
//         y: getRandomWidth()
//     },
//     link: '/One'
// }

// const Two = {
//     tag: 'Two',
//     location: {
//         x: getRandomHeight(),
//         y: getRandomWidth()
//     },
//     link: '/Two'
// }

// const Three = {
//     tag: 'Three',
//     location: {
//         x: getRandomHeight(),
//         y: getRandomWidth()
//     },
//     link: '/Three'
// }

// Node.createNodes([ Server, Code, Portfolio, About, One, Two, Three ]);















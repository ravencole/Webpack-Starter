import { appendChildren, createElement, insertFirst } from '../helpers/DOMHelpers';
import { randomBetweenTwoNumbers, range } from '../helpers/NumberHelpers';

const Node = (() => {
    
})();

export default Node;

 /*
     *  Renders a list of navigation nodes to the body
     *  @param {Array} _nodes is an array of object with info about each node
     *  {
     *      tag: {string} navigation name displayed above node,
     *      link: {string} href to for navigation when the node is clicked
     *  }
     */

 function createNodes(_nodes = []) {
   /*     for(let i = 0; i < _nodes.length; i++) {
            const div = createElement('div', {class: 'node'}),
                  name = createElement('div', {class: 'node--name'}, _nodes[i].tag),
                  smallBorder = createElement('div', {class: 'small--border'}),
                  largeBorder = createElement('div', {class: 'large--border'});

            const elements = [ name, smallBorder, largeBorder ];

            appendChildren(div, elements);

            div.style.left = _nodes[i].location.y;
            div.style.top = _nodes[i].location.x;

            div.addEventListener('click', (e) => {
                console.log(_nodes[i].link);
            });

            insertFirst(document.body, div);
        }*/
    }

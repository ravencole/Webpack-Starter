import jsdom from 'jsdom';
import { assert } from 'chai';
import { appendChildren, createElement, insertFirst } from '../../src/helpers/DOMHelpers';

describe('DOMHelpers', () => {

    describe('appendChildren', () => {
        it('appends an array of children to the target', (done) => {
            jsdom.env({
                html: '<html><body></body></html>',
                done: (err, window) => {
                    const one = window.document.createElement('div'),
                          two = window.document.createElement('div'),
                          three = window.document.createElement('div');

                    appendChildren(window.document.body, [ one, two, three ]);

                    assert.equal(window.document.body.childNodes.length, 3);

                    window.close();
                    done();
                }
            })
        });
        it('returns a reference to the target node', (done) => {
            jsdom.env({
                html: '<html><body></body></html>',
                done: (err, window) => {
                    const one = window.document.createElement('div');

                    const body = appendChildren(window.document.body, [ one ]);

                    assert.deepEqual(body, window.document.body);
                    window.close();
                    done();
                }
            });
        });
    });

    describe('createElement', () => {
        it('returns a created element', (done) => {
            jsdom.env({
                html: '<html><body></body></html>',
                done: (err, window) => {
                    const div = createElement('div');

                    assert.equal(div.innerHTML, '');
                    window.close();
                    done();
                }
            });
        });
        it('adds attributes when passed an object in the second param', (done) => {
            jsdom.env({
                html: '<html><body></body></html>',
                done: (err, window) => {
                    const attrs = {
                        class: 'container',
                        id: 'app',
                        value: '42'
                    }

                    const div = createElement('div', attrs);

                    assert.isTrue(div.classList.contains('container'));
                    assert.equal(div.id, 'app');
                    assert.equal(div.getAttribute('value'), '42');

                    window.close();
                    done();
                }
            });
        });
        xit('adds dataset attributes correctly', (done) => {
            jsdom.env({
                html: '<html><body></body></html>',
                done: (err, window) => {
                    const attrs = {
                        'data-app': 'production',
                        'data-color': 'red'
                    }

                    const div = createElement('div', attrs);

                    assert.equal(div.dataset.app, 'production');

                    window.close();
                    done();
                }
            })
        });
    });

    describe('insertFirst', () => {
        it('insert an element as the first child of the target', (done) => {
            jsdom.env({
                html: '<html><body><div>two</div></body></html>',
                done: (err, window) => {
                    const div = window.document.createElement('div');
                    div.appendChild(window.document.createTextNode('one'));
                    
                    insertFirst(window.document.body, div);

                    const divText = window.document.body.childNodes[0].innerHTML;

                    assert.equal(divText, 'one');

                    window.close();
                    done();
                }
            });
        });
    });

});













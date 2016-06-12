import { assert } from 'chai';
import { sortAlphabetically } from '../../src/helpers/ArrayHelpers';

describe('ArrayHelpers', () => {
    describe('sortAlphabetically', () => {
        it('returns an array', () => {
            assert.isArray(sortAlphabetically([]));
        });

        it('sorts an array alphabetically', () => {
            const unsortedArray = ['c', 'b', 'd', 'a'],
                  sortedArray = ['a', 'b', 'c', 'd'];

            assert.deepEqual(sortAlphabetically(unsortedArray), sortedArray);
        });

        it('sorts with case insensitivity when true is passed in the second param', () => {
            const unsortedArray = ['C', 'b', 'd', 'A'],
                  sortedArray = ['A', 'b', 'C', 'd'];

            assert.deepEqual(sortAlphabetically(unsortedArray, true), sortedArray);
        });

        it('sorts on a specific property if given an array of objects with the property to sort passed in the third param', () => {
            const unsortedArray = [
                {name: 'Arnold', age: 66},
                {name: 'Daniel', age: 45},
                {name: 'Chris', age: 33},
                {name: 'Bert', age: 21}
            ],
                  sortedArray = [
                {name: 'Arnold', age: 66},
                {name: 'Bert', age: 21},
                {name: 'Chris', age: 33},
                {name: 'Daniel', age: 45}
            ];

            assert.deepEqual(sortAlphabetically(unsortedArray, true, 'name'), sortedArray);

        });

        it('sorts an array of objects with case-insensitivity', () => {
            const unsorted = [
                {name: 'Jackie', age: 22, 'hair-color': 'brown'},
                {name: 'Neil', age: 24, 'hair-color': 'blond'},
                {name: 'Robin', age: 26, 'hair-color': 'black'},
                {name: 'Randall', age: 28, 'hair-color': 'pink'},
                {name: 'Alf', age: 30, 'hair-color': 'brown'},
                {name: 'Jacolby', age: 32, 'hair-color': 'black'},
            ];

            const sorted = [
                {name: 'Alf', age: 30, 'hair-color': 'brown'},
                {name: 'Jackie', age: 22, 'hair-color': 'brown'},
                {name: 'Jacolby', age: 32, 'hair-color': 'black'},
                {name: 'Neil', age: 24, 'hair-color': 'blond'},
                {name: 'Randall', age: 28, 'hair-color': 'pink'},
                {name: 'Robin', age: 26, 'hair-color': 'black'},
            ];

            assert.deepEqual(sortAlphabetically(unsorted, true, 'name'), sorted);
        });

        it('throws a TypeError if it is asked to sort on a property that does not exist', () => {
            const error = () => {
                const names = [
                    {name: 'Arnold', age: 66},
                    {name: 'Daniel', age: 45},
                    {name: 'Chris', age: 33},
                    {name: 'Bert', age: 21}
                ]
                sortAlphabetically(names, true, 'height');
            }

            assert.throws(error, TypeError);

        });

        it('throws a TypeError if any of the objects do not have the required property', () => {
            const error = () => {
                const names = [
                    {name: 'Arnold', age: 66},
                    {name: 'Daniel', age: 45},
                    {height: 'Chris', age: 33},
                    {name: 'Bert', age: 21}
                ]
                sortAlphabetically(names, true, 'name');
            }

            assert.throws(error, TypeError);

        });

        it('throws a TypeError if the first parameter is not an Array', () => {
            const error = () => {
                sortAlphabetically('huge list of cute dog names', false, 'dogs');
            }

            assert.throws(error, TypeError, 'The first param must be an Array');
        });
    });
});





















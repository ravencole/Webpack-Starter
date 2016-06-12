import { assert } from 'chai';
import { range, randomBetweenTwoNumbers } from '../../src/helpers/NumberHelpers';

describe('NumberHelpers', () => {
    describe('range', () => {

        it('Returns a boolean', () => {
            assert.isBoolean(range(4, 1, 3));
        });

        it('Determins if a number is in range', () => {
            assert.isTrue(range(4, 1, 12));
            assert.isFalse(range(4, 6, 12));
        });

        it('Throws an error when the second param is larger than the third', () => {
            const error = () => {
                range(1, 66, 22);
            }

            assert.throws(error, TypeError, /_lowRange.+_highRange/);
        });

        it('Throws an error when less than three parameters are passed', () => {
            const error = () => {
                range();
            }

            assert.throws(error, TypeError, /three params/);
        });

    });

    describe('randomBetweenTwoNumbers', () => {
        it('returns a random number within a set range', () => {
            const number = randomBetweenTwoNumbers(15, 20);

            assert.isTrue((number >= 15 && number <= 20));
        });
        it('throws a TypeError when the first param is larger than the second', () => {
            const error = () => {
                randomBetweenTwoNumbers(66, 33);
            }

            assert.throw(error, TypeError, 'The first param may not be larger than the second');
        });
    });
});
import { assert } from 'chai';
import { range } from '../../src/helpers/NumberHelpers';
import jsdom from 'jsdom';
import Coordinates from '../../src/components/Coordinates';

describe('Coordinates', () => {
    it('returns an object of methods', () => {
        assert.isObject(Coordinates);
    });
    describe('getRandomCoordinate', () => {
        afterEach((done) => {
            Coordinates.dumpCoords();
            done();
        });
        it('returns a random number between two numbers', () => {
            const num = Coordinates.generateXCoordinate(0, 1000);

            assert.isTrue((num >= 0 && num <= 1000));
        });
        it('accepts an array that logs previous coordinates', () => {
            const num = Coordinates.generateXCoordinate(0, 1000);

            assert.equal(num, Coordinates.getXCoords()[0]);
        });
        it('function will run recursively until it finds a number a specified amount lower or higher than the other previously generated numbers', () => {
            const nums = [
                Coordinates.generateXCoordinate(0, 1000),
                Coordinates.generateXCoordinate(0, 1000),
                Coordinates.generateXCoordinate(0, 1000),
                Coordinates.generateXCoordinate(0, 1000),
                Coordinates.generateXCoordinate(0, 1000)
            ]

            for(let i = 0; i < nums.length; i++) {
                for(let k = 0; k < nums.length; k++) {
                    if (nums[i] === nums[k]) continue;
                    if (!range(nums[i], nums[k] - 50, nums[k] + 50)) {
                        assert.isTrue(true);
                    }
                }
            }

            assert.equal(Coordinates.getXCoords().length, 5);
        });
        it('sets both x and y coordinates', () => {
            const x = Coordinates.generateXCoordinate(0, 1000),
                  y = Coordinates.generateYCoordinate(0, 1000);

            assert.equal(Coordinates.getXCoords()[0], x);
            assert.equal(Coordinates.getYCoords()[0], y);
        });
        it('sets x and y coordinates in pairs', () => {
            const xAndY = Coordinates.generateXAndYCoordinate([0, 1000], [0, 1000]);

            assert.deepEqual(xAndY, {x: Coordinates.getXCoords()[0], y: Coordinates.getYCoords()[0]});
        });
        it('sets x and y paddings', () => {
            const x = [1, window.innerWidth],
                  y = [1, window.innerHeight]

            Coordinates.setPaddings(x, y);

            const paddings = Coordinates.getPaddings();
            
            assert.deepEqual(x, paddings.xPadding);
            assert.deepEqual(y, paddings.yPadding);
        });
    });
});







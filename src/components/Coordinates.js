import { randomBetweenTwoNumbers, range } from '../helpers/NumberHelpers';

const Coordinates = (() => {
    let xCoords = [],
        yCoords = [],
        xPadding = [0, 1000],
        yPadding = [0, 1000]

    function getRandomCoordinate(lowNum, highNum, log) {
        const num = randomBetweenTwoNumbers(lowNum, highNum);

        for(let i = 0; i < log.length; i++) {
            if (range(num, log[i] - 50, log[i] + 50)) {
                return getRandomCoordinate(lowNum, highNum, log);
            }
        }

        if (log) {
            log.push(num);
        }

        return num;
    }

    function generateXCoordinate(lowNum, highNum) {
        return getRandomCoordinate(lowNum, highNum, xCoords);
    }

    function generateYCoordinate(lowNum, highNum) {
        return getRandomCoordinate(lowNum, highNum, yCoords);
    }

    function generateXAndYCoordinate(_x, _y) {
        const x = _x || xPadding,
              y = _y || yPadding;

        const xCoord = generateXCoordinate(x[0], x[1]),
              yCoord = generateYCoordinate(y[0], y[1]);

        return {
            x: xCoord,
            y: yCoord
        }
    }

    function setPaddings(x, y) {
        xPadding = x;
        yPadding = y;

        return {
            xPadding,
            yPadding
        }
    }

    function setXpadding(x) {
        xPadding = x;
    }

    function setYpadding(y) {
        yPadding = y;
    }

    function getPaddings() {
        return {
            xPadding,
            yPadding
        }
    }

    function getXCoords() {
        return xCoords;
    }

    function getYCoords() {
        return yCoords;
    }

    function dumpCoords() {
        xCoords = [];
        yCoords = [];
        return true;
    }

    return {
        generateXCoordinate,
        generateYCoordinate,
        generateXAndYCoordinate,
        getXCoords,
        getYCoords,
        dumpCoords,
        setPaddings,
        setXpadding,
        setYpadding,
        getPaddings
    };
})();

export default Coordinates;
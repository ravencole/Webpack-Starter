export function randomBetweenTwoNumbers(_num1, _num2) {
    if (_num1 >= _num2) {
        throw new TypeError('The first param may not be larger than the second', 'NumberHelpers.js');
    }

    return Math.floor(Math.random() * (_num2 - _num1 + 1)) + _num1;
}

export function range(_number, _lowRange, _highRange) {
    if (arguments.length <= 2) {
        throw new TypeError('range requires that three params be passed', 'NumberHelpers.js');
    }

    if (_lowRange >= _highRange) {
        throw new TypeError('param _lowRange cannot be larger than param _highRange', 'NumberHelpers.js');
    }

    if (_number >= _lowRange && _number <= _highRange) {
        return true;
    }
    return false;
}
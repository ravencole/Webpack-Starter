export function sortAlphabetically(_items, _caseInsensitivity, _property) {

    if (!Array.isArray(_items)) {
        throw new TypeError('The first param must be an Array', 'ArrayHelpers.js');
    }

    _items.sort((a, b) => {

        if (_property && a.hasOwnProperty(_property) && b.hasOwnProperty(_property)) {
            a = a[_property];
            b = b[_property];
        } else if (_property) {
            throw new TypeError(`All elements must have property \'${_property}\' in order to be sorted by it.`, 'ArrayHelpers.js');
        }

        if (_caseInsensitivity) {
            a = a.toLowerCase();
            b = b.toLowerCase();
        }

        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1
        }
        return 1

    });

    return _items;
}
'use strict';

/**
 * Stringify an NLCST node.
 *
 * @param {NLCSTNode} nlcst
 * @return {string}
 */

function nlcstToString(nlcst) {
    var values,
        length,
        children;

    if (nlcst.value) {
        return nlcst.value;
    }

    children = nlcst.children;
    length = children.length;

    /**
     * Shortcut: This is pretty common, and a small performance win.
     */

    if (length === 1 && 'value' in children[0]) {
        return children[0].value;
    }

    values = [];

    while (length--) {
        values[length] = nlcstToString(children[length]);
    }

    return values.join('');
}

module.exports = nlcstToString;

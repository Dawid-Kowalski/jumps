const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('18.0  18.5  17.5  18.5  18.5', () => {
        const actual = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5]);
    
        const expected = 55;
    
        assert.equal(actual, expected);
    });

    it('16.0 15.0 15.0 16.0 15.0', () => {
        const actual = calculateStylePoints([16.0, 15.0, 15.0, 16.0, 15.0]);
    
        const expected = 46;
    
        assert.equal(actual, expected);
    });

    it('13.5 13.5 13.5 14.0 13.5', () => {
        const actual = calculateStylePoints([13.5, 13.5, 13.5, 14.0, 13.5]);
    
        const expected = 40.5;
    
        assert.equal(actual, expected);
    });
});
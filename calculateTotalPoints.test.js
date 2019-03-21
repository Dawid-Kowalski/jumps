const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('mamucia, punkt K 200m, dystans 227.5m, oceny [18.0, 18.5, 17.5, 18.5, 18.5], wiatr -8.4, belka 8.7', () => {
        it('dystans 227.5', () => {
            const actual = calculateTotalPoints(227.7, "mamucia", 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);
    
            const expected = 208.3;
    
            assert.equal(actual, expected);
        });

        it('normalna, punkt K 98m, dystans 94m, oceny [17.5, 16.5, 17.5, 17.5, 17.0], wiatr -12.3, belka 0', () => {
            const actual = calculateTotalPoints(94, "normalna", 98, [17.5, 16.5, 17.5, 17.5, 17.0], -12.3, 0);
    
            const expected = 91.7;
    
            assert.equal(actual, expected);
        });
    });
});
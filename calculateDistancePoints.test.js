const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('mamucia, planica, punkt K 200m', () => {
        it('dystans 227.5', () => {
            const actual = calculateDistancePoints(227.7, "mamucia", 200);
    
            const expected = 153.0;
    
            assert.equal(actual, expected);
        });

        it('dystans 208.5', () => {
            const actual = calculateDistancePoints(208.5, "mamucia", 200);
    
            const expected = 130.2;
    
            assert.equal(actual, expected);
        });

        it('dystans 153', () => {
            const actual = calculateDistancePoints(153, "mamucia", 200);
    
            const expected = 63.6;
    
            assert.equal(actual, expected);
        });
    });

    describe('normalna, pjongjang, punkt K 98m', () => {
        it('dystans 111', () => {
            const actual = calculateDistancePoints(111, "normalna", 98);

            const expected = 86;

            assert.equal(actual, expected);
        });

        it('dystans 93.0', () => {
            const actual = calculateDistancePoints(93, "normalna", 98);

            const expected = 50;

            assert.equal(actual, expected);
        });

        it('dystans 85.5', () => {
            const actual = calculateDistancePoints(85.5, "normalna", 98);

            const expected = 35;

            assert.equal(actual, expected);
        });
    });

    describe('duża, zakopanem, punkt K 120', () => {
        it('dystans 134', () => {
            const actual = calculateDistancePoints(134, "duża", 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });

        it('dystans 119.5', () => {
            const actual = calculateDistancePoints(119.5, "duża", 120);

            const expected = 59.1;

            assert.equal(actual, expected);
        });

        it('dystans 112.5', () => {
            const actual = calculateDistancePoints(112.5, "duża", 120);

            const expected = 46.5;

            assert.equal(actual, expected);
        });
    });
});
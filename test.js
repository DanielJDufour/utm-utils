const { expect } = require('chai');
const isUTM = require('./src/isUTM.js');
const getProjString = require('./src/getProjString');
const getHemisphere = require('./src/getHemisphere.js');
const getZone = require('./src/getZone.js');

describe("Check UTM Identification", function () {
    it("Identifies EPSG Codes Represented as Numbers", function() {
        expect(isUTM(32618)).to.be.true;
    });
    it("Identifies EPSG Codes Represented as a String", function() {
        expect(isUTM('32618')).to.be.true;
    });    
});

describe("Check Hemisphere Identification", function () {
    it("Identifies Northern Hemisphere", function() {
        expect(getHemisphere(32618)).to.equal('N');
    });
    it("Identifies Southern Hemisphere", function() {
        expect(getHemisphere(32718)).to.equal('S');
    });
});

describe("Check Zone Identification", function () {
    it("Identifies Zone", function() {
        expect(getZone(32618)).to.equal(18);
    });
});

describe("Check Proj String Conversion", function () {
    it("Get Proj String", function() {
        expect(getProjString(32618)).to.equal('+proj=utm +zone=18 +ellps=WGS84 +datum=WGS84 +units=m +no_defs');
    });
});

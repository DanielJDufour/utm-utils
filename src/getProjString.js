const getZone = require('./getZone');
const getHemisphere = require('./getHemisphere');

module.exports = function getProjString (projection) {
    const zone = getZone(projection);
    const hemisphere = getHemisphere(projection);
    return `+proj=utm +zone=${zone}${hemisphere === 'S' ? ' +south ' : ' '}+ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
};

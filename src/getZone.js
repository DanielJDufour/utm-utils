module.exports = function getZone (projection) {
    return Number.parseInt(projection.toString().substring(3));
};
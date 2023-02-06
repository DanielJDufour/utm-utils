function getZone(projection) {
  return Number.parseInt(projection.toString().substring(3));
}

module.exports = getZone;
module.exports.default = getZone;

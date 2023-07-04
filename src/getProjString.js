const getZone = require("./getZone");
const getHemisphere = require("./getHemisphere");

function getProjString(projection) {
  const zone = getZone(projection);
  const hemisphere = getHemisphere(projection);
  if (projection.toString().startsWith("269")) {
    // North American Datum of 1983 (NAD83)
    return `+proj=utm +zone=${zone} +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs`;
  } else {
    return `+proj=utm +zone=${zone}${hemisphere === "S" ? " +south " : " "}+ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
  }
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return getProjString;
  });
}

if (typeof module === "object") {
  module.exports = getProjString;
  module.exports.default = getProjString;
}

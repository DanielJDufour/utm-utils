function getZone(projection) {
  return Number.parseInt(projection.toString().substring(3));
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return getZone;
  });
}

if (typeof module === "object") {
  module.exports = getZone;
  module.exports.default = getZone;
}

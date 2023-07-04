// assumes that projection is UTM
function getHemisphere(projection) {
  const projstr = projection.toString();
  if (projstr.startsWith("326") || projstr.startsWith("269")) {
    return "N";
  } else if (projstr.startsWith("327")) {
    return "S";
  }
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return getHemisphere;
  });
}

if (typeof module === "object") {
  module.exports = getHemisphere;
  module.exports.default = getHemisphere;
}

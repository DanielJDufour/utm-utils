function isUTM(projection) {
  const projstr = projection.toString();

  const replaced = projstr.replace("EPSG:", "");

  if (replaced.startsWith("326") || replaced.startsWith("327")) {
    return true;
  }

  const sorted = projstr.split(" ").sort().join(" ");

  if (sorted.match(/^\+datum=WGS84 \+ellps=WGS84 \+no_defs \+proj=utm( \+south)? \+units=m \+zone=\d{1,2}$/)) {
    return true;
  }

  return false;
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return isUTM;
  });
}

if (typeof module === "object") {
  module.exports = isUTM;
  module.exports.default = isUTM;
}

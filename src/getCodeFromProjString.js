function getCodeFromProjString(proj) {
  if (proj.includes("+proj=utm") && proj.includes("+zone=")) {
    const parts = proj.split(" ");
    const zone = parts.find(part => part.startsWith("+zone=")).split("=")[1];
    const south = proj.includes("+south");

    let ellps = parts.find(part => part.startsWith("+ellps="));
    if (ellps) ellps = ellps.split("=")[1];

    if (ellps === "GRS80" && south === false) {
      return Number.parseInt("269" + zone);
    } else {
      const hemisphere = south ? "7" : "6";
      return Number.parseInt("32" + hemisphere + zone);
    }
  }
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return getCodeFromProjString;
  });
}

if (typeof module === "object") {
  module.exports = getCodeFromProjString;
  module.exports.default = getCodeFromProjString;
}

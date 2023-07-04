function getCodeFromEsriWKT(esri_wkt) {
  if (!esri_wkt) return;
  const match = /PROJCS\[\"([^"]+)\"/.exec(esri_wkt);
  if (!match) return;
  const name = match[1];
  if (name.match(/^WGS_1984_UTM_Zone_\d{1,2}(N|S)$/)) {
    const last_part = name.split("_").pop();
    const zone = last_part.substring(0, last_part.length - 1);
    const hemisphere = last_part.substring(last_part.length - 1) == "N" ? 6 : 7;
    return Number.parseInt("32" + hemisphere + zone);
  } else if (name.match(/^NAD_1983_UTM_Zone_\d{1,2}N$/)) {
    const last_part = name.split("_").pop();
    const zone = last_part.substring(0, last_part.length - 1);
    return Number.parseInt("269" + zone);
  }
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return getCodeFromEsriWKT;
  });
}

if (typeof module === "object") {
  module.exports = getCodeFromEsriWKT;
  module.exports.default = getCodeFromEsriWKT;
}

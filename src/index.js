const getCodeFromProjString = require("./getCodeFromProjString.js");
const getCodeFromEsriWKT = require("./getCodeFromEsriWKT.js");
const isUTM = require("./isUTM.js");
const getHemisphere = require("./getHemisphere.js");
const getProjString = require("./getProjString.js");
const getZone = require("./getZone.js");

const utm_utils = { getCodeFromEsriWKT, getCodeFromProjString, getHemisphere, getProjString, getZone, isUTM };

if (typeof define === "function" && define.amd) {
  define(function () {
    return utm_utils;
  });
}

if (typeof module === "object") {
  module.exports = utm_utils;
  module.exports.default = utm_utils;
}

const isUTM = require("./isUTM.js");
const getHemisphere = require("./getHemisphere.js");
const getProjString = require("./getProjString.js");
const getZone = require("./getZone.js");

const utm_utils = { isUTM, getHemisphere, getProjString, getZone };

module.exports = utm_utils;
module.exports.default = utm_utils;

const test = require("flug");
const isUTM = require("./src/isUTM.js");
const getProjString = require("./src/getProjString");
const getHemisphere = require("./src/getHemisphere.js");
const getZone = require("./src/getZone.js");

test("isUTM", ({ eq }) => {
  eq(isUTM(32618), true);
  eq(isUTM("32618"), true);
  eq(isUTM("EPSG:32618"), true);
});

test("getHemisphere", ({ eq }) => {
  eq(getHemisphere(32618), "N");
  eq(getHemisphere(32718), "S");
});

test("getZone", ({ eq }) => {
  eq(getZone(32618), 18);
});

test("getProjString", ({ eq }) => {
  eq(getProjString(32618), "+proj=utm +zone=18 +ellps=WGS84 +datum=WGS84 +units=m +no_defs");
});

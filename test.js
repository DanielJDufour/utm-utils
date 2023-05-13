const test = require("flug");
const { isUTM, getCodeFromProjString, getProjString, getHemisphere, getZone } = require("./src");

test("getCodeFromProjString", ({ eq }) => {
  eq(
    getCodeFromProjString("+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),
    26916
  );
  eq(getCodeFromProjString("+proj=utm +zone=17 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), 32617);
  eq(getCodeFromProjString("+proj=utm +zone=18 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), 32718);
  eq(getCodeFromProjString("+proj=utm +zone=18 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), 32618);
});

test("isUTM", ({ eq }) => {
  eq(isUTM(32618), true);
  eq(isUTM("32618"), true);
  eq(isUTM("EPSG:32618"), true);
  eq(isUTM("+proj=utm +zone=17 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), true);
  eq(isUTM("+proj=utm +zone=18 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), true);
  eq(isUTM(3857), false);
});

test("getHemisphere", ({ eq }) => {
  eq(getHemisphere(32618), "N");
  eq(getHemisphere(32718), "S");
  eq(getHemisphere(26916), "N");
});

test("getZone", ({ eq }) => {
  eq(getZone(32618), 18);
});

test("getProjString", ({ eq }) => {
  eq(getProjString(32618), "+proj=utm +zone=18 +ellps=WGS84 +datum=WGS84 +units=m +no_defs");
  eq(getProjString(32718), "+proj=utm +zone=18 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs");
  eq(getProjString(26916), "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
});

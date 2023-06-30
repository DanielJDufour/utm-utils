const test = require("flug");
const { isUTM, getCodeFromEsriWKT, getCodeFromProjString, getProjString, getHemisphere, getZone } = require("./src");

test("getCodeFromEsriWKT", ({ eq }) => {
  eq(getCodeFromEsriWKT(null), undefined);
  eq(getCodeFromEsriWKT(""), undefined);
  eq(
    getCodeFromEsriWKT(`PROJCS["WGS_1984_UTM_Zone_17N",
  GEOGCS["GCS_WGS_1984",
      DATUM["D_WGS_1984",
          SPHEROID["WGS_1984",6378137.0,298.257223563]],
      PRIMEM["Greenwich",0.0],
      UNIT["Degree",0.0174532925199433]],
  PROJECTION["Transverse_Mercator"],
  PARAMETER["False_Easting",500000.0],
  PARAMETER["False_Northing",0.0],
  PARAMETER["Central_Meridian",-81.0],
  PARAMETER["Scale_Factor",0.9996],
  PARAMETER["Latitude_Of_Origin",0.0],
  UNIT["Meter",1.0]]
`),
    32617
  );
});

test("getCodeFromProjString", ({ eq }) => {
  eq(
    getCodeFromProjString("+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),
    26916
  );
  eq(getCodeFromProjString("+proj=utm +zone=17 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), 32617);
  eq(getCodeFromProjString("+proj=utm +zone=18 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), 32718);
  eq(getCodeFromProjString("+proj=utm +zone=18 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), 32618);
  eq(getCodeFromProjString("+proj=utm +zone=17 +datum=WGS84 +units=m +no_defs"), 32617);
  eq(getCodeFromProjString("+proj=utm +zone=17 +datum=WGS84 +units=m"), 32617);
  eq(getCodeFromProjString("+datum=WGS84 +proj=utm +units=m +zone=17"), 32617);
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

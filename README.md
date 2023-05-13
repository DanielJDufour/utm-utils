# utm-utils
Super Light-Weight Utility Functions for Working with [Universal Transverse Mercator](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)

# Usage
## Check if EPSG Code Refers to UTM
```js
const isUTM = require('utm-utils/src/isUTM');

isUTM(32619); // true
isUTM("32619"); // true
isUTM("EPSG:32619"); // true
isUTM("+proj=utm +zone=17 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"); // true

isUTM("3857"); // false
```

## Get Hemisphere from EPSG Code
```js
const getHemisphere = require('utm-utils/src/getHemisphere');

getHemisphere('32617'); // "N"
```

## Get Zone from EPSG Code
```js
const getZone = require('utm-utils/src/getZone');

getZone('32617'); // 17
```

## Get PROJ String from EPSG Code
```js
const getProjString = require('utm-utils/src/getProjString');

getProjString('32617');
"+proj=utm +zone=17 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"
```

## Get EPSG Code from a PROJ.4 String
```js
const getCodeFromProjString = require('utm-utils/src/getCodeFromProjString');

getCodeFromProjString("+proj=utm +zone=17 +ellps=WGS84 +datum=WGS84 +units=m +no_defs");
32617

getCodeFromProjString("+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs")
26916
```

## Get EPSG Code from ESRI Well-Known Text
```js
const getCodeFromEsriWKT = require('utm-utils/src/getCodeFromEsriWKT.js');

getCodeFromEsriWKT(`PROJCS["WGS_1984_UTM_Zone_17N",GEOGCS["GCS_WGS_1984",...,UNIT["Meter",1.0]]`);
32617
```

# Support
Email the package author at daniel.j.dufour@gmail.com or post an issue at https://github.com/danieljdufour/utm-utils/issues

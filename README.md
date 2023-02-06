# utm-utils
Super Light-Weight Utility Functions for Working with Universal Transverse Mercator

# Usage
## Check if EPSG Code Refers to UTM
```javascript
const isUTM = require('utm-utils/src/isUTM');

isUTM(32619); // true
isUTM("32619"); // true
isUTM("EPSG:32619"); // true
isUTM("+proj=utm +zone=17 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"); // true

isUTM("3857"); // false
```

# Get Hemisphere from EPSG Code
```javascript
const getHemisphere = require('utm-utils/src/getHemisphere');

getHemisphere('32617'); // "N"
```

# Get Zone from EPSG Code
```javascript
const getZone = require('utm-utils/src/getZone');

getZone('32617'); // 17
```

# Get PROJ String from EPSG Code
```javascript
const getProjString = require('utm-utils/src/getProjString');

getProjString('32617');
"+proj=utm +zone=17 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"
```

# Support
Email the package author at daniel.j.dufour@gmail.com or post an issue at https://github.com/danieljdufour/utm-utils/issues

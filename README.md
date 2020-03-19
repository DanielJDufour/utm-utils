# utm-utils
Super Light-Weight Utility Functions for Working with Universal Transverse Mercator

# Usage
## Check if EPSG Code Refers to UTM
```javascript
const isUTM = require('utm-utils/src/isUTM');

const result = isUTM(32619)
//true
```

# Get Hemisphere for UTM
```javascript
const getHemisphere = require('utm-utils/src/getHemisphere');

const hemisphere = getHemisphere('32617')
// N
```

# Get Zone for EPSG Code
```javascript
const getZone = require('utm-utils/src/getZone');

const zone = getHemisphere('32617')
// 17
```

# Support
Email the package author at daniel.j.dufour@gmail.com or post an issue at https://github.com/danieljdufour/utm-utils/issues

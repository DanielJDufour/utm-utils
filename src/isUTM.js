function isUTM(projection) {
  const projstr = projection.toString().replace("EPSG:", "");
  return projstr.startsWith("326") || projstr.startsWith("327");
}

module.exports = isUTM;
module.exports.default = isUTM;

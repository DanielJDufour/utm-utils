module.exports = function getHemisphere (projection) {
    const projstr = projection.toString();
    if (projstr.startsWith('326')) {
      return 'N';
    } else if (projstr.startsWith('327')) {
      return 'S';
    }
  }
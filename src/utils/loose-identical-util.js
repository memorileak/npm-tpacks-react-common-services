class LooseIdenticalUtil {
  looseIdentical(a, b) {
    return (a === b) || (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b));
  }
}

const looseIdenticalUtil = new LooseIdenticalUtil();
module.exports = {looseIdenticalUtil};

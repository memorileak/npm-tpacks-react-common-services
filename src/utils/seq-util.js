class SeqUtil {
  seq(from, to, step = 1) {
    if (from === to) {
      return [from];
    }
    if (step <= 0) {
      return [];
    }
    if (from < to) {
      const result = [];
      for (let i = from; i <= to; i += step) {
        result.push(i);
      }
      return result;
    }
    if (from > to) {
      const result = [];
      for (let i = from; i >= to; i -= step) {
        result.push(i);
      }
      return result;
    }
    return [];
  }
}

const seqUtil = new SeqUtil();
module.exports = {seqUtil};

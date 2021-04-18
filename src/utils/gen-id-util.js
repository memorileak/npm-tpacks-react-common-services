class GenIdUtil {
  constructor() {
    this.charset = '0123456789abcdefghijklmnopqrstuvwxyz';
  }

  genId(idLength = 12) {
    let generatedId = '';
    for (let i = 0; i < idLength; i += 1) {
      const randomCharacter = this.charset[Math.floor(Math.random() * this.charset.length)];
      generatedId = generatedId.concat(randomCharacter);
    }
    return generatedId;
  }
}

const genIdUtil = new GenIdUtil();
module.exports = {genIdUtil};

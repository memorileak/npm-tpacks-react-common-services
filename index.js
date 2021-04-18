const {ReactMix} = require('./src/mixers/react-mix.js');

const {MixinWithFilter} = require('./src/mixins/mixin-with-filter.js');
const {MixinWithPaging} = require('./src/mixins/mixin-with-paging.js');
const {MixinWithForm} = require('./src/mixins/mixin-with-form.js');
const {MixinWithTable} = require('./src/mixins/mixin-with-table');

module.exports = {
  ReactMix,

  MixinWithFilter,
  MixinWithPaging,
  MixinWithForm,
  MixinWithTable,
};

const {looseIdenticalUtil} = require('../utils/loose-identical-util.js');
const {genIdUtil} = require('../utils/gen-id-util.js');

class FormService {
  constructor(component, initialForm) {
    this.component = component;
    this.stateField = `formServiceData${genIdUtil.genId()}`;
    this.component.state = this.component.state || {};
    this.component.state[this.stateField] = initialForm || {};
  }

  getValueOfField(field) {
    return this.component.state[this.stateField][field];
  }

  setValueForField(field, value) {
    this.component.setState((prevState) => ({
      [this.stateField]: {...prevState[this.stateField], [field]: value},
    }));
  }

  // this function should be used in componentDidUpdate hook
  whichFieldsChanged(prevState, thisState) {
    const changed = {};
    Object.keys(thisState[this.stateField]).forEach((field) => {
      if (
        !looseIdenticalUtil.looseIdentical(
          prevState[this.stateField][field],
          thisState[this.stateField][field],
        )
      ) {
        changed[field] = true;
      }
    });
    return changed;
  }
}

module.exports = {FormService};
